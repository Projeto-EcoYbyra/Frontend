import { useContext, useState } from 'react'
import { AuthContext } from '../../contexts/AuthContext'
import CardProdutos from '../../components/produto/cardProdutos/CardProdutos'
import { useNavigate } from 'react-router-dom'


function Carrinho() {
    let navigate = useNavigate();

    function continuarComprando() {
        navigate("/produto")
    }

    const { itens, limparCart, comprar } = useContext(AuthContext)

    function Comprar() {
        comprar()
        navigate("/perfil")
    }

    const subtotal = itens.reduce((total, itens) => {
        return total + (itens.preco * itens.id);
    }, 0)

    const [selectedPayment, setSelectedPayment] = useState<string | null>(null);

    return (
        <>
            {/* Div Geral com todos elementos e novos produtos que forem adicionados */}
            <div className='mt-20 subtotal-container dark:bg-black mb-10 flex justify-center'>
                
                {/* Div que limita o background dos conteudos em máximo 384px classe:max-w-sm */}
                <div className='max-w-sm flex flex-col bg-lime-100 p-5 border-lime-900 border-2 rounded-2xl'>
                    <div className='cards-container max rounded-2xl'>
                        {itens.map((item: any) => (
                            (
                                <div className=''>
                                    <p className='dark:text-white bg-lime-300 mb-3 border-2 rounded-2xl font-bold '>
                                        {item.nome}:
                                        R$ {new Intl.NumberFormat('pt-BR', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        }).format(item.preco)}
                                    </p>
                                </div>
                            )
                        ))}
                    </div>
                    {/* Div do subtotal até finalizar compra */}
                    <div className='subtotal rounded-lg'>
                        <h1 className='font-bold text-xl dark:text-white'>Subtotal: R$ {new Intl.NumberFormat('pt-BR', {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                        }).format(subtotal)}</h1>
                        <div className='btn-subtotal mt-3 p-2 '>
                            <button className={`px-3 py-2 text-sm font-medium text-center text-white bg-red-800 transition-all duration-300 ease-in-out rounded-lg hover:bg-red-600 focus:outline-none ${subtotal > 0 ? 'dark:bg-red-500 dark:hover:bg-white dark:hover:text-black' : 'opacity-50 cursor-not-allowed'}`}
                                onClick={limparCart}
                                disabled={subtotal === 0}> Limpar carrinho
                            </button>
                            <button className='ml-3 px-3 py-2 text-sm font-medium text-center text-white bg-[#03A678] transition-all duration-300 ease-in-out rounded-lg hover:bg-[#014040] focus:outline-none dark:bg-verde_claro2 dark:hover:bg-white dark:hover:text-black'
                                onClick={continuarComprando}>Continuar comprando
                            </button>
                        </div>
                        <h1 className='font-bold text-lg dark:text-white mt-5 ml-5'>Selecione a forma de pagamento: </h1>
                        {/* div das formas de pagamento */}
                        <div className='pt-4 flex flex-inline  p-1 justify-center gap-10 border-2 border-lime-300 rounded-2xl'>
                            <div className="mb-2 payment-option transition-transform duration-300 ease-in-out transform hover:scale-110 dark:bg-verde_escuro dark:border-gray-700">
                                <div className='static itens-center'>
                                    <input
                                        type="radio"
                                        id="pagamento verde"
                                        name="payment"
                                        value="pagamento verde"
                                        onChange={() => setSelectedPayment('pagamento verde')} />
                                    <label htmlFor="pagamento verde" className='ml-5'><p className='font-bold text-lg dark:text-white'>Pagamento Verde 🌳</p></label>
                                </div>
                            </div>
                            <div className="mb-2 payment-option transition-transform duration-300 ease-in-out transform hover:scale-110 dark:bg-verde_escuro dark:border-gray-700">
                                <div className='static itens-center'>
                                    <input
                                        type="radio"
                                        id="pix"
                                        name="payment"
                                        value="pix"
                                        className='radio-button'
                                        onChange={() => setSelectedPayment('pix')} />
                                    <label htmlFor="pix" className='ml-5'><p className='font-bold text-lg dark:text-white'>PIX ❖</p></label>
                                </div>
                            </div>
                            <div className="mb-2 payment-option transition-transform duration-300 ease-in-out transform hover:scale-110 dark:bg-verde_escuro dark:border-gray-700">
                                <div className='static itens-center'>
                                    <input
                                        type="radio"
                                        id="cartao"
                                        name="payment"
                                        value="cartao"
                                        onChange={() => setSelectedPayment('cartao')} />
                                    <label htmlFor="cartão" className='ml-5'><p className='font-bold text-lg dark:text-white'>Cartão 💳</p></label>
                                </div>
                            </div>
                        </div>
                        {/* div botão finalizar */}
                        <div className='flex justify-center mb-3 '>
                            <button
                                className={`px-3 mt-5 py-2 text-sm font-bold text-center text-black bg-lime-300 transition-all duration-300 ease-in-out rounded-lg hover:bg-lime-700 focus:outline-none  ${selectedPayment && subtotal > 0 ? 'dark:bg-verde_claro2 dark:hover:bg-white dark:hover:text-black' : 'opacity-50 cursor-not-allowed'}`}
                                onClick={Comprar}
                                disabled={subtotal === 0 || !selectedPayment}> Finalizar Compra </button>
                        </div>
                    </div>
                </div>
                {/* Final Div Subtotal até finalizar compra */}
            </div>
        </>
    )
}

export default Carrinho