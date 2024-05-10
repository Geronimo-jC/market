import { createConnection } from "../configs.js";

const getAdminData = async(usuario)=>{
    const connection = await createConnection();
    try {
        let [[response]] = await connection.query(`select * from administrador where nombre = "${usuario}"`);
        return response;
    } catch (error) {
        console.error('Error al realizar la consulta: ', error);
    }finally{
        await connection.end();
    }
}

export {getAdminData}