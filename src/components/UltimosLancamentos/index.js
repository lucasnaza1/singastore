import { botas } from './dadosUltimosLancamentos'
import styled from 'styled-components'
import { Titulo } from '../Titulo/index'
import CardRecomenda from '../cardRecomenda/index'
import solasSimbioticas from '../../img/solas-simbioticas.png'

const UltimosLancamentosContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`


const NovosItensContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`

function UltimosLancamentos(){
    return(
        <UltimosLancamentosContainer>
            <Titulo 
                cor = '#ff9900ff'
                > ÚLTIMOS LANÇAMENTOS
            </Titulo>
            <NovosItensContainer>
                 {botas.map( bota => (
                    <img
                        src= {bota.src}
                        alt='botas'
                    />
                ))} 
            </NovosItensContainer>
            <CardRecomenda
                titulo='Você pode gostar...'
                subtitulo='Angular 11'
                descricao='Construindo uma aplicação com a plataforma Google'
                img={solasSimbioticas}
            />            
        </UltimosLancamentosContainer>

    )
}

export default UltimosLancamentos