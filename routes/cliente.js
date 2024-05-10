import express from 'express';
import { getCustomers } from '../db/cliente.js';
import authenticate from '../middleware/authenticate.js';
const router = express.Router()

router.get('/',authenticate,async(req,res)=>{
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