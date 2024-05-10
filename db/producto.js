import { createConnection } from "../configs.js";

const getProduct = async ()=>{
    const connection = await createConnection();
    try {
        let [ products ] = await connection.query('select * from producto');
        return products
    } catch (error) {
        console.error('Error al realizar la consulta: ',error);
    } finally{
        await connection.end();
    }
}

const getColumnsTable = async ()=>{
    const connection = await createConnection();
    try {
        let [ columns ] = await connection.query(`describe producto;`);
        return columns;
    } catch (error) {
        console.error(`Error al realizar la consulta. Error: ${error}`);
    }finally{
        await connection.end();
    }
}

const insertNewProduct = async (product)=>{
    const connection = await createConnection()
    try {
        await connection.query(`insert into producto
        (id_producto,nombre,marca,color,modelo,stock,precio)
        value
        (null,"${product.nombre}","${product.marca}","${product.color}","${product.modelo}","${product.stock}","${product.precio}");`);
        
        let [[response]] = await connection.query('select last_insert_id() as last_id');
        return response;
    } catch (error) {
        console.error('Error al realizar la consulta: ',error);
    }finally{
        await connection.end();
    }
}

const deleteProduct = async (id_producto)=>{
    const connection = await createConnection();
    try {
        await connection.query(`delete from producto where id_producto = ${id_producto}`);
    } catch (error) {
        console.error('Error al realizar la consulta: ',error);
    }finally{
        await connection.end();
    }
}

export { getProduct, insertNewProduct, deleteProduct, getColumnsTable}