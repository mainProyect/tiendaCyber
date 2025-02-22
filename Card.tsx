import Atributos from './Atributos';
import Foto from './Foto'

import Titulo from './Titulo'
function Card(){
    return (
        <div>
            <Titulo/>
            <Foto/>
            <Atributos/>
        </div>
    )
}

export default Card;