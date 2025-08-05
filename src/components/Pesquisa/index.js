import Input from "../Input";
import styled from "styled-components";
import { useState } from "react";
import { pocoes } from './porcaoPesquisa'

const PesquisaContainer = styled.section`
        background-image: linear-gradient(90deg, #02511cff 35%, #2b993dff 165%);
        color: #FFF;
        text-align: center;
        padding: 85px 0;
        height: 270px;
        width: 100%;
`

const Titulo = styled.h2`
        color: #FFF;
        font-size: 36px;
        text-align: center;
        width: 100%;
`

const Subtitulo = styled.h3`
        ont-size: 16px;
        font-weight: 500;
        margin-bottom: 40px;
`

function Pesquisa() {
    const [pocoesPesquisadas, setPocoesPesquisadas] = useState()

    console.log(pocoesPesquisadas)
        return(
        <PesquisaContainer>
            <Titulo>Mexer, ou não mexer?</Titulo>
            <Subtitulo>Batido. Não misturado.</Subtitulo>
            <Input
                placeholder="O que está procurando?"
                onBlur={evento => {
                        const textoDigitado = evento.target.value;
                        const resultadoPesquisa = pocoes.filter( pocao => pocao.nome.includes(textoDigitado))
                        setPocoesPesquisadas(resultadoPesquisa)
                }}   
             />
        </PesquisaContainer>

      
    )
}

export default Pesquisa;