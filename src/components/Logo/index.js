import logo from '../../img/logo.png'
import './style.css'

function Logo(){
return(
         <div className='logo'>
        <img src={logo} alt= 'Singastore logo'></img>
        <p>SingaStore</p>
        </div>
)
}

export default Logo