import express from 'express';

import { productCtrl } from '../controllers/index.js'
const { getAllProducts, getOneProduct, createProduct, updateProduct } = productCtrl;

const router = express.Router();

const productRoutes = {
    GET_ALL: '/products/',
    GET_ONE: '/products/:id',
    CREATE: '/products/create',
    UPDATE: '/products/update/:id',
    DELETE: '/products/delete/:id'
}

router.get(productRoutes.GET_ALL, getAllProducts);
router.get(productRoutes.GET_ONE, getOneProduct);
router.get(productRoutes.CREATE, createProduct);
router.get(productRoutes.UPDATE, updateProduct);

export default router