
# Project Design Phase-II
## Solution Requirements (Functional & Non-functional)

| Field | Value |
|:---|:---|
| **Date** | 29 June 2026 |
| **Team ID** | SMARTBRIDGE-2026 |
| **Project Name** | ShopVerse Platform |
| **Maximum Marks** | 4 Marks |

---

# Functional Requirements

The following functional requirements define the major features and capabilities of the proposed **ShopVerse E-Commerce Platform**.

| FR No. | Functional Requirement (Epic) | Sub Requirement (Story / Sub-Task) |
|:---|:---|:---|
| **FR-1** | **User Registration** | User registration using name, email, and password |
| | | Password hashing using Bcrypt before database storage |
| | | Email uniqueness validation |
| | | Default assignment of Customer role |
| **FR-2** | **User Authentication** | Secure login using email and password |
| | | JWT-based authentication and authorization |
| | | Session management using Bearer Token |
| | | Admin redirection after successful login |
| **FR-3** | **Product Browsing & Search** | Display all available products |
| | | Category-wise product filtering |
| | | Search products using keywords |
| | | View complete product information (image, description, price, category) |
| **FR-4** | **Category Management** | Display product categories on homepage |
| | | Admin can add new categories |
| | | Admin can edit and remove categories |
| | | Categories are dynamically loaded from MongoDB |
| **FR-5** | **Shopping Cart** | Add products to shopping cart |
| | | Update product quantity |
| | | Remove products from cart |
| | | Display subtotal, tax, shipping, and total amount |
| | | Manage cart using React Context API |
| **FR-6** | **Checkout & Payment** | Secure checkout process |
| | | Billing and shipping address collection |
| | | Stripe payment gateway integration |
| | | Create order after successful payment |
| | | Support Stripe test mode for development |
| **FR-7** | **Order Management** | Create new customer orders |
| | | View order history |
| | | Cancel pending orders |
| | | Admin can monitor all customer orders |
| | | Admin can update order status |
| **FR-8** | **Admin Dashboard** | Display total users, products, orders, and sales |
| | | Product CRUD operations |
| | | Category management |
| | | User management |
| | | Order management dashboard |
| **FR-9** | **User Profile** | View profile information |
| | | View previous orders |
| | | Track order status |
| | | Cancel eligible orders |
| **FR-10** | **Wishlist** | Add products to wishlist |
| | | Remove wishlist items |
| | | View saved wishlist products |

---

# Non-functional Requirements

The following non-functional requirements ensure the quality, performance, security, and maintainability of the ShopVerse platform.

| NFR No. | Non-Functional Requirement | Description |
|:---|:---|:---|
| **NFR-1** | **Usability** | ShopVerse provides a clean, responsive, and intuitive interface built with React and modern CSS. Users can easily browse products, search, filter by categories, manage carts, and complete purchases with minimal effort. The admin dashboard offers a simple interface for managing products, categories, users, and orders. |
| **NFR-2** | **Security** | Passwords are securely hashed using Bcrypt before storage. JWT authentication protects user sessions, while Role-Based Access Control (RBAC) restricts administrator-only operations. Stripe securely handles payment information, ensuring sensitive card details never reach the application server. |
| **NFR-3** | **Reliability** | MongoDB provides reliable and persistent data storage through Mongoose schemas. Proper validation, centralized error handling, and meaningful HTTP status codes ensure stable application behavior. Database operations maintain data consistency across users, products, and orders. |
| **NFR-4** | **Performance** | The frontend uses Vite for optimized development and production builds. React efficiently renders UI updates, while MongoDB indexing enables faster product searches and category filtering. REST APIs exchange lightweight JSON responses to improve application performance. |
| **NFR-5** | **Availability** | ShopVerse is designed for continuous availability using the MERN architecture. The backend runs on Express.js while MongoDB provides persistent storage. CORS support enables smooth communication between frontend and backend applications during deployment. |
| **NFR-6** | **Scalability** | The modular MERN architecture supports future expansion. Independent modules for authentication, products, categories, orders, payments, and users allow new features such as coupons, reviews, recommendations, and analytics to be integrated with minimal changes. |
| **NFR-7** | **Maintainability** | The project follows a modular folder structure with separate models, routes, controllers, middleware, and frontend components. This organization improves code readability, simplifies debugging, and allows future enhancements without affecting existing functionality. |

---

# Summary

The proposed **ShopVerse Platform** satisfies the functional and non-functional requirements of a modern e-commerce application. It provides secure authentication, efficient product management, seamless shopping, Stripe-based payments, centralized administration, and a scalable MERN architecture capable of supporting future enhancements such as wishlists, promotions, analytics, and personalized recommendations.

