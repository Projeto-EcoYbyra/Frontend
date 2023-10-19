import { Link } from 'react-router-dom'
import logofolha from '../../assets/folhaLogo.jpg'
function Navbar() {
 

  return (
    <>
     <div className='w-full bg-lime-800 text-white flex justify-center py-5'>
          <div className="container flex justify-between text-lg pr-5 pl-5">
            <div className='flex flex-shrink-0 items-center'>
            <img src={logofolha} alt="" className='h-14 w-auto' />
            <div className='text-2x1 font-bold uppercase'>Eco Ybyra</div>
            </div>
            <div className='flex gap-6'>
              <Link to='/login' className='hover:underline'>Login</Link>
              <Link to='/home' className='hover:underline'>Home</Link>
              <Link to='/sobreNos' className='hover:underline'>Sobre nós</Link>
              <Link to='/categoria' className='hover:underline'>Categorias</Link>
              <Link to='/cadastroCategoria' className='hover:underline'>Cadastrar Categoria</Link>
              <Link to='/cadastro' className='hover:underline'>Cadastrar</Link>
              <div className='hover:underline'>Perfil</div>
              <div className='hover:underline'>Sair</div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Navbar