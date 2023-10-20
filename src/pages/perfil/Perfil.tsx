import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'
import { buscar } from '../../../src/services/Service';
import { toastAlerta } from '../../utils/toastAlerta'
import loginmao from '../../assets/mao.jpeg'
import Produto from '../../models/Produto'
import ListaProdutos from '../../components/produto/listaProdutos/ListaProdutos';

function Perfil() {
  let navigate = useNavigate()

  const [produtos, setProdutos] = useState<Produto[]>([]);

  const { usuario, handleLogout, itensComprados, pedido} = useContext(AuthContext)
  const token = usuario.token

  async function buscarProdutos() {
    try {
      await buscar('/produtos', setProdutos, {
        headers: {
          Authorization: token,
        },
      });
    } catch (error: any) {
      if (error.toString().includes('403')) {
        toastAlerta('O token expirou, favor logar novamente', 'info')
        handleLogout()
      }
    }
  }

  useEffect(() => {
    buscarProdutos();
  }, [produtos.length]);

  useEffect(() => {
    if (usuario.token === "") {
      toastAlerta('Dados inconsistentes. Verifique as informações de cadastro.', 'erro')
      navigate("/login")
    }
  }, [usuario.token])

  return (
    <div className='container mx-auto mt-4 rounded-2xl overflow-hidden'>
      <img className='w-full h-72 object-cover border-b-8 border-white' src={loginmao} alt="Capa do Perfil" />
      <img src={usuario.foto} alt={`Foto de perfil de ${usuario.nome}`} className='rounded-full w-56 mx-auto mt-[-8rem] border-8 border-white relative z-10' />
      <div className="relative mt-[-6rem] h-72 flex flex-col bg-sky-500 text-white text-2xl items-center justify-center">
        <p>Nome: {usuario.nome} </p>
        <p>Email: {usuario.usuario}</p>
      </div>
          <>
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 text-center dark:text-verde_claro2 text-[2rem] mt-5">Produtos favoritos</h1>
            <h2 className='font-bold tracking-tight text-gray-900 dark:text-verde_claro2 mt-5 text-lg ml-5'>Total de pedidos: {pedido}</h2>
            <div className='flex'>
                {itensComprados
                .filter((item) => item.id > 0)
                .map((item) => (
                  <>
                    <ListaProdutos key={item.id}/>
                  </>
                ))}
            </div>
          </>
    </div>
  )
}

export default Perfil