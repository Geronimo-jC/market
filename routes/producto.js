import express from 'express';
import { getProduct } from '../db/producto.js';
const router = express.Router()

router.get('/', async (req, res) => {
    const products = await getProduct();
    const content = {
        header: Object.keys(products[0]),
        body: products,
        product: true,
        title: "Productos"
    };
    res.render('index', content);
})

export default router;