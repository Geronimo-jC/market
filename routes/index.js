import express from 'express';
import cliente from './cliente.js';
import proveedor from './proveedor.js';
import producto from './producto.js';

const router = express.Router();

router.get('/',(req,res)=>{
    res.redirect('/producto')
})

router.use('/cliente', cliente);
router.use('/proveedor', proveedor);
router.use('/producto', producto);

export default router;