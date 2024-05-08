console.log("funciona")

const sendDataSupplier = async (e)=>{
    e.preventDefault()
    const data = Object.values(e.target.children)
    const objeto = {}
    data.map(e=> e.name ? objeto[e.name]=e.value:'');
    data.map(e=> e.value = '');

    const response = await fetch('/proveedor/ordenar',{
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(objeto)
    });

    if(response.status !== 200){
        alert(`Fallo al ordenar productos. Error ${response.status}`)
    }else{
        alert("Exito al ordenar productos.")
    }
}