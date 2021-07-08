import { Link } from 'react-router-dom';
import { Head } from './styledHeader'

export default function Header(){
    return(
        <Head>
            <Link to='/'>Filmaria</Link>
            <Link to='/favoritos'>Salvos</Link>
        </Head>
    )
}