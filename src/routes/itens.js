import styled from 'styled-components';
import Pesquisa from '../components/Pesquisa';

const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(90deg, #26b928 30%, #68bd69 100%);

  li{
    list-style: none;
`

function Itens() {
  return (
    <AppContainer>
      <Pesquisa />
    </AppContainer>
  );
}

export default Itens;
