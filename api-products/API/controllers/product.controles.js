import { Product } from "../models/index.js";

//Controller get all product
export const getAllProducts = async (request, response) => {
  const products = await Product.find();
  response.json(products);
};
export const getOneProduct = async (req, res) => {
  const products = await Product.find();
  response.json(products);
};

