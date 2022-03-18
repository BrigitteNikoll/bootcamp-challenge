import express from "express";
import mongoose from "mongoose";

import { productCtrl } from './api/controllers/index.js'

const { getAllProducts, getOneProduct } = productCtrl;
/* MONGOSSE */

//Connect to db
await mongoose.connect(
  "mongodb+srv://brigitte:root@clase-02-02.u6sw6.mongodb.net/product_db"
);

//Listener to connection error
mongoose.connection.on("error", function (e) {
  console.log("error", e);
});




/* EXPRESS */
const app = express();


// Routes
app.get("/", (request, response) => {
  response.send("API PRODUCTS");
});
app.get("/api/products", getAllProducts);
app.get("/api/products/:id/:color", getOneProduct);


// Launch server in port 5000
app.listen(5000, () => {
  console.log("Iniatialized server!");
});

