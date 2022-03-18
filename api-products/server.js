import express from "express";
import mongoose from "mongoose";

/* MONGOSSE */

//Schema para productos
const schemaProducts = {
  ref: String,
  name: String,
  description: String,
};

//Product model
const Product = mongoose.model("Product", schemaProducts, "product");

//Connect to db
await mongoose.connect(
  "mongodb+srv://brigitte:root@clase-02-02.u6sw6.mongodb.net/product_db"
);

//Listener to connection error
mongoose.connection.on("error", function (e) {
  console.log("error", e);
});



//Controller get all product
const getAllProducts = async (request, response) => {
  const products = await Product.find();
  response.json(products)
};

/* EXPRESS */
const app = express();


// Routes
app.get("/", (request, response) => {
  response.send("API PRODUCTS");
});
app.get("/products", getAllProducts);


// Launch server in port 5000
app.listen(5000, () => {
  console.log("Iniatialized server!");
});

