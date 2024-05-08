import express from 'express';
import { getCustomers } from '../db/cliente.js';
const router = express.Router()

router.get('/',async(req,res)=>{
    const customers = await getCustomers();
    const content = {
        header: Object.keys(customers[0]),
        body: customers,
        customers: true,
        title: "Clientes"
    }
    res.render('index',content)
})

export default router;