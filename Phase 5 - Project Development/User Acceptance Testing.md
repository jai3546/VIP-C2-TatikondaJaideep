# User Acceptance Testing (UAT) Template

| Field | Value |
|:---|:---|
| **Date** | 30 June 2026 |
| **Team ID** | SMARTBRIDGE-2026 |
| **Project Name** | ShopVerse Platform |
| **Maximum Marks** | 5 Marks |

---

## Project Overview

- **Project Name:** ShopVerse Platform
- **Project Description:** ShopVerse is a MERN stack-based e-commerce platform that allows customers to browse products, search and filter by category, manage cart and wishlist items, complete secure Stripe-based checkout, and track orders. Administrators can manage products, categories, users, and customer orders through a centralized dashboard.
- **Project Version:** v1.0.0
- **Testing Period:** 27 June 2026 to 30 June 2026

### Testing Scope

- User registration and login using JWT authentication and Bcrypt password encryption.
- Product browsing, keyword search, and category filtering.
- Shopping cart operations such as add, update quantity, remove item, and price calculation.
- Wishlist operations such as add, view, and remove saved products.
- Stripe test-mode checkout process.
- Customer profile, order history, and order cancellation.
- Admin dashboard operations including product management, category management, user management, and order status updates.

### Testing Environment

- **Application:** Development Environment
- **Frontend:** React.js + Vite
- **Backend:** Node.js + Express.js
- **Database:** MongoDB Atlas
- **Payment Gateway:** Stripe Test Mode

### Test Accounts

- **Customer Account:** Standard Test User
- **Administrator Account:** Test Administrator

---

## Test Cases

