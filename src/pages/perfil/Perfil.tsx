import { useContext, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'
import loginLogo from '../../assets/closeup-tiro-das-pequenas-folhas-verdes-de-um-arbusto.jpg'
import { toastAlerta } from '../../utils/toastAlerta'
import CardProdutos from '../../components/produto/cardProdutos/CardProdutos'

function Perfil() {

  let navigate = useNavigate()
  const { usuario, itensComprados, pedido} = useContext(AuthContext)
  const isAdmin:boolean = usuario.nome === 'Administrador' ? true : false


  useEffect(() => {
    if (usuario.token === "") {
      toastAlerta('Dados inconsistentes. Verifique as informações de cadastro.', 'erro')
      navigate("/login")
    }
  }, [usuario.token])

  return (
    <div className='container mb-4  mx-auto mt-4 rounded-2xl overflow-hidden'>
      <img className='w-full h-72 object-cover border-b-8 border-white' src={loginLogo} alt="Capa do Perfil" />
      <img src={usuario.foto} alt={`Foto de perfil de ${usuario.nome}`} className='rounded-full w-56 mx-auto mt-[-8rem] border-8 border-white relative z-10' />
      <div className="relative mt-[-6rem] h-72 flex flex-col bg-lime-800 text-lime-100 text-2xl items-center justify-center">
        <p>Nome: {usuario.nome} </p>
        <p>Email: {usuario.usuario}</p>
      </div>
      {
        isAdmin === false ? (
          <>
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 text-center dark:text-verde_claro2 text-[2rem] mt-5">Total de pedidos: {pedido}</h1>
            <h2 className='font-bold tracking-tight text-gray-900 dark:text-verde_claro2 mt-5 text-lg ml-5'>Último pedido</h2>
            <div className='flex'>
                {itensComprados
                .map((item) => (
                  <>
                    <CardProdutos key={item.id} prod={item} isPerfil={true}/>
                  </>
                ))}
            </div>
          </>
        ) : (<></>)
      } 
      
    </div>
  )
}

export default Perfil