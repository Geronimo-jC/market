import { createConnection } from "../configs.js";

const insertRecordAdmin = async (data) => {
    const connection = await createConnection();
    try {
        await connection.query(`
        insert into registro_admin
        (id_registro,id_admin,accion,fecha_registro)
        value
        (null,"${data.id_admin}","${data.accion}","${data.fecha_registro}");
        `);
    } catch (error) {
        console.error(`Error al realizar la consulta: ${error}`);
    } finally {
        await connection.end();
    }
};

const deleteREcordAdmin = async (id_admin)=>{
    const connection = await createConnection();
    try {
        await connection.query(`delete from registro_admin where id_admin = ${id_admin};`)
    } catch (error) {
        console.error(`Error al realizar la consulta: ${error}`);
    }finally{
        await connection.end();
    }
};

export { insertRecordAdmin, deleteREcordAdmin }