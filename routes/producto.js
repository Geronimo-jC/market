import express from 'express';
import { deleteProduct, getColumnsTable, getProduct } from '../db/producto.js';
import authenticate from '../middleware/authenticate.js';
import { insertRecordAdmin } from '../db/registo_admin.js';
import { deleteRecord } from '../db/provee.js';
import addRegisterAdmin from '../middleware/addRegisterAdmin.js';
const router = express.Router()

router.get('/', authenticate, async (req, res) => {
    const products = await getProduct();
    const columns = await getColumnsTable();
    if(!products) products = [];
    const content = {
        header: columns,
        body: products,
        product: true,
        title: "Productos"
    };
    res.render('index', content);
})

router.get('/eliminar/:id', authenticate, async (req, res) => {
    const id_producto = req.params.id;
    const data = addRegisterAdmin('Elimino un producto.', req);
    try {
        await deleteRecord(id_producto);
        await deleteProduct(id_producto);
        await insertRecordAdmin(data);
        res.sendStatus(200);
    } catch (error) {
        console.error(`Error al eliminar un producto. Error: ${error}`);
        res.sendStatus(500);
    }
})

export default router;