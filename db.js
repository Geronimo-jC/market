const consultarProveedor = async ()=>{
    try {
        let proveedor = await connection.query('select * from proveedor')
        console.log(proveedor)
    } catch (error) {
        console.error('Error al realizar la consulta: ',error);
    } finally{
        await connection.end();
    }
}


consultarProveedor();