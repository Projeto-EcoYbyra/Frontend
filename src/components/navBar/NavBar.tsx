import { Link, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import logofolha from '../../assets/folhaLogo.jpg'
import { toastAlerta } from '../../utils/toastAlerta'
import { AuthContext } from '../../contexts/AuthContext'

function Navbar() {
  let navigate = useNavigate()

  const { usuario, handleLogout, quantidadeItens } = useContext(AuthContext)

  function logout() {
      handleLogout()
      toastAlerta('Usuário deslogado com sucesso', 'sucesso')
      navigate('/login')
  }

  let navbarComponent  //variavel usada no conteúdo sobre renderização condicional
  
  if(usuario.token !== "") {
    navbarComponent = (

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
              <Link to='/carrinho' className='hover:underline'>
                <button type="button" className="relative inline-flex items-center px-5 py-2.5 text-white bg-gradient-to-br from-[#92D94D] to-[#03A678] hover:bg-gradient-to-bl focus:ring-4 transition duration-300 ease-out focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-6 py-3 text-center">
                  Carrinho
                  <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-[#03A678] border-2 border-white rounded-full -top-2 -right-2 dark:border-white dark:bg-[#014040]">{quantidadeItens}</div>
                </button>
              </Link>
              <Link to='/perfil' className='hover:underline'>Perfil</Link>
              <Link to='' onClick={logout} className='hover:underline'>Sair</Link>
            </div>
          </div>
        </div>
  )
}

return (
  <>
  {navbarComponent}
</>
)
}

export default Navbar