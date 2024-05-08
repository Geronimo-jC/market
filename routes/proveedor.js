import { path, __dirname } from "../configs.js";
import express from 'express'
const router = express.Router()

router.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'views/proveedor.html'))
})

export default router;