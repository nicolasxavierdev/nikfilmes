import { useEffect, useState } from 'react';
import './filme-info.css';
import { useHistory, useParams } from 'react-router-dom';
import api from '../../services/api';
import { toast } from 'react-toastify';

export default function Filme() {
    const { id } = useParams()
    const history = useHistory()

    const [Filme, setFilme] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        async function loadFilme() {
            const response = await api.get(`r-api/?api=filmes/${id}`)

            if (response.data.length === 0) {
                //Tentou acessa com um ID que não existe, navego ele para home!
                history.replace('/')
                return
            }

            setFilme(response.data)
            setLoading(false)
        }

        loadFilme();

        return () => {
            console.log('COMPONENTE DESMONTADO');
        }

    }, [history, id])

    function salvaFilme() {

        const minhaLista = localStorage.getItem('filmes')

        let filmesSalvos = JSON.parse(minhaLista) || []

        //Se tiver algum filme salvo com esse mesmo id precisa ignorar...
        const hasFilme = filmesSalvos.some( (filmeSalvo) => filmeSalvo.id === Filme.id)

        if (hasFilme) {
            toast.error('Você já possui esse filme salvo.')
            return
            //Para execução do código aqui...
        }

        filmesSalvos.push(Filme)
        localStorage.setItem('filmes', JSON.stringify(filmesSalvos))
        toast.success('Filme salvo com sucesso!')
    }


    if (loading) {
        return (
            <div className='filme-info'>
                <h1>Carregando seu filme...</h1>
            </div>
        )
    }
    return (
        <div className='filme-info'>
            <h1>{Filme.nome}</h1>
            <img src={Filme.foto} alt={Filme.nome} />

            <h3>Sinopse</h3>
            {Filme.sinopse}

            <div className='botoes'>
                <button onClick={salvaFilme}>Salvar</button>
                <button>
                    <a target='blank' href={`https://youtube.com/results?search_query=${Filme.nome} Trailer`}>
                        Trailer
                    </a>
                </button>
            </div>
        </div>
    )
}