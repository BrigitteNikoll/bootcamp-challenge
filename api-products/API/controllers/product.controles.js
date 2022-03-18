import { Product } from "../models/index.js";

//Controller get all product
export const getAllProducts = async (request, response) => {
  try {
    const products = await Product.find();
    if (products.length === 0) response.status(204).send();
    else response.status(200).json(products);
    response.json(products);
  } catch (e) {
    console.log("ERROR", e);
    response.status(500).json({ error: e });
  }
};
export const getOneProduct = async (req, res) => {
  /*   console.log('getOneProduct', req.params); */
  const { id: idProduct } = req.params;
  const product = await Product.findById(idProduct);
  res.json(product);
};
export const createProduct = async (req, res) => {
  try {
    /*   console.log("createProduct", req.body); */
    const product = new Product(req.body);
    const newProduct = await product.save();
    newProduct && res.status(201).json(newProduct);
  } catch (e) {
    response.status(500).json({ error: e });
  }
};
