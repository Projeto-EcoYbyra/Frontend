import React from 'react'
import { Link } from 'react-router-dom'
import Produto from '../../../models/Produto'


interface CardProdutoProps {
  prod: Produto
}


function CardProdutos({prod}: CardProdutoProps) {
  return (
    <div className=' border flex flex-col rounded-md overflow-hidden justify-between'>
      <div>
        <div className="flex bg-indigo-300 items-center gap-4">
          <img src={prod.foto} className='rounded-e-sm' alt="" />
        </div>
        <div className='p-4 '>
          <h4 className='text-lg font-semibold uppercase'>{prod.nome}</h4>
          <p>{prod.descricao}</p>
          <p className="mb-3 font-bold text-black dark:text-black">R$ {new Intl.NumberFormat('pt-BR', {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                        }).format(prod.preco)}</p>
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
