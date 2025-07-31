import Header from './components/Header'
import styled from 'styled-components';

const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(90deg, #26b928 30%, #68bd69 100%);
`

function App() {
  return (
    <AppContainer>
      <Header/>
    </AppContainer>
  );
}

export default App;
