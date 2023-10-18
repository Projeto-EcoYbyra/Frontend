import { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AuthContext } from '../../../contexts/AuthContext'
import Produto from '../../../models/Produto'
import { buscar, deletar } from '../../../services/Service'
import { toastAlerta } from '../../../utils/toastAlerta'


function DeletarProdutos() {
  const [produto, setProduto] = useState<Produto>({} as Produto)


  let navigate = useNavigate()


  const { id } = useParams<{ id: string }>()


  const { usuario, handleLogout } = useContext(AuthContext)
  const token = usuario.token


  async function buscarPorId(id: string) {
    try {
      await buscar(`/produto/${id}`, setProduto, {
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
    navigate("/produto")
  }


  async function deletarProdutos() {
    try {
      await deletar(`/produto/${id}`, {
        headers: {
          'Authorization': token
        }
      })


      toastAlerta('Produto apagado com sucesso', 'sucesso')


    } catch (error) {
      toastAlerta('Erro ao apagar o Produto', 'erro')
    }


    retornar()
  }
  return (
    <div className='container w-1/3 mx-auto'>
      <h1 className='text-4xl text-center my-4'>Deletar Produto</h1>


      <p className='text-center font-semibold mb-4'>Você tem certeza de que deseja apagar este Produto?</p>


      <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
        <header className='py-2 px-6 bg-lime-900 text-white font-bold text-2xl'>{produto.categoria?.categoria}</header>
       
        <div className="p-4">
          <img src={produto.foto} className='h-12 rounded-full' alt="" />
          <h4 className='text-lg font-bold text-center  text-lime-900 uppercase '>{produto.nome}</h4>
          <h3 className="mb-3 font-normal text-lime-900 dark:text-lime-900">{produto.nome}</h3>


          <p className="mb-3 font-bold text-lime-900 dark:text-lime-900">R$ {new Intl.NumberFormat('pt-BR', {
               minimumFractionDigits: 2,
               maximumFractionDigits: 2,
               }).format(produto.preco)}</p>
        </div>


        <div className="flex">
          <button className='text-slate-100 bg-red-400 hover:bg-red-600 w-full py-2' onClick={retornar}>
            Retornar
          </button>
          <button className='w-full text-slate-100 bg-lime-400 hover:bg-lime-600 flex items-center justify-center' onClick={deletarProdutos}>
            Deletar
          </button>
        </div>
      </div>
    </div>
  )
}


export default DeletarProdutos

