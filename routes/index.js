import express from 'express';
import cliente from './cliente.js';
import proveedor from './proveedor.js';
import producto from './producto.js';
import login from './login.js';

const router = express.Router();

router.use('/',login)
router.use('/cliente', cliente);
router.use('/proveedor', proveedor);
router.use('/producto', producto);

export default router;