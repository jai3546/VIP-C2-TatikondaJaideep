# Project Design Phase-II
## Data Flow Diagram & User Stories

| Field | Value |
|:---|:---|
| **Date** | 29 June 2026 |
| **Team ID** | SMARTBRIDGE-2026 |
| **Project Name** | ShopVerse Platform |
| **Maximum Marks** | 4 Marks |

---

# Data Flow Diagrams

A Data Flow Diagram (DFD) visually represents how information flows throughout the ShopVerse platform. It illustrates how customers and administrators interact with the system, how data is processed, and where information is stored.

---

# DFD Level 0 (Context Diagram)

```text
                    ┌──────────────┐
                    │   Customer   │
                    │  (End User)  │
                    └──────┬───────┘
                           │
      Registration, Login, │ Product Catalog,
      Product Search,      │ Cart, Orders,
      Wishlist, Payment    │ Order History
                           ▼
                  ┌─────────────────────┐
                  │                     │
                  │     ShopVerse       │
                  │ E-Commerce Platform │
                  │                     │
                  └──────┬──────────────┘
                         │        │
             ┌───────────┘        └─────────────┐
             │                                  │
             ▼                                  ▼
     ┌────────────────┐                ┌────────────────┐
     │ Administrator  │                │   Stripe API   │
     │   (Admin)      │                │   (Payment)    │
     └────────────────┘                └────────────────┘
     Product CRUD,                      Payment Processing,
     Category Mgmt,                     Checkout Session,
     Order Mgmt,                        Payment Status
     User Management
```

---

# DFD Level 1 (Detailed Data Flow)

```text
┌──────────────┐                                      ┌──────────────┐
│   Customer   │                                      │    Admin     │
└──────┬───────┘                                      └──────┬───────┘
       │                                                     │
       │ Register / Login                                    │
       ▼                                                     │
┌──────────────────────┐                                     │
│ Authentication Module │                                     │
└──────────┬───────────┘                                     │
           │                                                 │
           ▼                                                 │
     ┌──────────────┐                                        │
     │ Users Store  │                                        │
     │ (MongoDB)    │                                        │
     └──────────────┘                                        │

       │ Browse Products                                     │
       ▼                                                     │
┌──────────────────────┐◄────────────────────────────────────┤
│ Product Management    │      Product CRUD                  │
└──────────┬───────────┘
           │
           ▼
     ┌──────────────┐
     │ Products DB  │
     └──────────────┘

       │ Add to Cart / Wishlist
       ▼
┌──────────────────────┐
│ Cart & Wishlist      │
└──────────┬───────────┘
           │
           ▼
     ┌──────────────┐
     │ Orders Store │
     └──────┬───────┘
            │
            ▼
      ┌────────────┐
      │ Stripe API │
      └────────────┘

       │
       ▼
┌──────────────────────┐◄────────────────────────────────────┐
│ Order Management      │        Status Updates              │
└──────────────────────┘                                     │
                                                             │
Customer ◄──── Products, Cart, Orders, Payment Status ──────┘
```

---

# DFD Level 2 (Authentication Process)

```text
        User
         │
         ▼
POST /api/auth/register

         │
         ▼

┌─────────────────────┐
│ Validate Input      │
│ Name                │
│ Email               │
│ Password            │
└──────────┬──────────┘
           │
           ▼

┌─────────────────────┐
│ Check Existing User │
└──────────┬──────────┘
           │
           ▼

┌─────────────────────┐
│ Hash Password       │
│ bcrypt.hash()       │
└──────────┬──────────┘
           │
           ▼

┌─────────────────────┐
│ Store User          │
│ MongoDB             │
└──────────┬──────────┘
           │
           ▼

┌─────────────────────┐
│ Generate JWT Token  │
└──────────┬──────────┘
           │
           ▼

User Logged In Successfully
```

---

# User Stories

| User Type | Epic | User Story No | User Story | Acceptance Criteria | Priority | Sprint |
|:---|:---|:---|:---|:---|:---|:---|
| Customer | Registration | US-1 | Register using name, email and password | Account created successfully | High | Sprint-1 |
| Customer | Registration | US-2 | Password is encrypted using Bcrypt | Password never stored in plain text | High | Sprint-1 |
| Customer | Registration | US-3 | Receive JWT after registration | User automatically logged in | High | Sprint-1 |
| Customer | Login | US-4 | Login using email & password | Redirect to Home Page | High | Sprint-1 |
| Customer | Login | US-5 | Display invalid login message | Proper validation shown | High | Sprint-1 |
| Customer | Products | US-6 | Browse all products | Product list displayed | High | Sprint-1 |
| Customer | Products | US-7 | Search products | Matching products displayed | High | Sprint-1 |
| Customer | Products | US-8 | Filter products by category | Filtered products displayed | High | Sprint-1 |
| Customer | Cart | US-9 | Add products to cart | Cart updated | High | Sprint-2 |
| Customer | Cart | US-10 | Update quantity | Total recalculated | High | Sprint-2 |
| Customer | Cart | US-11 | Remove products | Product removed successfully | High | Sprint-2 |
| Customer | Cart | US-12 | View cart summary | Tax, shipping and total shown | High | Sprint-2 |
| Customer | Payment | US-13 | Checkout with address | Address saved | High | Sprint-2 |
| Customer | Payment | US-14 | Pay securely through Stripe | Payment completed | High | Sprint-2 |
| Customer | Payment | US-15 | Receive order confirmation | Order created successfully | High | Sprint-2 |
| Customer | Orders | US-16 | View order history | Previous orders displayed | Medium | Sprint-3 |
| Customer | Orders | US-17 | Cancel pending order | Status updated | Medium | Sprint-3 |
| Customer | Wishlist | US-18 | Add products to wishlist | Wishlist updated | Low | Sprint-4 |
| Customer | Wishlist | US-19 | Remove wishlist items | Wishlist updated | Low | Sprint-4 |
| Administrator | Dashboard | US-20 | View sales dashboard | Metrics displayed | High | Sprint-3 |
| Administrator | Products | US-21 | Add products | Product visible in catalog | High | Sprint-3 |
| Administrator | Products | US-22 | Edit products | Changes reflected | High | Sprint-3 |
| Administrator | Products | US-23 | Delete products | Product removed | High | Sprint-3 |
| Administrator | Categories | US-24 | Create categories | Category displayed | Medium | Sprint-3 |
| Administrator | Categories | US-25 | Delete categories | Category removed | Medium | Sprint-3 |
| Administrator | Users | US-26 | View registered users | User list displayed | Medium | Sprint-3 |
| Administrator | Users | US-27 | Delete users | User removed | Medium | Sprint-3 |
| Administrator | Orders | US-28 | View all customer orders | Order list displayed | High | Sprint-4 |
| Administrator | Orders | US-29 | Update order status | Customer sees updated status | High | Sprint-4 |

---

# Summary

The ShopVerse platform is designed around two primary stakeholders: **Customers** and **Administrators**. Customers can register, browse products, search, filter, manage carts, maintain wishlists, complete secure Stripe payments, and track their orders. Administrators can manage products, categories, users, and customer orders through a centralized dashboard with real-time insights. The DFDs and user stories collectively define the functional workflow and implementation roadmap for the platform.
