import { path, __dirname } from "../configs.js";
import express from 'express';
const router = express.Router()

router.get('/', (req, res) => {
    res.render('producto')
})

export default router;