<div align="center">

<img src="https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=white" />
<img src="https://img.shields.io/badge/Vite-5-646CFF?style=for-the-badge&logo=vite&logoColor=white" />
<img src="https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" />
<img src="https://img.shields.io/badge/Supabase-PostgreSQL-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white" />
<img src="https://img.shields.io/badge/Vitest-Testing-6E9F18?style=for-the-badge&logo=vitest&logoColor=white" />

<br/><br/>

# 🏢 HOPE, INC.
## Customer Management System (CMS)

**A specialized full-stack platform for managing customer registries, tracking immutable purchase histories, and enforcing granular access controls.**

<br/>

[![Sprint](https://img.shields.io/badge/Sprint-1%20In%20Progress-orange?style=flat-square)](#-sprint-progress)
[![Gate](https://img.shields.io/badge/Gate-Pending-lightgrey?style=flat-square)](#)
[![License](https://img.shields.io/badge/License-Academic-blue?style=flat-square)]()

<br/>

> 📚 **BS Computer Science** · New Era University – College of Informatics and Computer Studies
> Software Engineering 2 Course · Academic Year 2025–2026


</div>

---

## 👥 Team Members

| # | Name | Role | Responsibilities |
|---|------|------|-----------------|
| **M1** | Perez, Gabriel Red Ray R.    | Project Lead / Full-Stack | Sprint coordination, GitHub management, Supabase setup, API wiring, deployment |
| **M2** | Gandeza, John Timothy M.    | Frontend Developer (UI/UX) | All React pages, CRUD modals, Sales history panels, responsive design |
| **M3** | Galamiton, Lars Ulrich S.    | Backend / DB Engineer | Supabase schema, RLS policies, SQL views (reporting), triggers |
| **M4** | Ticbobolan, Rhyian Joshua    | Rights & Auth Specialist | AuthContext, Google OAuth, rights-gated UI components, login guard |
| **M5** | Zuñiga, Clark Kent P.    | QA / Documentation | Test cases (27-case matrix), user manual, sprint logs, presentation |

---

## 🛠 Tech Stack
- **Frontend:** React 18 + Vite
- **Styling:** Tailwind CSS
- **Backend/Database:** Supabase (PostgreSQL)
- **Routing:** React Router v6

---

## 🌿 Branching Strategy & Workflow
To maintain code quality, we follow a strict branching strategy. **Never merge directly into `main`.**

1. **`main`**: Production-ready code only.
2. **`dev`**: The default branch. All team members merge their features here.
3. **`feat/your-feature-name`**: Individual task branches.

**Workflow:**
- Create a feature branch from `dev`: `git checkout -b feat/my-task`
- Commit your changes and push: `git push origin feat/my-task`
- Open a Pull Request (PR) to merge into `dev`.
- **Requirement:** Every PR must be reviewed and approved by at least 1 teammate.

---

## 🗄 Database Design

The CMS utilizes **5 primary tables**. Note that `customer` is the only table structurally modified for the CMS.

| Table | Role | CRUD Status | Seed Records |
|-------|------|--------------|--------------|
| `customer` | Primary Entity | Full CRUD (Soft-Delete) | 82 rows |
| `sales` | Transaction Header | **View-Only** | 124 rows |
| `salesDetail` | Line Items | **View-Only** | ~250 rows |
| `product` | Product List | **View-Only** | 52 rows |
| `priceHist` | Pricing Records | **View-Only** | ~70 rows |

### Modification Summary
- **Columns Added:** `record_status` (ACTIVE/INACTIVE) and `stamp` (Audit string) added to `customer` only.
- **RLS Policy:** Tables `sales`, `salesDetail`, `product`, and `priceHist` have **SELECT ONLY** policies for all authenticated users. No Insert/Update/Delete policies exist.

---

## 👤 User Roles & Access Rights

### Rights Matrix (9 Core Rights)

| Right | SUPERADMIN | ADMIN | USER |
|-------|:----------:|:-----:|:----:|
| `CUST_VIEW` | ✅ | ✅ | ✅ |
| `CUST_ADD` | ✅ | ✅ | ❌ |
| `CUST_EDIT` | ✅ | ✅ | ❌ |
| `CUST_DEL` (Soft) | ✅ | ❌ | ❌ |
| `SALES_VIEW` | ✅ | ✅ | ✅ |
| `SD_VIEW` | ✅ | ✅ | ✅ |
| `PROD_VIEW` | ✅ | ✅ | ✅ |
| `PRICE_VIEW` | ✅ | ✅ | ✅ |
| `ADM_USER` | ✅ | ✅ (Limited) | ❌ |

### Visibility Rules

| record_status | USER | ADMIN | SUPERADMIN |
|--------------|:----:|:-----:|:----------:|
| `ACTIVE` | ✅ Visible | ✅ Visible | ✅ Visible |
| `INACTIVE` | ❌ Hidden | ✅ Visible (Panel) | ✅ Visible (Panel) |

---

## 🚀 Getting Started (Local Setup)

### 1. Clone the repository
```bash
git clone <your-repo-url>
cd cms-project




# Customer Management System (CMS) - Sprint 1

## 🚀 Getting Started

1. Clone the repo.
2. Run `npm install`.
3. Create a `.env` file based on `.env.example`.
4. Run `npm run dev`.
```
---

## 📅 Sprint Progress

Sprint 1: Setup & Auth (Weeks 1-2) 🔄

- [ ] Vite/Tailwind Scaffold
- [ ] Supabase Initialization & HopeDB Seed
- [ ] Email/Google Auth Integration
- [ ] Login Guard & Auto-Provision Trigger

Sprint 2: Core Modules (Weeks 3-4) ⏳

- [ ] Customer CRUD (Add/Edit)
- [ ] Soft-Delete & Recovery Logic
- [ ] Sales History & Detail Drill-down
- [ ] Rights-based Component Gating

Sprint 3: Admin & Reports (Weeks 5-6) ⏳

- [ ] User Activation (Admin Module)
- [ ] Sales Summary & Revenue Reports
- [ ] Superadmin Shield Implementation
- [ ] Production Deployment & User Manual

---

## 🔒 Key System Rules

1.  Rule of Record Status: No hard deletes. Use record_status = 'INACTIVE'.
2.  Invisible Inactives: INACTIVE customers are filtered out for USER types at
    both UI and RLS levels.
3.  Immutable History: sales, salesDetail, product, and priceHist are strictly
    read-only. No UI actions for these tables.
4.  Audit Secrecy: The stamp column is hidden from USER accounts.
5.  Superadmin Shield: ADMIN cannot modify SUPERADMIN status or rights.
6.  Trigger Provisioning: All new users are INACTIVE by default.

---

## 🧪 Testing Focus

  - Rights Matrix: 27 test cases (3 users × 9 rights).
  - View-Only Integrity: Verification that no mutation buttons render for
    transaction tables.
  - Soft-Delete Leakage: Ensuring INACTIVE records don't appear in USER search
    results.

## Hope, Inc. Customer Management System New Era University · BS Computer Science ·
AY 2025–2026