| Test Case ID | Test Scenario | Test Steps | Expected Result | Actual Result | Pass/Fail |
|:---|:---|:---|:---|:---|:---|
| **TC-001** | User Registration | 1. Open the registration page.<br>2. Enter name, email, and password.<br>3. Click the "Sign Up" button. | A new customer account should be created successfully and the user should be redirected to the login page. | Account created successfully and redirected to login page. | Pass |
| **TC-002** | User Login and Authentication | 1. Open the login page.<br>2. Enter valid customer credentials.<br>3. Click the "Sign In" button. | User should be authenticated, JWT token should be generated, and user should be redirected to the product catalog. | User logged in successfully and redirected to product catalog. | Pass |
| **TC-003** | Invalid Login Validation | 1. Open the login page.<br>2. Enter incorrect email or password.<br>3. Click the "Sign In" button. | Proper error message should be displayed and user should remain on the login page. | Error message displayed correctly. | Pass |
| **TC-004** | Product Search | 1. Open the products page.<br>2. Enter a product keyword in the search bar.<br>3. Observe the product list. | Products matching the search keyword should be displayed dynamically. | Matching products displayed correctly. | Pass |
| **TC-005** | Category Filter | 1. Open the products page.<br>2. Select a product category.<br>3. Observe the filtered results. | Only products belonging to the selected category should be displayed. | Category-based products displayed correctly. | Pass |
| **TC-006** | Add Product to Cart | 1. Open the product catalog.<br>2. Select a product.<br>3. Click "Add to Cart". | Product should be added to the cart with correct quantity and price. | Product added to cart successfully. | Pass |
| **TC-007** | Cart Quantity Update | 1. Open the cart page.<br>2. Increase or decrease product quantity.<br>3. Verify cart total. | Quantity and total amount should update dynamically. | Cart quantity and total updated correctly. | Pass |
| **TC-008** | Remove Product from Cart | 1. Open the cart page.<br>2. Click remove option for a cart item.<br>3. Verify cart contents. | Selected item should be removed and cart total should be recalculated. | Item removed and cart total updated correctly. | Pass |
| **TC-009** | Cart Price Breakdown | 1. Add products to cart.<br>2. Open cart summary.<br>3. Verify subtotal, tax, shipping, and final amount. | Cart should display a transparent price breakdown without hidden charges. | Price breakdown displayed correctly. | Pass |
| **TC-010** | Wishlist Add Item | 1. Open product catalog.<br>2. Click wishlist icon on a product.<br>3. Open wishlist page. | Product should be saved in the wishlist. | Product saved to wishlist successfully. | Pass |
| **TC-011** | Wishlist Remove Item | 1. Open wishlist page.<br>2. Remove a saved product.<br>3. Refresh wishlist view. | Product should be removed from wishlist. | Product removed successfully. | Pass |
| **TC-012** | Checkout and Stripe Payment | 1. Open cart page.<br>2. Click "Proceed to Checkout".<br>3. Enter required address details.<br>4. Complete payment using Stripe test mode. | Payment should be processed successfully and order should be created. | Payment completed and order created successfully. | Pass |
| **TC-013** | Order History | 1. Login as customer.<br>2. Open profile page.<br>3. View order history section. | Customer should be able to view previous orders with status details. | Order history displayed correctly. | Pass |
| **TC-014** | Cancel Pending Order | 1. Open customer profile.<br>2. Select a pending order.<br>3. Click cancel order. | Order status should change to Cancelled. | Order cancelled successfully. | Pass |
| **TC-015** | Admin Login | 1. Open login page.<br>2. Login using administrator account.<br>3. Verify redirection. | Admin should be redirected to the admin dashboard. | Admin redirected successfully. | Pass |
| **TC-016** | Admin Add Product | 1. Login as admin.<br>2. Open product management section.<br>3. Add product details and submit. | New product should appear in product list and customer catalog. | Product added successfully. | Pass |
| **TC-017** | Admin Update Product | 1. Open admin product list.<br>2. Select an existing product.<br>3. Update product details. | Updated details should be reflected in the catalog. | Product updated successfully. | Pass |
| **TC-018** | Admin Delete Product | 1. Open admin product list.<br>2. Delete a selected product.<br>3. Verify product catalog. | Product should be removed from database and catalog. | Product deleted successfully. | Pass |
| **TC-019** | Admin Category Management | 1. Open category management section.<br>2. Add or remove a category.<br>3. Verify category list. | Category changes should be updated in the application. | Category updated successfully. | Pass |
| **TC-020** | Admin Order Status Update | 1. Open admin orders section.<br>2. Select a customer order.<br>3. Update order status. | Updated order status should be reflected in customer's order history. | Order status updated successfully. | Pass |

---

## Bug Tracking

| Bug ID | Bug Description | Steps to Reproduce | Severity | Status | Additional Feedback |
|:---|:---|:---|:---|:---|:---|
| **BG-001** | Wishlist icon did not update immediately after adding or removing a product. | 1. Open product catalog.<br>2. Add product to wishlist.<br>3. Remove the same product from wishlist.<br>4. Observe wishlist icon state. | Medium | Closed | Fixed by updating frontend state immediately after wishlist add/remove operations. |
| **BG-002** | Category filter remained active after clearing the search input, causing unexpected product results. | 1. Search for a product keyword.<br>2. Apply a category filter.<br>3. Clear the search input.<br>4. Observe product results. | Low | Closed | Fixed by resetting filter state when the search field becomes empty. |
| **BG-003** | Admin dashboard statistics did not refresh immediately after deleting a product. | 1. Login as admin.<br>2. Delete a product from product management.<br>3. Return to dashboard statistics. | Medium | Closed | Fixed by re-fetching dashboard data after every product CRUD operation. |

---

## Sign-off

- **Tester Name:** Tatikonda Jaideep
- **Date:** 30 June 2026
- **Signature:** *Tatikonda Jaideep*

---

## Notes

1. Test cases cover major customer and administrator workflows.
2. Both positive and negative scenarios were considered during testing.
3. UI/UX feedback was reviewed and minor improvements were applied.
4. Bug status must be updated whenever new issues are identified.
5. Final sign-off is completed after successful execution of all critical test cases.