import { createConnection } from "../configs.js";

const getCustomers = async ()=>{
    const connection = await createConnection()
    try {
        let [ customers ] = await connection.query('select * from cliente')
        return customers
    } catch (error) {
        console.error('Error al realizar la consulta: ',error);
    } finally{
        await connection.end();
    }
}

export { getCustomers }