import { createConnection } from "../configs.js";

const getProduct = async ()=>{
    const connection = await createConnection()
    try {
        let [ products ] = await connection.query('select * from producto')
        return products
    } catch (error) {
        console.error('Error al realizar la consulta: ',error);
    } finally{
        await connection.end();
    }
}

const insertNewProduct = async (product)=>{
    const connection = await createConnection()
    try {
        let response = await connection.query(`insert into producto (id_producto,nombre,marca,color,modelo,stock,precio) value (null,"${product.nombre}","${product.marca}","${product.color}","${product.modelo}","${product.stock}","${product.precio}")`)
        if(response){
            console.log('Exito en la consulta')
        }
    } catch (error) {
        console.error('Error al realizar la consulta: ',error)
    }finally{
        await connection.end()
    }
}

export { getProduct, insertNewProduct }