import { Link } from 'react-router-dom'
import { Error } from './styledErro'

export default function Erro() {
    return(
        <Error>
            <h1>404</h1>
            <h2>Pagina não encontrada!</h2>
            <Link to='/'>Veja todos os filmes!</Link>
        </Error>
    )
}