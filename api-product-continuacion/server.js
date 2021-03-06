import express from "express";
import mongoose from "mongoose";

import { productCtlr } from "./api/controllers/index.js";

const { getAllProducts, getOneProduct, createProduct } = productCtlr;

/**
 * Mongoose
 */

//Connect to db
await mongoose.connect(
/*   "mongodb+srv://brigitte:root@clase-02-02.u6sw6.mongodb.net/product_db" */
);

// Listener to connection error
mongoose.connection.on("error", function (e) {
  console.error("ERROR: ", e);
});

/**
 * Express
 */
const app = express();
 
//Creación de Middleware
app.use(express.json())

// Routes
app.get("/", (request, response) => {
  response.send("API PRODUCTS");
});

app.get("/api/products", getAllProducts);
app.get("/api/products/:id", getOneProduct);
app.post("/api/products/create", createProduct);

// Launch server in port 5000
app.listen(5000, () => {
  console.log("Iniatialized server!");
});

