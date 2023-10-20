import { createContext, ReactNode, useState } from "react"

import UsuarioLogin from "../models/UsuarioLogin"
import { login } from "../services/Service"
import { toastAlerta } from "../utils/toastAlerta"
import Produto from "../models/Produto"

interface AuthContextProps {
    usuario: UsuarioLogin
    handleLogout(): void
    handleLogin(usuario: UsuarioLogin): Promise<void>
    isLoading: boolean
    adicionarProduto: (produto: Produto) => void
    removerProduto: (produtoId: number) => void
    limparCart: () => void
    comprar: () => void
    itens: Produto[]
    quantidadeItens: number
    itensComprados: Produto[]
    pedido: number
}

interface AuthProviderProps {
    children: ReactNode
}

export const AuthContext = createContext({} as AuthContextProps)

export function AuthProvider({ children }: AuthProviderProps) {

    const [usuario, setUsuario] = useState<UsuarioLogin>({
        id: 0,
        nome: "",
        usuario: "",
        senha: "",
        foto: "",
        token: ""
    })

    const [isLoading, setIsLoading] = useState(false)

    async function handleLogin(userLogin: UsuarioLogin) {
        setIsLoading(true)
        try {
            await login(`/usuarios/logar`, userLogin, setUsuario)
            alert("Usuário logado com sucesso")
            setIsLoading(false)

        } catch (error) {
            console.log(error)
            alert("Dados do usuário inconsistentes")
            setIsLoading(false)
        }
    }

    function handleLogout() {
        setUsuario({
            id: 0,
            nome: "",
            usuario: "",
            senha: "",
            foto: "",
            token: ""
        })
    }

       // CÓDIGO DO CARRINHO
       const [itens, setItens] = useState<Produto[]>([])
       const quantidadeItensNoCarrinho = itens.reduce((total, item) => total + item.id, 0);
       const [itensComprados, setItensComprados] = useState<Produto[]>([]);
       const [pedido, setPedido] = useState(0);
   
       function adicionarProduto(produto: Produto) {
           const itemExiste = itens.find((item) => item.id === produto.id);
   
           if(itemExiste) {
               setItens((state) =>
                   state.map((item) =>
                   item.id === produto.id ? { ...item, id: item.id + 1 } : item
                   )
               );
           } else {
               setItens((state) => [...state, { ...produto, id: 1 }]);
           }
           toastAlerta("Produto adicionado ao carrinho", 'sucesso')
       }

   
       function removerProduto(produtoId: number) {
        let itemRemovido = false; // Variável para controlar se um item foi removido
    
        const updateItens = itens.map((item) => {
            if (item.id === produtoId) {
                // Verifica se a id é maior que 1 antes de decrementar
                if (item.id > 1) {
                    itemRemovido = true; // Marca que um item foi removido
                    return { ...item, id: item.id - 1 };
                } else {
                    toastAlerta("O carrinho está vazio", 'info');
                    return item;
                }
            }
            return item;
        });
       
           try {
               setItens(updateItens);
               toastAlerta("Uma unidade do produto foi removida do carrinho", 'sucesso');
           } catch(error:any) {
               console.log(error);
               toastAlerta('Ocorreu um erro ao remover o produto', 'erro');
           }
       }
   
       function comprar() {
           const itensComprados = [...itens];
           setItensComprados(itensComprados)
           toastAlerta("Compra Efetuada com Sucesso", 'sucesso')
           setItens([])
           setPedido(pedido + 1)
       }
   
       function limparCart() {
           toastAlerta("O Carrinho está vazio", 'info')
           setItens([])
       }
   
       return (
           <AuthContext.Provider value={{ adicionarProduto, removerProduto, limparCart, comprar, itens, quantidadeItens: quantidadeItensNoCarrinho, usuario, handleLogin, handleLogout, isLoading, itensComprados, pedido }}>
               {children}
           </AuthContext.Provider>
       )
   }