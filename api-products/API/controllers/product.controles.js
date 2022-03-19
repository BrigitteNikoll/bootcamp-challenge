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

export const updateProduct = async (req, res) => {
  const { id: idProduct } = req.params;
  const productToUpdate = req.body;

  const product = await Product.findById(idProduct);

  try {
    Product.updateOne(product, productToUpdate, (error, updatedProduct) => {
      if (!error) {
        res.status(200).json(updatedProduct);
      } else res.status(500).send(error);
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

