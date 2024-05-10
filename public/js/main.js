const sendDataSupplier = async (e)=>{
    e.preventDefault();
    const data = Object.values(e.target.children);
    const objeto = {};
    data.map(e=> e.name ? objeto[e.name]=e.value:'');

    const response = await fetch('/proveedor/ordenar',{
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(objeto)
    });

    if(response.status !== 200){
        alert(`Fallo al ordenar productos. Error ${response.status}`);
    }else{
        alert("Exito al ordenar productos.");
        location.reload();
    }
}

const deleteRecord = async (id_producto)=>{
    if(confirm(`¿Desea eliminar este registro? Registro: ${id_producto}`)){
        const response = await fetch(`producto/eliminar/${Number(id_producto)}`);
        if(response.status !== 200){
            alert(`Fallo al eliminar un producto. Error ${response.status}`);
        }else{
            alert('Exito al eliminar el registro.');
            location.reload();
        }
    }
}

const login = async (e)=>{
    e.preventDefault();
    const usuario = e.target.children.usuario.value
    const contraseña = e.target.children.contraseña.value
    const data = {
        usuario,
        password: contraseña
    };

    const response = await fetch('/login/admin',{
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(data)
    });

    if(response.status !== 200){
        alert(`Usuario y contraseña no coinciden.`);
    }else{
        alert('Logeado con exito.')
        location.assign('/cliente')
    }
}