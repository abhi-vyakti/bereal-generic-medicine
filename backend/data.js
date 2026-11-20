// BeReal Healthcare Database - Seeded Indian Generic Medicine Catalog & Hyderabad Fulfillment Data

const MEDICINES = [
  {
    id: 'med-01',
    brandName: 'Glucophage 500mg',
    activeSalt: 'Metformin Hydrochloride 500mg',
    strength: '500 mg',
    category: 'Diabetes & BP',
    isChronic: true,
    scheduleH: true,
    brandedManufacturer: 'Merck Healthcare',
    brandedMrp: 185,
    unit: 'Strip of 10 Tablets',
    description: 'First-line medication for type 2 diabetes management, helping control blood glucose levels.',
    generics: [
      {
        id: 'gen-01a',
        name: 'Glyciphage 500',
        manufacturer: 'Franco-Indian Pharmaceuticals',
        price: 65,
        stock: 48,
        cdscoApproved: true,
        whoGmpCertified: true,
        batchVerified: true,
        batchNumber: 'FIP-2026-X89',
        bioequivalenceRatio: '99.4%'
      },
      {
        id: 'gen-01b',
        name: 'Metsmall 500',
        manufacturer: 'Dr. Reddy’s Laboratories (Hyderabad)',
        price: 52,
        stock: 35,
        cdscoApproved: true,
        whoGmpCertified: true,
        batchVerified: true,
        batchNumber: 'DRL-HYD-502',
        bioequivalenceRatio: '99.8%'
      },
      {
        id: 'gen-01c',
        name: 'Jan Aushadhi Metformin',
        manufacturer: 'PMBJP (Govt Verified PSU)',
        price: 22,
        stock: 90,
        cdscoApproved: true,
        whoGmpCertified: true,
        batchVerified: true,
        batchNumber: 'PMB-26-881',
        bioequivalenceRatio: '98.9%'
      }
    ]
  },
  {
    id: 'med-02',
    brandName: 'Telma 40mg',
    activeSalt: 'Telmisartan 40mg',
    strength: '40 mg',
    category: 'Diabetes & BP',
    isChronic: true,
    scheduleH: true,
    brandedManufacturer: 'Glenmark Pharmaceuticals',
    brandedMrp: 240,
    unit: 'Strip of 15 Tablets',
    description: 'Angiotensin II receptor antagonist used to treat hypertension and protect cardiovascular health.',
    generics: [
      {
        id: 'gen-02a',
        name: 'Telmikind 40',
        manufacturer: 'Mankind Pharma',
        price: 78,
        stock: 62,
        cdscoApproved: true,
        whoGmpCertified: true,
        batchVerified: true,
        batchNumber: 'MK-TEL-411',
        bioequivalenceRatio: '99.1%'
      },
      {
        id: 'gen-02b',
        name: 'Telsartan 40',
        manufacturer: 'Hetero Drugs (Hyderabad)',
        price: 68,
        stock: 40,
        cdscoApproved: true,
        whoGmpCertified: true,
        batchVerified: true,
        batchNumber: 'HET-HYD-91',
        bioequivalenceRatio: '99.6%'
      }
    ]
  },
  {
    id: 'med-03',
    brandName: 'Augmentin 625 Duo',
    activeSalt: 'Amoxicillin 500mg + Potassium Clavulanate 125mg',
    strength: '625 mg',
    category: 'Antibiotics',
    isChronic: false,
    scheduleH: true,
    brandedManufacturer: 'GlaxoSmithKline (GSK)',
    brandedMrp: 224,
    unit: 'Strip of 10 Tablets',
    description: 'Broad-spectrum antibiotic formulation targeting bacterial infections of respiratory tract and ENT.',
    generics: [
      {
        id: 'gen-03a',
        name: 'Moxikind-CV 625',
        manufacturer: 'Mankind Pharma',
        price: 98,
        stock: 50,
        cdscoApproved: true,
        whoGmpCertified: true,
        batchVerified: true,
        batchNumber: 'MK-CV-8821',
        bioequivalenceRatio: '99.5%'
      },
      {
        id: 'gen-03b',
        name: 'Novamox-CV 625',
        manufacturer: 'Cipla Quality Generic',
        price: 104,
        stock: 28,
        cdscoApproved: true,
        whoGmpCertified: true,
        batchVerified: true,
        batchNumber: 'CIP-CV-703',
        bioequivalenceRatio: '99.7%'
      }
    ]
  },
  {
    id: 'med-04',
    brandName: 'Panadol / Dolo 650',
    activeSalt: 'Paracetamol 650mg',
    strength: '650 mg',
    category: 'Pain Relief',
    isChronic: false,
    scheduleH: false,
    brandedManufacturer: 'Micro Labs Limited',
    brandedMrp: 34,
    unit: 'Strip of 15 Tablets',
    description: 'Analgesic and antipyretic for fever, headache, body aches, and seasonal viral symptoms.',
    generics: [
      {
        id: 'gen-04a',
        name: 'Pacimol 650',
        manufacturer: 'Ipca Laboratories',
        price: 18,
        stock: 120,
        cdscoApproved: true,
        whoGmpCertified: true,
        batchVerified: true,
        batchNumber: 'IPC-650-9',
        bioequivalenceRatio: '100.0%'
      },
      {
        id: 'gen-04b',
        name: 'Paracetamol 650 BP',
        manufacturer: 'Aurobindo Pharma (Hyderabad)',
        price: 12,
        stock: 85,
        cdscoApproved: true,
        whoGmpCertified: true,
        batchVerified: true,
        batchNumber: 'AUR-HYD-11',
        bioequivalenceRatio: '99.9%'
      }
    ]
  },
  {
    id: 'med-05',
    brandName: 'Amlokind / Norvasc 5mg',
    activeSalt: 'Amlodipine Besylate 5mg',
    strength: '5 mg',
    category: 'Chronic Care',
    isChronic: true,
    scheduleH: true,
    brandedManufacturer: 'Pfizer / Mankind',
    brandedMrp: 98,
    unit: 'Strip of 15 Tablets',
    description: 'Calcium channel blocker relaxing blood vessel walls for chronic hypertension management.',
    generics: [
      {
        id: 'gen-05a',
        name: 'Amlopres 5',
        manufacturer: 'Cipla Laboratories',
        price: 36,
        stock: 45,
        cdscoApproved: true,
        whoGmpCertified: true,
        batchVerified: true,
        batchNumber: 'CIP-AML-33',
        bioequivalenceRatio: '99.3%'
      },
      {
        id: 'gen-05b',
        name: 'Amlovas 5',
        manufacturer: 'Macleods Pharma',
        price: 32,
        stock: 30,
        cdscoApproved: true,
        whoGmpCertified: true,
        batchVerified: true,
        batchNumber: 'MAC-5-662',
        bioequivalenceRatio: '99.5%'
      }
    ]
  },
  {
    id: 'med-06',
    brandName: 'Becosules Z Capsule',
    activeSalt: 'B-Complex Vitamins + Vitamin C + Zinc',
    strength: 'Daily Cap',
    category: 'Vitamins',
    isChronic: false,
    scheduleH: false,
    brandedManufacturer: 'Pfizer India',
    brandedMrp: 62,
    unit: 'Strip of 20 Capsules',
    description: 'Student & family immunity supplement, mouth ulcer recovery and cellular energy support.',
    generics: [
      {
        id: 'gen-06a',
        name: 'B-Plex Forte with Zinc',
        manufacturer: 'Apex Laboratories',
        price: 28,
        stock: 110,
        cdscoApproved: true,
        whoGmpCertified: true,
        batchVerified: true,
        batchNumber: 'APX-VIT-109',
        bioequivalenceRatio: '99.8%'
      }
    ]
  },
  {
    id: 'med-07',
    brandName: 'Eltroxin 100mcg',
    activeSalt: 'Thyroxine Sodium 100mcg',
    strength: '100 mcg',
    category: 'Chronic Care',
    isChronic: true,
    scheduleH: true,
    brandedManufacturer: 'Abbott Healthcare',
    brandedMrp: 195,
    unit: 'Bottle of 120 Tablets',
    description: 'Synthetic thyroid hormone replacement therapy for hypothyroid maintenance.',
    generics: [
      {
        id: 'gen-07a',
        name: 'Thyronorm 100',
        manufacturer: 'Torrent Pharmaceuticals',
        price: 88,
        stock: 55,
        cdscoApproved: true,
        whoGmpCertified: true,
        batchVerified: true,
        batchNumber: 'TOR-THY-201',
        bioequivalenceRatio: '99.7%'
      }
    ]
  }
];

