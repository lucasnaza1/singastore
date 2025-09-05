import styled from 'styled-components';
import Pesquisa from '../components/Pesquisa';
import UltimosLancamentos from '../components/UltimosLancamentos';

const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(90deg, #26b928 30%, #68bd69 100%);

  li{
    list-style: none;
`

function Home() {
  return (
    <AppContainer>
      <Pesquisa />
      <UltimosLancamentos />
    </AppContainer>
  );
}

export default Home;
