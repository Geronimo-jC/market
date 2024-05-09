import { createConnection } from "../configs.js";

const getSupplier = async () => {
    const connection = await createConnection();
    try {
        let [supplier] = await connection.query('select * from proveedor');
        return supplier;
    } catch (error) {
        console.error('Error al realizar la consulta: ', error);
    } finally {
        await connection.end();
    }
}

const getNamesSupplier = async () => {
    const connection = await createConnection();
    try {
        let [names] = await connection.query('select nombre from proveedor');
        return names;
    } catch (error) {
        console.error('Error al realizar la consulta: ', error);
    } finally {
        await connection.end();
    }
}

const getIdSupplier = async (name) => {
    const connection = await createConnection();
    try {
        let [[response]] = await connection.query(`select id_proveedor from proveedor where nombre = "${name}"`);
        return response.id_proveedor;
    } catch (error) {
        console.error('Error al realizar la consulta: ', error);
    } finally {
        await connection.end();
    }
}

export { getSupplier, getNamesSupplier, getIdSupplier }