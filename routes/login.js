import express from "express";
import bcrypt from 'bcrypt';
import { getAdminData } from "../db/admin.js";
const router = express.Router();

router.get('/', (req, res) => {
    const content = {
        title: "Login",
        login: true
    }
    res.render('index', content)
});

router.post('/login/admin', async (req, res) => {
    const data = req.body;
    const usuario = await getAdminData(data.usuario);
    const result = await bcrypt.compare(data.password, usuario.contraseña);
    if(result){
        req.session.usuario = {
            id: usuario.id_admin,
            nombre: usuario.nombre
        }
        res.sendStatus(200)
    }else{
        res.sendStatus(401)
    }
})

export default router;