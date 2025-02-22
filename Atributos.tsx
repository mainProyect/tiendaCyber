function Atributos(){
    const atributos = {
        nombre:"Miguel",
        edad: 33,
        nivel: "inicial"
    }
    return <p>{atributos.nombre},<br/> {atributos.edad},<br/> {atributos.nivel}</p>
}

export default Atributos;