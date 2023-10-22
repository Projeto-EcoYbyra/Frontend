import React from 'react';
import './App.css';

import Navbar from './components/navBar/NavBar';
import Footer from './components/footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/login/Login';
import Cadastro from './pages/cadastro/Cadastro';
import Home from './pages/home/Home';
import { AuthProvider } from './contexts/AuthContext';
import SobreNos from './pages/sobreNos/SobreNos';              
import ListaCategoria from './components/categorias/listaCategoria/ListaCategoria';
import FormularioCategoria from './components/categorias/formularioCategoria/FormularioCategoria';
import DeletarCategoria from './components/categorias/deletarCategoria/DeletarCategoria';
import ListaProdutos from './components/produto/listaProdutos/ListaProdutos';
import DeletarProdutos from './components/produto/deletarProdutos/DeletarProdutos';
import FormularioProdutos from './components/produto/formularioProdutos/FormularioProdutos';
import Carrinho from './pages/carrinho/Carrinho';
import Perfil from './pages/perfil/Perfil';



function App() {
  return (
    <>
    <AuthProvider>
        <BrowserRouter>
          <Navbar />
          <div className='min-h-[80vh]'>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/login" element={<Login />} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/home" element={<Home />} />
              <Route path="/SobreNos" element={<SobreNos />} />
              <Route path="/categoria" element={<ListaCategoria />} />
              <Route path="/cadastroCategoria" element={<FormularioCategoria />} />
              <Route path="/deletarCategoria/:id" element={<DeletarCategoria />} />
              <Route path="/editarCategoria/:id" element={<FormularioCategoria />} />
              <Route path="/produto" element={<ListaProdutos />} />
              <Route path="/cadastroCategoria" element={<FormularioCategoria />} />
              <Route path="/deletarProduto/:id" element={<DeletarProdutos />} />
              <Route path="/editarProduto/:id" element={<FormularioProdutos />} />
              <Route path="/editarProduto/:id" element={<FormularioProdutos />} />
              <Route path="/carrinho" element={<Carrinho />} />
              <Route path="/perfil" element={<Perfil />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
        </AuthProvider>
    </>
  );
}
export default App;