import { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Produto from '../../../models/Produto'
import { AuthContext } from '../../../contexts/AuthContext';
import './CardProduto.css'

interface CardProdutoProps {
  prod: Produto
  isPerfil: boolean;
}

function CardProdutos({ prod, isPerfil}: CardProdutoProps) {
  const [valor, setValor] = useState(prod.id);

  useEffect(() => {
      setValor(prod.id)
  }, [prod.id]);

  const { usuario, adicionarProduto } = useContext(AuthContext)
  const isAdmin:boolean = usuario.nome === 'Administrador' ? true : false

  return (
    <div className='bg-lime-100 border-2  flex flex-col rounded-md overflow-hidden justify-between'>
      <div>
        <div className="flex bg-lime-300 items-center gap-4">
          <img src={prod.foto} className='img-produto rounded-e-sm' alt="" /> 
        </div>
        <div className='p-4'>
          <h4 className='text-lg font-semibold uppercase'>{prod.nome}</h4>
          {
            isPerfil === false ? (
              <>
                <p className='mb-3 text-lg font-bold'>{prod.categoria?.categoria}</p>
                <p>{prod.descricao}</p>
                <p className="mb-3 text-lg font-bold text-black dark:text-black"> R$ {new Intl.NumberFormat('pt-BR', {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                        }).format(prod.preco)}
                </p>
                <button className="items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#3f6212] hover:text-black transition-all duration-300 ease-in-out rounded-lg hover:bg-[#bef264] focus:outline-none dark:bg-verde_claro2 dark:hover:bg-white dark:hover:text-black"
                  onClick={() => {
                  adicionarProduto(prod)
                  setValor(valor - 1);

                  }}>
                  Adicionar 🛒
                </button>
                
              </>
            ) : (
              <>
                <p className="mb-3 text-lg font-bold text-black dark:text-black"> R$ {new Intl.NumberFormat('pt-BR', {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                        }).format(prod.preco)}
                </p>
              </>
            )
          }
          
          <>
            <div className='mt-2 flex flex-col items-center'> </div>
          </>               
        </div>
      </div>
      {isAdmin === true ? (
        <>
          <div className="flex">
            <Link to={`/editarProduto/${prod.id}`} className='w-full text-black bg-lime-300 hover:bg-lime-700 flex items-center justify-center py-2'>
                <button>Editar</button>
            </Link>
            <Link to={`/deletarProduto/${prod.id}`} className='text-white bg-red-400 hover:bg-red-700 w-full flex items-center justify-center'>
                <button>Deletar</button>
            </Link>
          </div>
        </>
        ) : (<></>)  
      }

    </div>
  )
}

export default CardProdutos