const ZONES = [
  {
    id: 'zone-ghatkesar',
    name: 'Ghatkesar & SNIST Corridor',
    tagline: 'Direct delivery to SNIST Campus Gate, Yamnampet & Ghatkesar Town',
    eta: '30 - 45 mins',
    partnerPharmacy: {
      name: 'Sri Sai Medico & Generic Care',
      licenseNo: 'TS/MD/2021-994012',
      pharmacistInCharge: 'R. Srinivas, B.Pharm (Reg. 44821)',
      address: 'Main Rd, Opp SNIST Bus Bay, Ghatkesar, Hyderabad',
      rating: '4.9 ★',
      distance: '1.2 km'
    }
  },
  {
    id: 'zone-uppal',
    name: 'Uppal & Ramanthapur',
    tagline: 'Fulfillment across Metro Station, Habsiguda & Uppal Ring Rd',
    eta: '45 - 60 mins',
    partnerPharmacy: {
      name: 'Uppal Care Generic Hub',
      licenseNo: 'TS/MD/2020-41092',
      pharmacistInCharge: 'M. Sangeetha, M.Pharm (Reg. 51044)',
      address: 'Inner Ring Rd, Near Uppal Metro Pillar 842',
      rating: '4.8 ★',
      distance: '3.4 km'
    }
  },
  {
    id: 'zone-secunderabad',
    name: 'Secunderabad & Padmarao Nagar',
    tagline: 'Rapid delivery across Clock Tower, Regimental Bazaar & Musheerabad',
    eta: '60 - 90 mins',
    partnerPharmacy: {
      name: 'Secunderabad Generic Central Meds',
      licenseNo: 'TS/MD/2019-11048',
      pharmacistInCharge: 'A. Praveen Kumar, B.Pharm (Reg. 39912)',
      address: 'Station Rd, Opp Gandhi Hospital Junction, Secunderabad',
      rating: '4.9 ★',
      distance: '6.1 km'
    }
  },
  {
    id: 'zone-tarnaka',
    name: 'Tarnaka & Osmania University Corridor',
    tagline: 'Serving Lalaguda, Tarnaka Cross Roads & Nacharam Industrial Hub',
    eta: '40 - 55 mins',
    partnerPharmacy: {
      name: 'Tarnaka Jan Aushadhi & Verified Pharma',
      licenseNo: 'TS/MD/2022-78810',
      pharmacistInCharge: 'P. Venkat Rao, B.Pharm (Reg. 61284)',
      address: 'Shop 4, St. Ann’s Road, Tarnaka, Hyderabad',
      rating: '4.8 ★',
      distance: '4.2 km'
    }
  }
];

