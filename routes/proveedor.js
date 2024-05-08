import express from 'express'
import { getSupplier } from '../db/proveedor.js'
import { insertNewProduct } from '../db/producto.js';
const router = express.Router()

router.get('/',async (req,res)=>{
    const supplier = await getSupplier();
    const content = {
        header: Object.keys(supplier[0]),
        body: supplier,
        supplier: true,
        title: "Proveedores"
    }
    res.render('index',content)
})

router.post('/ordenar',async (req,res)=>{
    const body = req.body;
    await insertNewProduct(body)
    res.send('Datos recibidos')
})

export default router;