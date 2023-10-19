import React from 'react';
import './Home.css';
import ModalProdutos from '../../components/produto/modalProdutos/ModalProdutos';
import ListaProdutos from '../../components/produto/listaProdutos/ListaProdutos';
import { Link } from "react-router-dom";


function Home() {
    return (
        <>
        <div className="bg-lime-700 flex justify-center">
          <div className='container grid grid-cols-2 text-white'>
            <div className="flex flex-col gap-4 items-center justify-center py-4">
              <h2 className='text-5xl font-bold'>Seja bem vinde!</h2>
              <p className='text-xl'>Plante hoje e colha para sempre!</p>
 
              <div className="flex justify-around gap-4">
              <ModalProdutos />  
              <Link to='/produto'>
                <button className='border rounded px-4 hover:bg-white hover:text-indigo-800'>
                Produtos
                </button>
              </Link>    
              </div>
            </div>
            //COLOCAR UMA IMAGEM AQUI
          </div>
        </div>
        <ListaProdutos />
      </>
    );
}


export default Home;
