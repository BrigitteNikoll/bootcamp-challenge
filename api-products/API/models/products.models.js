import mongoose from "mongoose";

//Schema para productos
const schemaProducts = {
    ref: String,
    name: String,
    description: String,
    create_at: Date,
    discount: Number,
    price: Number,
    active: Boolean
  };
  
  //Product model
const Product = mongoose.model("Product", schemaProducts, "product");
  
export default Product;