# E-commerce Web App

This project is a simple e-commerce web app built with **Next.js**, **Node.js** (Express), and **PostgreSQL**. It showcases product listing and CRUD functionalities, connecting the backend to a PostgreSQL database.

---

## 🚀 Project Setup

### 1. **Clone the Repository**

```bash
git clone https://github.com/your-username/products-backend.git
cd products-backend


2. Install Dependencies
Run the following command to install the required dependencies for both frontend and backend:
npm install

3. Environment Variables
Make sure to create a .env file in the root directory of the backend and add the following environment variables:
# .env

# PostgreSQL Database URL
DATABASE_URL=postgresql://postgres:your_password@localhost:5432/ecommerce_db

# Port for the server to run on (optional)
PORT=5000



⚙️ Running the Project Locally
1. Start the Backend Server
To run the backend server, use the following command:

npm run start

2. Start the Frontend (if applicable)
In the frontend directory, run:

npm run dev

3. Access the App
Once both the backend and frontend are running, you can access the app by visiting:

Backend (API): http://localhost:5000/api/products

Frontend: http://localhost:3000



🛠️ Development Features
Backend: Implements RESTful API to fetch products from the PostgreSQL database using Express.

Frontend: Displays a list of products and interacts with the backend API.

Database: PostgreSQL database to store and retrieve product data.

🔧 Backend API Endpoints
GET /api/products: Fetch all products.

POST /api/products: Add a new product.

PUT /api/products/:id: Update a product by ID.

DELETE /api/products/:id: Delete a product by ID.

💾 Database Setup
1. Create Database
You can use pgAdmin or psql command line tool to create the database.

For example:
CREATE DATABASE ecommerce_db;

2. Setup Database Tables
Make sure to create the necessary tables in your PostgreSQL database. You can create a table for products using the following SQL:
CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    description TEXT,
    price DECIMAL(10, 2),
    stock_quantity INT
);


📦 Deployment
1. Deploying Backend
Deploy the backend API using Render, Heroku, or any cloud provider of your choice.

Make sure to set the environment variables on your cloud provider, especially the DATABASE_URL.

2. Frontend Deployment
The frontend can be deployed to Vercel (for Next.js apps) or any similar platform.

