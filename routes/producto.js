import express from 'express';
import { deleteProduct, getProduct } from '../db/producto.js';
import authenticate from '../middleware/authenticate.js';
const router = express.Router()

router.get('/', authenticate, async (req, res) => {
    const products = await getProduct();
    const content = {
        header: Object.keys(products[0]),
        body: products,
        product: true,
        title: "Productos"
    };
    res.render('index', content);
})

router.get('/eliminar/:id', authenticate, async (req, res) => {
    const id_producto = req.params.id;
    await deleteProduct(id_producto);
    res.redirect('/producto');
})

export default router;