import { useContext, useEffect, useState } from 'react';
import { Dna } from 'react-loader-spinner';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';
import Produto from '../../../models/Produto';
import { buscar } from '../../../services/Service';
import CardProdutos from '../cardProdutos/CardProdutos';
import { toastAlerta } from '../../../utils/toastAlerta';
import '../cardProdutos/CardProduto.css'
import bannerNutri from '../../../assets/banner_nutrividas.svg'
import bannerEco from '../../../assets/banner_ecobag.svg'
import Carousel from "../../carousel/Carousel";

function ListaProdutos() {
  var slides = [
    `${bannerNutri}`,
    `${bannerEco}`,       
    ]  
  const [produto, setProdutos] = useState<Produto[]>([]);

  let navigate = useNavigate();

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  useEffect(() => {
    if (token === '') {
      toastAlerta('Você precisa estar logado', 'info');
      navigate('/');
    }
  }, [token]);


  async function buscarProdutos() {
    try {
      await buscar('/produto', setProdutos, {
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
  }, [produto.length]);


  return (
    <>
      {produto.length === 0 && (
        <Dna
          visible={true}
          height="200"
          width="200"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper mx-auto"
        />
      )}
            <Carousel autoSlide={true} autoSlideInterval={3000} >
            {
              slides.map( (item) => (
                <img
                  alt="imagem não disponível"
                  src={item}
                  height="50"
                />
              ))
            }
        </Carousel>
      <div className='container mx-auto my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
      
        {produto.map((produto) => (
          <CardProdutos key={produto.id} prod={produto} isPerfil={false}/>
        ))}
      </div>
    </>
  );
}


export default ListaProdutos;
