import { AuthContext } from "../../../contexts/AuthContext"
import Categoria from "../../../models/Categoria"
import { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams} from 'react-router-dom'
import { buscar, deletar } from '../../../services/Service'
import { toastAlerta } from "../../../utils/toastAlerta"

function DeletarCategoria() {
    const [categoria, setCategoria] = useState<Categoria>({} as Categoria)

    let navigate = useNavigate()

    const { id } = useParams<{ id: string }>()

    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token

    async function buscarPorId(id: string) {
        try {
            await buscar(`/categoria/${id}`, setCategoria, {
                headers: {
                    'Authorization': token
                }
            })
        } catch (error: any) {
            if (error.toString().includes('403')) {
                toastAlerta('O token expirou, favor logar novamente', 'info')
                handleLogout()
            }
        }
    }

    useEffect(() => {
        if (token === '') {
            toastAlerta('Você precisa estar logado', 'info')
            navigate('/login')
        }
    }, [token])

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    function retornar() {
        navigate("/categoria")
    }

    async function deletarCategoria() {
        try {
            await deletar(`/categoria/${id}`, {
                headers: {
                    'Authorization': token
                }
            })

            toastAlerta('Categoria apagada com sucesso','sucesso')

        } catch (error) {
            toastAlerta('Erro ao apagar a Categoria', 'erro')
        }

        retornar()
    }
    return (
        <div className='container w-1/3 mx-auto'>
            <h1 className='text-4xl text-center my-4'>Deletar categoria</h1>

            <p className='text-center font-semibold mb-4'>Você tem certeza de que deseja apagar o categoria a seguir?</p>

            <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
                <header className='py-2 px-6 bg-lime-900 text-white font-bold text-2xl'>Categoria</header>
                <p className='p-8 text-3xl bg-lime-100 h-full'>{categoria.categoria}</p>
                <div className="flex">
                    <button className='text-slate-100 bg-red-400 hover:bg-red-600 w-full py-2' onClick={retornar}>Cancelar</button>
                    <button className='w-full text-slate-100 bg-lime-400 hover:bg-lime-700 flex items-center justify-center' onClick={deletarCategoria}>
                        Deletar
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DeletarCategoria