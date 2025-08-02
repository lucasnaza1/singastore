import correr from '../../img/correr.png'
import pocoes from '../../img/pocoes.png'
import proibidos from '../../img/proibidos.png'
import styled from 'styled-components'

const icones = [correr, pocoes, proibidos]

const IconesContainer = styled.ul`
    display: flex;
    align-items: center;
`
const Icone = styled.li`
    margin-right: 2.5rem;
    width: 1.5rem;
    height: 100%;
    padding: 0 0.5rem;
    cursor: pointer;
    list-style: none;
`

function Icones(){
    return(
       <IconesContainer>
          {icones.map( (icone) => (
            <Icone><img src={icone} alt='icone'></img></Icone>
          ))}
        </IconesContainer>
    )
}

export default Icones