const PHARMACY_ORDERS = [
  {
    orderId: 'BR-HYD-9812',
    timestamp: 'Today, 2:15 PM',
    zone: 'Ghatkesar & SNIST Corridor',
    pharmacy: 'Sri Sai Medico & Generic Care',
    customerName: 'Rahul Varma (SNIST ECE Hostel)',
    items: [
      { name: 'Pacimol 650 (Generic for Dolo)', qty: 2, price: 18, mrp: 34 },
      { name: 'B-Plex Forte with Zinc', qty: 1, price: 28, mrp: 62 }
    ],
    subtotal: 64,
    deliveryFee: 50,
    totalPayable: 114,
    status: 'Pharmacist Verified & Dispatched',
    prescriptionStatus: 'Not Required (OTC/Schedule G)',
    pharmacistNotes: 'Checked batch seal AUR-HYD-11. Packed with temperature insulated bag.'
  },
  {
    orderId: 'BR-HYD-9804',
    timestamp: 'Today, 11:30 AM',
    zone: 'Uppal & Ramanthapur',
    pharmacy: 'Uppal Care Generic Hub',
    customerName: 'V. Krishna Murthy (Habsiguda)',
    items: [
      { name: 'Glyciphage 500 (Generic for Glucophage)', qty: 3, price: 65, mrp: 185 },
      { name: 'Telmikind 40 (Generic for Telma)', qty: 2, price: 78, mrp: 240 }
    ],
    subtotal: 351,
    deliveryFee: 50,
    totalPayable: 401,
    status: 'Delivered',
    prescriptionStatus: 'Schedule H - Rx Verified by Pharmacist M. Sangeetha',
    pharmacistNotes: 'Original prescription verified via Apollo clinic portal.'
  }
];

module.exports = {
  MEDICINES,
  ZONES,
  PHARMACY_ORDERS
};
