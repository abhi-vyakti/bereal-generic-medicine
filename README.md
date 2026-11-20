# BeReal — Affordable Generic Medicine Marketplace & Hyperlocal Verified Delivery

> **"Bridging the Affordability Gap in Essential Medicines Through Active-Salt Equivalence & Hyperlocal Pharmacy Fulfillment."**  
> *Tailored for Hyderabad: Ghatkesar (SNIST Campus Corridor), Uppal, Tarnaka & Secunderabad.*

---

## 👥 Venture Team & Academic Attribution
- **Institution:** Sreenidhi Institute of Science and Technology (SNIST), Hyderabad
- **Department:** Computer Science and Engineering (CSE-F)
- **Course:** Innovation & Entrepreneurship (IE-1) Venture Project
- **Founding Team Members:**
  - **Abhijeet Barik** (CSE-F, SNIST)
  - **Gandrajupalli Dhyan Kumar** (CSE-F, SNIST)

---

## 🚀 Live Demo & Presentation Links
- 🌐 **Live Web Application (GitHub Pages):** [https://abhijeetbarik.github.io/bereal-generic-medicine/](https://abhijeetbarik.github.io/bereal-generic-medicine/)
- 💻 **Source Code Repository:** [https://github.com/abhijeetbarik/bereal-generic-medicine](https://github.com/abhijeetbarik/bereal-generic-medicine)

---

## 📌 Executive Summary & Problem Statement
Over 65% of an Indian family’s out-of-pocket healthcare expenditure is spent on recurring outpatient medications. Patients frequently pay **200% to 400% markups** for branded pharmaceutical packaging (e.g. *Augmentin*, *Glucophage*, *Telma*, *Panadol*) despite chemically identical, CDSCO-approved generic equivalents being manufactured in the same WHO-GMP certified facilities across Hyderabad and Telangana.

**BeReal** solves this asymmetry by:
1. Demystifying **active chemical salt equivalence** (e.g. *Metformin Hydrochloride 500mg* instead of paying brand premiums).
2. Providing transparent, live price comparisons with **40% to 70% savings**.
3. Partnering directly with licensed, brick-and-mortar neighborhood pharmacies across Hyderabad for **same-day temperature-controlled delivery** under a single, transparent **flat ₹50 fulfillment fee**.

---

## ✨ Key Architectural & Domain Features

### 1. 100% Indian Rupee (₹) Pricing & Transparent Fee Model
- Standardized strictly in **INR (₹)** throughout the entire application.
- Itemized checkout billing:
  $$\text{Total Payable} = \text{Generic Medicines Subtotal} + ₹50\text{ (Flat Platform \& Local Delivery Fee)}$$
- Zero hidden packaging fees or surge pricing.
- Live **Estimated Monthly Savings Tracker** demonstrating how switching chronic prescriptions saves patients ₹1,100 to ₹1,800 every month.

### 2. Active-Salt Chemical Equivalence Engine
- Search by **branded commercial trade names** (*Panadol*, *Glucophage*, *Augmentin*, *Telma*, *Amlokind*, *Eltroxin*) or **generic chemical salt names** (*Paracetamol 650mg*, *Metformin 500mg*, *Amoxicillin + Clavulanic Acid*, *Telmisartan 40mg*).
- Filter across critical healthcare categories: *Chronic Care*, *Diabetes & BP*, *Pain Relief*, *Antibiotics*, and *Vitamins*.

### 3. Side-by-Side Lab Verification Matrix
- Direct side-by-side comparison modal between reference branded drugs and generic alternatives.
- Interactive **3 Quality Assured Badges**:
  - 🛡️ **CDSCO Approved:** Complies with Central Drugs Standard Control Organisation dissolution, purity, and bioavailability norms.
  - 🏭 **WHO-GMP Certified:** Manufactured in certified sterile, Good Manufacturing Practice facilities.
  - 🔬 **Batch & Salt Verified:** Tested for active compound potency ($99.4\% - 100.0\%$ therapeutic bioequivalence).

### 4. Schedule H Prescription Safety Gate
- Mandatory prescription verification for Schedule H / H1 drugs (antibiotics, cardiac, and diabetic therapies).
- Interactive **Prescription Selector & Uploader** with 1-click presets:
  - *SNIST Campus Student Care Preset* (Acute Pharyngitis & Seasonal Pyrexia)
  - *Chronic Elderly Patient Preset* (Type 2 Diabetes + Hypertension Maintenance)

### 5. Hyperlocal Hyderabad Fulfillment Corridor
- Dynamic **Delivery Zone Selector**:
  - **Ghatkesar & SNIST Corridor** (Partner: *Sri Sai Medico & Generic Care*, 30-45 mins ETA)
  - **Uppal & Ramanthapur** (Partner: *Uppal Care Generic Hub*, 45-60 mins ETA)
  - **Secunderabad & Padmarao Nagar** (Partner: *Secunderabad Generic Central Meds*, 60-90 mins ETA)
  - **Tarnaka & OU Corridor** (Partner: *Tarnaka Jan Aushadhi & Verified Pharma*, 40-55 mins ETA)
- Real-time partner pharmacy licensing display (Drug License number, Pharmacist-in-Charge credentials, and verified live stock count).

### 6. 25-Day Chronic Care Refill Automation
- Chronic illnesses (hypertension, diabetes, hypothyroidism) operate on monthly 30-day medication cycles.
- Automated **25-Day Refill Alerts** prevent critical dosage skips with 1-click reorder functionality and cumulative rupee savings ledger.

### 7. B2B Local Pharmacy Fulfillment Queue (Evaluator View)
- Dedicated modal for faculty evaluators and pharmacy partners showing how incoming orders are received, reviewed by registered pharmacists, cross-checked against batch seals, and dispatched with tamper-proof packaging.

---

## 🛠️ Technology Stack

| Layer | Technologies Used |
| :--- | :--- |
| **Frontend UI/UX** | React 18, Tailwind CSS, Lucide Icons, Plus Jakarta Sans Typography |
| **State & Persistence** | React Hooks (`useState`, `useMemo`, `useEffect`), Browser `localStorage` Cache |
| **Backend API (Reference)** | Node.js, Express.js REST API (`/api/medicines`, `/api/zones`, `/api/orders`) |
| **Hosting & CI/CD** | GitHub Pages (Single-Page App) & Git Version Control |

---

## 🏃 Quick Start Guide

### Option A: Run the Standalone Prototype (Zero-Config)
The prototype in `index.html` is completely self-contained with offline-ready CDNs and client-side data persistence:
1. Double-click `index.html` on Windows, or open it in Google Chrome, Microsoft Edge, or Mozilla Firefox:
   ```bash
   # In PowerShell / Terminal
   start index.html
   ```
2. Interact immediately with search, side-by-side comparison, prescription selection, cart steppers, order placement, refill toggles, and the pharmacy dispatch hub!

### Option B: Run the Node.js / Express Backend
If you wish to test or extend the modular REST API:
```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Start the Express server
npm start
# Server will run on http://localhost:5000
```

---

## 📋 Evaluation & Live Demo Script

When presenting to evaluators or faculty members:
1. **Show the Problem:** Open the app and observe the hero banner showing typical chronic branded spend (₹1,850/mo) vs. BeReal generic spend (₹720/mo).
2. **Search by Salt or Brand:** Type `"Glucophage"` or `"Metformin"`. Click **"Side-by-Side Lab Verification View"** to display clinical bioequivalence ($99.4\%$ equipotent) and hover over the CDSCO, WHO-GMP, and Batch badges.
3. **Trigger Schedule H Check:** Add *Augmentin 625 Duo*. Show the Schedule H warning in the cart.
4. **Use 1-Click Prescription Demo:** Click **"Upload or Select Doctor Prescription"** and select the *SNIST Student ID* preset. Note how items auto-populate and the prescription verification badge clears the checkout block.
5. **Inspect the Bill:** Point out the itemized total: **Subtotal + ₹50 flat fee = Total Payable in ₹**. Confirm the order to view the confirmation receipt.
6. **Switch to B2B Pharmacy Hub:** Click **"Pharmacy Hub"** in the top navigation to demonstrate the local pharmacist's dispatch and batch verification interface.
7. **Demonstrate Chronic Refills:** Switch to the **"Refill & Savings"** tab to highlight the 25-day reminder automation and past order re-ordering.

---

*© 2026 Team BeReal (CSE-F, SNIST) — Developed for Innovation & Entrepreneurship Showcase.*
