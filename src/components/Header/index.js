import Logo from '../../components/Logo'
import Paginas from '../../components/Pagina'
import Icones from '../../components/Icone'
import styled from 'styled-components'

const HeaderContainer = styled.header`
    background-color: #b3e4b3;
    display: flex;
    justify-content: center;
li{
    list-style: none;
}
`

function Header(){
    return (
    <HeaderContainer>
        <Logo/>
        <Paginas/>
        <Icones/>
      </HeaderContainer>
    )
}

export default Header