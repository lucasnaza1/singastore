import './style.css'

const rotasPaginas = ['Home', 'Lore do Singas']

function Paginas(){
    return(
           <ul className='paginas'>
          {rotasPaginas.map( (rota) => (
            <li className='pagina-texto'><p>{rota}</p></li>
          ))}
        </ul>
    )
}

export default Paginas