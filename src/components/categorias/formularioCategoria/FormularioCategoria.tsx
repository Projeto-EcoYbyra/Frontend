import { ChangeEvent, useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';
import { atualizar, buscar, cadastrar } from '../../../services/Service';
import Categoria from '../../../models/Categoria';
import { toastAlerta } from '../../../utils/toastAlerta';


function FormularioCategoria() {
    const [categoria, setCategoria] = useState<Categoria>({} as Categoria);
  
    let navigate = useNavigate();
  
    const { id } = useParams<{ id: string }>();
  
    const { usuario, handleLogout } = useContext(AuthContext);
    const token = usuario.token;
  
    async function buscarPorId(id: string) {
      await buscar(`/categoria/${id}`, setCategoria, {
        headers: {
          Authorization: token,
        },
      });
    }
  
    useEffect(() => {
      if (id !== undefined) {
        buscarPorId(id)
      }
    }, [id])
  
    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
      setCategoria({
        ...categoria,
        [e.target.name]: e.target.value
      })
  
      console.log(JSON.stringify(categoria))
    }
  
    async function gerarNovaCategoria(e: ChangeEvent<HTMLFormElement>) {
      e.preventDefault()
  
      if (id !== undefined) {
        try {
          await atualizar(`/categoria`, categoria, setCategoria, {
            headers: {
              'Authorization': token
            }
          })
  
          toastAlerta('Categoria atualizada com sucesso', 'sucesso')
          retornar()
  
        } catch (error: any) {
          if (error.toString().includes('403')) {
            toastAlerta('O token expirou, favor logar novamente', 'info')
            handleLogout()
          } else {
            toastAlerta('Erro ao atualizar a Categoria', 'erro')
          }
  
        }
  
      } else {
        try {
          await cadastrar(`/categoria`, categoria, setCategoria, {
            headers: {
              'Authorization': token
            }
          })
  
          toastAlerta('Categoria cadastrada com sucesso', 'sucesso')
  
        } catch (error: any) {
          if (error.toString().includes('403')) {
            toastAlerta('O token expirou, favor logar novamente', 'info')
            handleLogout()
          } else {
            toastAlerta('Erro ao cadastrado a Categoria', 'erro')
          }
        }
      }
  
      retornar()
    }
  
    function retornar() {
      navigate("/categoria")
    }
  
    useEffect(() => {
      if (token === '') {
        toastAlerta('Você precisa estar logado', 'info');
        navigate('/login');
      }
    }, [token]);
  
    return (
      <div className="container flex flex-col items-center justify-center mx-auto">
        <h1 className="text-4xl text-center my-8">
          {id === undefined ? 'Cadastre um nova categoria' : 'Editar categoria'}
        </h1>
  
        <form className="w-1/2 flex flex-col gap-4" onSubmit={gerarNovaCategoria}>
        <div className="flex flex-col gap-2">
            <label htmlFor="categoria">Nome da categoria</label>
            <input
              type="text"
              placeholder="Nome"
              name='categoria'
              className="border-2 border-slate-700 rounded p-2"
              value={categoria.categoria}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="descricao">Descrição da categoria</label>
            <input
              type="text"
              placeholder="Descrição"
              name='descricao'
              className="border-2 border-slate-700 rounded p-2"
              value={categoria.descricao}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />
          </div>
          <button
            className="mb-4 rounded disabled:bg-slate-200 bg-lime-700 text-lime-100 hover:bg-lime-300 hover:text-black font-bold w-1/2 mx-auto block py-2"
            type="submit"
          >
            {id === undefined ? 'Cadastrar' : 'Editar'}
          </button>
        </form>
      </div>
    );
  }
  
  export default FormularioCategoria;