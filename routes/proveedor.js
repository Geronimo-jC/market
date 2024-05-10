import express from 'express';
import { getIdSupplier, getNamesSupplier, getSupplier } from '../db/proveedor.js';
import { insertNewProduct } from '../db/producto.js';
import { insertNewRecord } from '../db/provee.js';
import authenticate from '../middleware/authenticate.js';
import addRegisterAdmin from '../middleware/addRegisterAdmin.js';
import { insertRecordAdmin } from '../db/registo_admin.js';
const router = express.Router()

router.get('/',authenticate,async (req,res)=>{
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

router.post('/ordenar', authenticate,async (req,res)=>{
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
    const data = addRegisterAdmin('Ordeno un nuevo producto.', re);
    try {
        await insertNewRecord(record);
        await insertRecordAdmin(data);
        
        res.sendStatus(200);
    } catch (error) {
        console.error(`Error al insertar registros. Error: ${error}`);
        res.sendStatus(500);
    }
})

export default router;