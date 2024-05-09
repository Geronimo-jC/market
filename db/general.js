import { createConnection } from "../configs.js";

const getLastInsertId = async ()=>{
    const connection = await createConnection();
    try {
        const [[response]] = await connection.query('select last_insert_id() as last_id;');
        return response;
    } catch (error) {
        console.error('Error al realizar la consulta: ',error);
    }finally{
        await connection.end();
    }
}

export { getLastInsertId }