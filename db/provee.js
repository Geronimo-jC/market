import { createConnection } from "../configs.js";

const insertNewRecord = async (data)=>{
    const connection = await createConnection();
    try {
        let response = await connection.query(`
        insert into provee 
        (id_producto,id_proveedor,cantidad,fecha) 
        value
        ("${data.id_producto}","${data.id_proveedor}","${data.cantidad}","${data.fecha}");
        `);
        if(response){
            console.log('Exito en la consulta');
        }
    } catch (error) {
        console.error('Error al realizar la consulta: ',error);
    }finally{
        await connection.end();
    }
}

const deleteRecord = async (id_producto)=>{
    const connection = await createConnection();
    try {
        await connection.query(`delete from provee where id_producto = ${id_producto};`);        
    } catch (error) {
        console.error(`Error al reliazar la peticion. Error: ${error}`);
    }finally{
        await connection.end();
    }
}

export { insertNewRecord, deleteRecord };