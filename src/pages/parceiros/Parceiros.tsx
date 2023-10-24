function Parceiros() {

  return (
    <>
     

      <section className="bg-lime-100 dark:bg-gray-900 mt-20">
                
                {/* Div que fala sobre os parceiros */}

                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-8 lg:px-6">
                    <div className="mx-auto max-w-screen-sm mb-8 lg:mb-16 border-b-4 border-lime-900">

                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-lime-900 dark:text-white border-b-4 border-lime-900 pb-5">Nossos Parceiros</h2>
                        <p className="font-normal text-lime-800 lg:mb-6 sm:text-xl dark:text-gray-400 text-justify">
                        Com grande entusiasmo, apresentamos nossos estimados parceiros no universo da sustentabilidade! 
                        </p>
                        <p className="font-normal text-lime-800 lg:mb-6 sm:text-xl dark:text-gray-400 text-justify">
                        É um privilégio contar com colaboradores comprometidos com a preservação do nosso planeta e o bem-estar das
                        gerações futuras. Juntos, estamos embarcando em uma jornada para promover produtos sustentáveis que não 
                        apenas encantam pelos seus atributos e qualidade, mas também contribuem para um mundo mais equilibrado e 
                        consciente. 
                        </p>
                        <p className="font-normal text-lime-800 mb-10 sm:text-xl dark:text-gray-400 text-justify">
                        Agradecemos por fazerem parte desta missão e estamos ansiosos para trilhar este caminho rumo a um 
                        futuro mais sustentável e responsável.
                        </p>

                    </div>

                    {/* Div cards nossos parceiros */}

                    <div className="grid gap-8 mb-3 md:grid-cols-2">

                        {/* Div parceiro Raízes Livres */}
                        <a className="border-2 rounded-2xl p-1 border-lime-900" href="https://raizes-livres.netlify.app/" target="_blank">
                            <div className="flex flex-col items-center bg-gray-50 shadow dark:bg-gray-800 dark:border-gray-800 sm:grid sm:grid-cols-2 border-2 rounded-2xl border-lime-900">
                                <img className="w-full  sm:h-full rounded-lg sm:rounded-none sm:rounded-l-lg" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Roots_by_cesarpb.jpg/800px-Roots_by_cesarpb.jpg" alt="Raízes Livres" />
                                <div className="p-5">
                                    <h3 className="text-xl font-bold tracking-tight text-lime-900 dark:text-white">
                                        <a>Raízes Livres</a>
                                    </h3>
                                    <span className="text-gray-800 dark:text-gray-400">Descubra nosso compromisso com alimentos sustentáveis</span>
                                    <p className="mt-3 mb-4 font-light text-gray-800 dark:text-gray-400">Plataforma de e-commerce com o propósito de combater a fome e promover a alimentação sustentável.</p>
                                </div>
                            </div>
                        </a>
                        {/* Fim Div parceiro Raízes Livres */}

                    </div>
                </div>
        </section>
    </>
  );
}

export default Parceiros;
