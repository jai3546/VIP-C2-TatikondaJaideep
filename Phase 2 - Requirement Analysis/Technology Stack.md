
# Project Design Phase-II
## Technology Stack (Architecture & Stack)

| Field | Value |
|:---|:---|
| **Date** | 29 June 2026 |
| **Team ID** | SMARTBRIDGE-2026 |
| **Project Name** | ShopVerse Platform |
| **Maximum Marks** | 4 Marks |

---

# Technical Architecture

The **ShopVerse Platform** follows the **MERN Stack Architecture (MongoDB, Express.js, React.js, Node.js)** using a client-server model. The frontend is developed using React.js with Vite and communicates with the Express.js backend through RESTful APIs. MongoDB stores all application data, while Stripe is integrated for secure online payment processing.

---

# Architecture Diagram

```text
┌──────────────────────────────────────────────────────────────────────────────────┐
│                            CLIENT LAYER (Browser)                                │
│                                                                                  │
│               React.js + Vite (Frontend Application)                             │
│                                                                                  │
│  Home  │ Products │ Categories │ Cart │ Wishlist │ Login │ Profile │ Admin       │
│                                                                                  │
│            React Context API + React Router DOM                                  │
└──────────────────────────────────────────────────────────────────────────────────┘
                                  │
                                  │ HTTP / REST API (JSON)
                                  │ JWT Authentication
                                  ▼
┌──────────────────────────────────────────────────────────────────────────────────┐
│                       SERVER LAYER (Node.js + Express.js)                        │
│                                                                                  │
│ Middleware → JWT Auth → Controllers → REST APIs                                  │
│                                                                                  │
│ /auth │ /products │ /categories │ /cart │ /orders │ /wishlist │ /payments        │
└──────────────────────────────────────────────────────────────────────────────────┘
                                  │
                                  ▼
┌──────────────────────────────────────────────────────────────────────────────────┐
│                              DATABASE LAYER                                      │
│                                                                                  │
│                           MongoDB + Mongoose ORM                                 │
│                                                                                  │
│ Users │ Products │ Categories │ Orders │ Wishlist                                │
└──────────────────────────────────────────────────────────────────────────────────┘
                                  │
                                  ▼
┌──────────────────────────────────────────────────────────────────────────────────┐
│                           EXTERNAL SERVICES                                      │
│                                                                                  │
│ Stripe Payment Gateway │ Cloudinary / Product Images │ Email Service (Future)    │
└──────────────────────────────────────────────────────────────────────────────────┘
```

---

# Table-1: Components & Technologies

| S.No | Component | Description | Technology |
|:---|:---|:---|:---|
| 1 | **User Interface** | Responsive customer and admin interface | React.js, Vite, CSS3, React Router DOM |
| 2 | **Frontend State Management** | Shopping cart, authentication, wishlist, and user state | React Context API, React Hooks |
| 3 | **Backend API** | RESTful API for authentication, products, orders, payments, and users | Node.js, Express.js |
| 4 | **Authentication** | Secure login and authorization | JWT, Bcrypt |
| 5 | **Database** | Stores application data | MongoDB Atlas |
| 6 | **Database ORM** | Schema management and data validation | Mongoose |
| 7 | **Payment Gateway** | Secure online payment processing | Stripe API |
| 8 | **Build Tool** | Fast frontend development and production builds | Vite |
| 9 | **Development Tools** | Code editing, version control, package management | VS Code, Git, GitHub, npm |
| 10 | **API Testing** | REST API testing | Postman |
| 11 | **Deployment** | Frontend & Backend Hosting | Vercel, Render |

---

# Table-2: Application Characteristics

| S.No | Characteristic | Description | Technology |
|:---|:---|:---|:---|
| 1 | **Open Source Technologies** | Complete MERN stack using open-source technologies | React.js, Express.js, MongoDB, Node.js |
| 2 | **Security** | Password encryption, JWT authentication, secure payment gateway, role-based access | Bcrypt, JWT, Stripe |
| 3 | **Scalability** | Modular architecture supports future enhancements like reviews, coupons, recommendations, analytics | MERN Stack |
| 4 | **Availability** | Backend APIs remain available through Express.js while MongoDB provides persistent storage | Express.js, MongoDB Atlas |
| 5 | **Performance** | Fast UI rendering, optimized API communication, efficient database queries | React Virtual DOM, Vite, MongoDB |
| 6 | **Maintainability** | Modular folder structure with reusable components and APIs | MVC Architecture |
| 7 | **Compatibility** | Accessible across desktops, tablets, and mobile devices | Responsive Web Design |

---

# Technology Stack Summary

| Layer | Technology |
|:---|:---|
| Frontend | React.js, Vite, CSS3, React Router DOM |
| Backend | Node.js, Express.js |
| Database | MongoDB Atlas, Mongoose |
| Authentication | JWT, Bcrypt |
| Payment | Stripe API |
| State Management | React Context API |
| API Testing | Postman |
| Version Control | Git & GitHub |
| Deployment | Vercel, Render |

---

# References

- https://www.mongodb.com/mern-stack
- https://react.dev
- https://expressjs.com
- https://nodejs.org
- https://mongoosejs.com
- https://stripe.com/docs
- https://vitejs.dev
- https://jwt.io

