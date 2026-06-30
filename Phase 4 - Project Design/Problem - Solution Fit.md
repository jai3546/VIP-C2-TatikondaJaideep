# Project Design Phase
## Problem – Solution Fit Template

| Field | Value |
|:---|:---|
| **Date** | 30 June 2026 |
| **Team ID** | SMARTBRIDGE-2026 |
| **Project Name** | ShopVerse Platform |
| **Maximum Marks** | 2 Marks |

---

## Problem – Solution Fit Template

The **Problem–Solution Fit** framework helps validate whether the proposed solution effectively addresses the real challenges faced by target users. It ensures that every major feature directly contributes to solving customer pain points while delivering value to both shoppers and store administrators.

### Purpose

- Understand the key challenges faced by customers and administrators.
- Design features that directly solve real-world problems.
- Improve user experience and business efficiency.
- Increase customer trust and platform adoption.
- Build a scalable solution that supports future enhancements.

### References

- https://www.ideahackers.network/problem-solution-fit-canvas/
- https://medium.com/@epicantus/problem-solution-fit-canvas-aa3dd59cb4fe

---

# Problem–Solution Fit Canvas: ShopVerse Platform

## 1. Customer Segment

| Attribute | Details |
|:---|:---|
| **Target Customer 1** | Individuals who prefer purchasing products online through a secure and easy-to-use platform |
| **Target Customer 2** | Small and medium-sized businesses seeking an affordable online store management solution |
| **Geography** | India (Primary Market) with future scalability to other regions |
| **Technology Profile** | Users familiar with web applications and digital payment systems |

---

## 2. Customer Problems

| Problem No. | Problem Description | Severity |
|:---|:---|:---|
| **P-1** | Customers spend too much time finding products due to poor search functionality and limited category filtering. | High |
| **P-2** | Unexpected charges during checkout reduce customer confidence and increase cart abandonment. | High |
| **P-3** | Users hesitate to complete online purchases because they are concerned about payment security. | High |
| **P-4** | Customers find it difficult to monitor order history, delivery status, and previous purchases. | Medium |
| **P-5** | Store administrators require a centralized dashboard to efficiently manage products, categories, users, and customer orders. | High |
| **P-6** | Lengthy and complicated registration processes discourage new users from creating accounts. | Medium |

---

## 3. Existing Alternatives

| Alternative | Limitation |
|:---|:---|
| Large online marketplaces | Limited customization, high seller commissions, and platform dependency |
| Website builders (Shopify, WooCommerce) | Subscription costs and additional setup complexity |
| Social media commerce | Manual order processing and lack of integrated inventory management |
| Custom-built e-commerce websites | High development and maintenance costs |
| Spreadsheet-based inventory management | Difficult to maintain, prone to errors, and unsuitable for business growth |

---

## 4. Proposed Solution

| Solution No. | Solution Description | Addresses Problem |
|:---|:---|:---|
| **S-1** | Smart product discovery using keyword search and category-based filtering for faster browsing. | P-1 |
| **S-2** | Transparent shopping cart displaying subtotal, taxes, shipping charges, and final payable amount before checkout. | P-2 |
| **S-3** | Secure online payments using the Stripe Payment Gateway with encrypted checkout workflows. | P-3 |
| **S-4** | Personalized customer dashboard with complete order history, delivery tracking, and cancellation options. | P-4 |
| **S-5** | Centralized administration dashboard for managing products, categories, customers, and orders from a single interface. | P-5 |
| **S-6** | Lightweight authentication system using JWT and Bcrypt for secure and user-friendly registration and login. | P-6 |

---

## 5. Success Metrics

| Metric | Target | Measurement Method |
|:---|:---|:---|
| User Registration Success Rate | > 80% | Successful registrations compared to registration attempts |
| Cart Conversion Rate | > 75% | Completed orders compared to initiated shopping carts |
| Product Search Efficiency | < 30 seconds | Average time required to locate a desired product |
| Order Fulfillment Rate | > 95% | Percentage of successfully delivered customer orders |
| Customer Engagement | > 5 minutes per session | Average user session duration |

---

## 6. Unique Value Proposition

> **ShopVerse** provides a secure, modern, and user-friendly online shopping experience by combining intelligent product discovery, transparent pricing, and secure Stripe-powered payments. Customers can easily browse products, manage their shopping carts, maintain wishlists, and track orders, while administrators efficiently manage products, categories, customers, and orders through a centralized dashboard. Built using the MERN stack, ShopVerse offers a scalable foundation for future business growth.

---

## 7. Customer Channels

| Channel | Description |
|:---|:---|
| **Web Application** | Accessible through any modern desktop or mobile web browser |
| **Responsive User Interface** | Optimized for desktops, tablets, and smartphones |
| **RESTful APIs** | Backend services supporting frontend communication and future integrations |
| **Administrator Dashboard** | Dedicated management portal for store administration and business operations |

---

## 8. Cost Structure

| Cost Item | Type | Details |
|:---|:---|:---|
| MongoDB Atlas | Infrastructure | Free Tier Cloud Database |
| Stripe Payment Gateway | Transaction | Standard payment processing charges |
| Backend Hosting | Infrastructure | Render, Railway, or similar cloud platforms |
| Frontend Hosting | Infrastructure | Vercel or Netlify |
| Image Storage | Infrastructure | Cloudinary or equivalent cloud storage |
| Development & Maintenance | One-Time | Individual project development and future enhancements |

---