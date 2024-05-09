import express from 'express';
import { getIdSupplier, getNamesSupplier, getSupplier } from '../db/proveedor.js';
import { insertNewProduct } from '../db/producto.js';
import { insertNewRecord } from '../db/provee.js';
const router = express.Router()

router.get('/',async (req,res)=>{
    const supplier = await getSupplier();
    const names = await getNamesSupplier();
    const content = {
        header: Object.keys(supplier[0]),
        body: supplier,
        supplier: true,
        title: "Proveedores",
        names
    }
    res.render('index',content)
})

router.post('/ordenar',async (req,res)=>{
    const body = req.body;
    const id_producto = await insertNewProduct(body);
    const id_proveedor= await getIdSupplier(body.marca);
    const fecha = new Date().toISOString().slice(0,10);
    const record = {
        id_producto: id_producto.last_id,
        id_proveedor,
        cantidad: body.stock,
        fecha
    }
    await insertNewRecord(record);
    res.send('Datos recibidos');
})

export default router;