import Logo from '../../components/Logo'
import Paginas from '../../components/Pagina'
import Icones from '../../components/Icone'
import styled from 'styled-components'

const HeaderContainer = styled.header`
    background-color: #FFF;
    display: flex;
    justify-content: center;
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