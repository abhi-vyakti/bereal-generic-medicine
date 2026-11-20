const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Load Seeded Medicine Catalog & Hyderabad Fulfillment Data
const { MEDICINES, ZONES, PHARMACY_ORDERS } = require('./data');

// 1. Get Medicines (with search and category filtering)
app.get('/api/medicines', (req, res) => {
  const { query, category } = req.query;
  let results = MEDICINES;

  if (category && category !== 'All') {
    results = results.filter(m => m.category === category);
  }

  if (query) {
    const q = query.toLowerCase().trim();
    results = results.filter(m => 
      m.brandName.toLowerCase().includes(q) ||
      m.activeSalt.toLowerCase().includes(q) ||
      m.generics.some(g => g.name.toLowerCase().includes(q) || g.manufacturer.toLowerCase().includes(q))
    );
  }

  res.json({
    total: results.length,
    currency: 'INR (₹)',
    medicines: results
  });
});

// 2. Get Medicine by ID with side-by-side comparison matrix
app.get('/api/medicines/:id', (req, res) => {
  const medicine = MEDICINES.find(m => m.id === req.params.id);
  if (!medicine) {
    return res.status(404).json({ error: 'Medicine not found' });
  }
  res.json(medicine);
});

// 3. Get Hyderabad Delivery Zones & Licensed Pharmacies
app.get('/api/zones', (req, res) => {
  res.json(ZONES);
});

// 4. Create Order with Transparent ₹50 Flat Fee
app.post('/api/orders', (req, res) => {
  const { items, zoneId, customerName, prescriptionAttached, prescriptionNotes } = req.body;

  if (!items || items.length === 0) {
    return res.status(400).json({ error: 'Order must contain at least one item' });
  }

  const selectedZone = ZONES.find(z => z.id === zoneId) || ZONES[0];

  let subtotal = 0;
  let brandedTotal = 0;
  let hasScheduleH = false;

  items.forEach(it => {
    subtotal += it.price * it.quantity;
    brandedTotal += (it.brandedMrp || it.price * 2) * it.quantity;
    if (it.scheduleH) hasScheduleH = true;
  });

  const deliveryFee = 50; // Transparent Flat Delivery & Verification Fee in INR
  const totalPayable = subtotal + deliveryFee;
  const totalSavings = Math.max(0, brandedTotal - subtotal);

  const newOrder = {
    orderId: `BR-HYD-${Math.floor(1000 + Math.random() * 9000)}`,
    timestamp: 'Just now',
    customerName: customerName || 'SNIST Student / Resident',
    zone: selectedZone.name,
    pharmacy: selectedZone.partnerPharmacy.name,
    items,
    subtotal,
    deliveryFee,
    totalPayable,
    totalSavings,
    status: 'Pharmacist Review in Progress',
    prescriptionStatus: hasScheduleH 
      ? (prescriptionAttached ? 'Schedule H - Rx Verified' : 'Pending Rx Verification')
      : 'OTC / Schedule G Approved',
    pharmacistNotes: `Assigned to ${selectedZone.partnerPharmacy.pharmacistInCharge}. Estimated dispatch: ${selectedZone.eta}.`
  };

  PHARMACY_ORDERS.unshift(newOrder);
  res.status(201).json(newOrder);
});

// 5. B2B Pharmacy Queue Endpoint for Evaluator Demo
app.get('/api/pharmacy/queue', (req, res) => {
  res.json(PHARMACY_ORDERS);
});

app.listen(PORT, () => {
  console.log(`BeReal Healthcare API running on http://localhost:${PORT}`);
});
