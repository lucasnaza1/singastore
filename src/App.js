import './App.css';
import Logo from './components/Logo'
import correr from './img/correr.png'
import pocoes from './img/pocoes.png'
import proibidos from './img/proibidos.png'

const rotasPaginas = ['Lore', 'Ir para Loja']
const icones = [correr, pocoes, proibidos]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo></Logo>
        <ul className='paginas'>
          {rotasPaginas.map( (rota) => (
            <li className='pagina-texto'><p>{rota}</p></li>
          ))}
        </ul>
        <ul className='icones'>
          {icones.map( (icone) => (
            <li className='icone'><img src={icone} alt='icone'></img></li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
