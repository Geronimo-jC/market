export default (accion, req)=>{
    const id_admin = req.session.usuario.id;
    const hora = new Date().toTimeString().slice(0, 8);
    const fecha = new Date().toISOString().slice(0, 10)
    const fecha_registro = `${fecha} ${hora}`;
    const data = {
        id_admin,
        fecha_registro,
        accion
    }
    return data;
}