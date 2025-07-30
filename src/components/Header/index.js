import Logo from '../../components/Logo'
import Paginas from '../../components/Pagina'
import Icones from '../../components/Icone'
import './style.css'

function Header(){
    return (
    <header className="App-header">
        <Logo/>
        <Paginas/>
        <Icones/>
      </header>
    )
}

export default Header