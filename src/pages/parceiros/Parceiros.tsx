function Parceiros() {

  return (
    <>
      <div>
        {/* Div que fala sobre a equipe */}

                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
                    <div className="mx-auto max-w-screen-sm text-justify mb-8 lg:mb-16">
                    
                        <h2 className="mb-4 text-4xl text-center tracking-tight font-extrabold text-lime-900 dark:text-white">
                            Nossos Parceiros
                        </h2>
                        <p className="font-normal text-lime-800 lg:mb-6 sm:text-xl dark:text-gray-400">
                        Com grande entusiasmo, apresentamos nossos estimados parceiros no universo da sustentabilidade! 
                        </p>
                        <p className="font-normal text-lime-800 lg:mb-6 sm:text-xl dark:text-gray-400">
                        É um privilégio contar com colaboradores comprometidos com a preservação do nosso planeta e o bem-estar das
                        gerações futuras. Juntos, estamos embarcando em uma jornada para promover produtos sustentáveis que não 
                        apenas encantam pelos seus atributos e qualidade, mas também contribuem para um mundo mais equilibrado e 
                        consciente. 
                        </p>
                        <p className="font-normal text-lime-800 lg:mb-16 sm:text-xl dark:text-gray-400">
                        Agradecemos por fazerem parte desta missão e estamos ansiosos para trilhar este caminho rumo a um 
                        futuro mais sustentável e responsável.
                        </p>
                    </div>

                    {/* Div parceiro Raízes Livres */}

                    <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
                        <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-800">
                            <a href="#">
                                <img className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Roots_by_cesarpb.jpg/800px-Roots_by_cesarpb.jpg" alt="Guilherme Foto" />
                            </a>
                            <div className="p-5">
                                <h3 className="text-xl font-bold tracking-tight text-lime-900 dark:text-white">
                                    <a href="https://raizes-livres.netlify.app/" target="_blank">Raízes Livres</a>
                                </h3>
                                <span className="text-gray-800 dark:text-gray-400">Descubra nosso compromisso com alimentos sustentáveis</span>
                                <p className="mt-3 mb-4 font-light text-gray-800 dark:text-gray-400">
                                    Plataforma de e-commerce com o propósito de combater a fome e promover a alimentação sustentável.
                                </p>
                            </div>
                        </div> 
                    </div>
                </div>
      </div>
    </>
  );
}

export default Parceiros;
