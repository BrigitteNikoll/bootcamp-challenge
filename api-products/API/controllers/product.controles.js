import { Product } from "../models/index.js";

//Controller get all product
export const getAllProducts = async (request, response) => {
  const products = await Product.find();
  response.json(products);
};
export const getOneProduct = async (req, res) => {
  console.log('getOneProduct', req.params);
  const { id: idProduct } = req.params
  const product = await Product.findById(idProduct)
  res.json(product);
};
