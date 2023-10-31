import { Link } from "react-router-dom";
import Categoria from "../../../models/Categoria";
import { useContext } from 'react'
import { AuthContext } from '../../../contexts/AuthContext';

interface CardCategoriaProps{
    categoria: Categoria
}

function CardCategoria({categoria}: CardCategoriaProps) {
  const { usuario } = useContext(AuthContext)
  const isAdmin:boolean = usuario.nome === 'Administrador' ? true : false
    return (
        <>
        <div className='border-2 border-lime-900 flex flex-col rounded-2xl overflow-hidden justify-between'>
        <header className='py-2 px-6 bg-lime-800 text-lime-100 font-bold text-2xl'>Categoria</header>
        <p className='p-8 text-center text-3xl bg-lime-100 h-full'>{categoria.categoria}</p>
        <div className="border border-lime-900 "></div>
        <p className='text-black bg-lime-100 w-full flex items-center justify-center'>
          Descrição: {categoria.descricao}
        </p>
        {isAdmin === true ? (
        <>
          <div className="flex">
          <Link to={`/editarCategoria/${categoria.id}`} className='w-full text-black bg-lime-300 hover:bg-lime-700 flex items-center justify-center py-2'>
            <button>Editar</button>
          </Link>
          <Link to={`/deletarCategoria/${categoria.id}`} className='text-slate-100 bg-red-400 hover:bg-red-700 w-full flex items-center justify-center'>
            <button>Deletar</button>
          </Link>
        </div>
        </>
        ) : (<></>)  
      }
        
      </div>
        </>
    )
  }

    export default CardCategoria