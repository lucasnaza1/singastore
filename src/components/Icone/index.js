import correr from '../../img/correr.png'
import pocoes from '../../img/pocoes.png'
import proibidos from '../../img/proibidos.png'
import './style.css'

const icones = [correr, pocoes, proibidos]

function Icones(){
    return(
       <ul className='icones'>
          {icones.map( (icone) => (
            <li className='icone'><img src={icone} alt='icone'></img></li>
          ))}
        </ul>
    )
}

export default Icones