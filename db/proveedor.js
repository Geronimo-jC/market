import { createConnection } from "../configs.js";

const getSupplier = async ()=>{
    const connection = await createConnection()
    try {
        let [ supplier ] = await connection.query('select * from proveedor')
        return supplier
    } catch (error) {
        console.error('Error al realizar la consulta: ',error);
    } finally{
        await connection.end();
    }
}

export { getSupplier }