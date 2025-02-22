function Titulo(){
    const nombre = ""
    if(nombre){
        return <h1>Hola {nombre}, al mundo</h1>
    }else {
        return <h1>Hola mundo</h1>
    }
}

export default Titulo;
