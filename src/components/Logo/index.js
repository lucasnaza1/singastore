import logo from '../../img/logo.png'
import './style.css'

function Logo(){
return(
         <div className='logo'>
        <img 
        src={logo} 
        alt= 'Singastore logo'
        className='logo-img'
        ></img>
        <p><strong>Singa</strong>Store</p>
        </div>
)
}

export default Logo