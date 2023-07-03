# E-Commerce Application from Scratch

This repository contains a full-stack e-commerce application built from scratch using the MERN stack (MongoDB, Express.js, React.js, and Node.js). It provides a robust foundation for building your own e-commerce website with essential features such as product listing, cart functionality, user authentication, and more.

## Features

- User authentication (signup, login, logout)
- Product listing and search functionality
- Product details with user reviews and ratings
- Cart management (add to cart, update quantity, remove from the cart)
- Checkout process with shipping address and payment method
- Order history for users
- Admin features:
  - Manage products (create, update, delete)
  - Manage orders
  - Manage users

## Prerequisites

Before running the application, ensure that you have the following prerequisites installed:

- Node.js (version 12 or above)
- MongoDB

## Installation

1. Clone the repository:
```bash
git clone https://github.com/shaakilahammed/mern-ecommerce-from-scratch.git
```
2. Change into the project directory:
```bash
cd mern-e-commerce-from-scratch
```
3. Install the backend dependencies:
```bash
npm install
```
4. Change into the frontend directory:
```bash
cd frontend
```
5. Install the frontend dependencies:
```bash
npm install
```

## Configuration

1. Create a `.env` file in the project's root directory.

2. Add the following environment variables to the `.env` file:
```bash
NODE_ENV=development
PORT=5000
MONGO_URI=<your_mongodb_uri>
JWT_SECRET=<your_jwt_secret>
```
Replace `<your_mongodb_uri>` with your MongoDB connection string and `<your_jwt_secret>` with a secret key for JSON Web Tokens.

## Usage

1. Run the application:
```bash
npm run dev
```
2. Open your web browser and visit `http://localhost:3000` to access the application.

## Contributing

Contributions to this project are welcome. If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

