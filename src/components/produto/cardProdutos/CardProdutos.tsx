import { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Produto from '../../../models/Produto'
import { AuthContext } from '../../../contexts/AuthContext';

interface CardProdutoProps {
  prod: Produto
  noCarrinho?: boolean;
}

function CardProdutos({ prod}: CardProdutoProps) {
  const [valor, setValor] = useState(prod.id);

  useEffect(() => {
      setValor(prod.id)
  }, [prod.id]);

  const { adicionarProduto } = useContext(AuthContext)

  return (
    <div className='border flex flex-col rounded-md overflow-hidden justify-between'>
      <div>
        <div className="flex bg-lime-300 items-center gap-4">
          <img src={prod.foto} className='rounded-e-sm' alt="" />
        </div>
        <div className='p-4 '>
          <h4 className='text-lg font-semibold uppercase'>{prod.nome}</h4>
          <p>{prod.descricao}</p>
          <p className="mb-3 text-lg font-bold text-black dark:text-black">R$ {new Intl.NumberFormat('pt-BR', {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                        }).format(prod.preco)}</p>

                          <>
                            <div className='mt-2 flex flex-col items-center'>
                              <button className="items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#03A678] transition-all duration-300 ease-in-out rounded-lg hover:bg-[#014040] focus:outline-none dark:bg-verde_claro2 dark:hover:bg-white dark:hover:text-black"
                                        onClick={() => {
                                            adicionarProduto(prod)
                                            setValor(valor - 1);
                                        }}>
                                        Adicionar 🛒
                              </button>
                            </div>
                          </>               
        </div>
      </div>
      <div className="flex">
      <Link to={`/editarProduto/${prod.id}`} className='w-full text-black bg-lime-300 hover:bg-lime-700 flex items-center justify-center py-2'>
          <button>Editar</button>
      </Link>
      <Link to={`/deletarProduto/${prod.id}`} className='text-white bg-red-400 hover:bg-red-700 w-full flex items-center justify-center'>
          <button>Deletar</button>
        </Link>
      </div>
    </div>
  )
}

export default CardProdutos
