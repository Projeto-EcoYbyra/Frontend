import './SobreNos.css';

function SobreNos() {
    return (
        <><div>
            
        </div>
            <section className="bg-lime-100 dark:bg-gray-900">
                <div className="mx-auto max-w-screen-sm text-justify mb-8 lg:mb-16">
                <h2 className="text-center mt-4 mb-4 text-4xl tracking-tight font-extrabold text-lime-900 dark:text-white">Sobre Nós</h2>
                <p className="font-normal text-gray-800 lg:mb-6 sm:text-xl dark:text-gray-400">
                    A EcoYbyrá é uma empresa fictícia dedicada à criação de soluções em conformidade com os Objetivos de Desenvolvimento Sustentável (ODS) estabelecidos pela ONU,
                    com foco no tema 17 - Parcerias e Meios de Implementação. 
                    Dessa forma, desenvolvemos uma plataforma de e-commerce inovadora que incentiva a adoção de práticas 
                    sustentáveis e visa fortalecer parceria com pequenos produtores, comunidades e instituições que apoiam e 
                    praticam o desenvolvimento da conscientização sustentável e do compartilhamento de recursos.
                </p>
                <p className="font-normal text-gray-800 lg:mb-6 sm:text-xl dark:text-gray-400">
                <h3 className='font-bold  text-lime-800 mb-2'>Catálogo Abrangente</h3>
                    A EcoYbyrá oferece uma ampla gama de produtos que são fornecidos por pequenos produtores e comunidades locais, 
                    sendo desde sementes orgânicas, suprimentos para hortas urbanas e fertilizantes naturais até 
                    ferramentas de jardim de alta qualidade utilizando materiais sustentáveis e métodos de produção tradicionais.
                </p>
                <p className="font-normal text-gray-800 lg:mb-16 sm:text-xl dark:text-gray-400">
                <h3 className='font-bold  text-lime-800 mb-2'>Seleção Criteriosa</h3>    
                    Cada produto disponível na plataforma é cuidadosamente selecionado com base em critérios de sustentabilidade, qualidade e eficácia. 
                    A ênfase é dada a produtos que minimizam o impacto ambiental.
                </p>
                </div> 
            </section>   

                    {/* sessão de recado para os produtores e clientes */}
            <section className='bg-lime-100 dark:bg-gray-900 flex'>
                    <div className='mx-auto max-w-screen-sm text-justify mb-8 lg:mb-16'>
                        <div className='border-b-4 border-lime-900 pl-2 pr-6'>
                        <h2 className='font-bold italic text-center text-lime-800 mb-2'>Ei, você, pequeno produtor ou artesão!</h2>
                        <p className="font-normal text-gray-800 lg:mb-2 sm:text-lg dark:text-gray-400">    
                        Se você é um produtor ou artesão apaixonado pela sustentabilidade, que cria produtos inovadores 
                        feitos com materiais sustentáveis e que demonstrem um compromisso genuíno com a preservação 
                        do meio ambiente, este espaço é para você, portanto, sinta-se a vontade para divulgar e vender seus produtos. 
                        </p>
                        <p className="font-normal text-gray-800 lg:mb-6 sm:text-lg dark:text-gray-400"> 
                        Acreditamos que juntos podemos criar um impacto positivo no mundo ao oferecer alternativas
                        sustentáveis para os consumidores.
                        </p> 
                        </div>
                        <div className='pl-2 pr-6'>
                        <h3 className='font-bold italic text-center text-lime-800 mt-4 mb-2'>Ei, você, consumidor consciente!</h3>
                        <p className="font-normal  text-gray-800 lg:mb-2 sm:text-lg dark:text-gray-400">    
                        Se você busca uma forma de fazer compras que esteja alinhada com seus valores ambientais e de saúde, 
                        você está no lugar certo!
                        </p>
                        <p className="font-normal text-gray-800 lg:mb-2 sm:text-lg dark:text-gray-400">
                        Nossa seleção cuidadosamente curada oferece uma variedade de opções, todos provenientes de fontes sustentáveis e orgânicas.
                        </p>
                        <p className="font-normal text-gray-800 lg:mb-2 sm:text-lg dark:text-gray-400">
                        Ao escolher comprar conosco, você está investindo em um futuro mais verde e saudável para o nosso planeta
                        e para as gerações futuras.
                        </p> 
                        </div>
                    </div>
            </section>   

            <section className="bg-lime-100 dark:bg-gray-900">
                {/* Div que fala sobre a equipe */}

                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-8 lg:px-6 ">
                    <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
                    
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-lime-900 dark:text-white">Nosso Time</h2>
                        <p className="font-normal text-lime-800 lg:mb-16 sm:text-xl dark:text-gray-400">Nosso time é composto por profissionais formados pela Generation Brasil. Somos desenvolvedores fullstack apaixonados pela mudança e acreditamos na transformação do mundo através da tecnologia.</p>
                    </div>

                    {/* Div colaborador Guilheme Martins */}

                    <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
                        <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-800">
                            <a href="#">
                                <img className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src="https://drive.google.com/uc?export=view&id=1CukwnjFKbVsZCo1QbPJtRWBnbwNuI4HN" alt="Guilherme Foto" />
                            </a>
                            <div className="p-5">
                                <h3 className="text-xl font-bold tracking-tight text-lime-900 dark:text-white">
                                    <a>GUILHERME MARTINS</a>
                                </h3>
                                <span className="text-gray-800 dark:text-gray-400">Desenvolvedor Fullstack Java</span>
                                <p className="mt-3 mb-4 font-light text-gray-800 dark:text-gray-400">O único lugar onde o sucesso vem antes do trabalho é no dicionário</p>
                                <ul className="display: inline-flex space-x-4 sm:mt-0">
                                    <li>
                                        <a target='_blank' href="https://www.linkedin.com/in/guilherme-martinsneto/" className="text-gray-800 hover:text-gray-900 dark:hover:text-white">
                                            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 15 15">
                                                <path fill-rule="evenodd" d="M7.979 5v1.586a3.5 3.5 0 0 1 3.082-1.574C14.3 5.012 15 7.03 15 9.655V15h-3v-4.738c0-1.13-.229-2.584-1.995-2.584-1.713 0-2.005 1.23-2.005 2.5V15H5.009V5h2.97ZM3 2.487a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" clip-rule="evenodd" />
                                                <path d="M3 5.012H0V15h3V5.012Z" />
                                            </svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a target='_blank' href="https://github.com/gui-neto" className="text-gray-800 hover:text-gray-900 dark:hover:text-white">
                                            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd" />
                                            </svg>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Div colaborador Matheus Moraes */}

                        <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-800">
                            <a href="#">
                                <img className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src="https://drive.google.com/uc?export=view&id=1c-P5xMnpFCZwRBXZPu5CKaLtHIJJEkPm" alt="Matheus Foto" />
                            </a>
                            <div className="p-5">
                                <h3 className="text-xl font-bold tracking-tight text-lime-900 dark:text-white">
                                    <a>MATHEUS MORAES</a>
                                </h3>
                                <span className="text-gray-800 dark:text-gray-400">Desenvolvedor Fullstack Java</span>
                                <p className="mt-3 mb-4 font-light text-gray-800 dark:text-gray-400">Seja você a mudança que você quer ver no mundo</p>
                                <ul className="display: inline-flex space-x-4 sm:mt-0">
                                    <li>
                                        <a target='_blank' href="https://www.linkedin.com/in/matheus-s-a-moraes/" className="text-gray-800 hover:text-gray-900 dark:hover:text-white">
                                            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 15 15">
                                                <path fill-rule="evenodd" d="M7.979 5v1.586a3.5 3.5 0 0 1 3.082-1.574C14.3 5.012 15 7.03 15 9.655V15h-3v-4.738c0-1.13-.229-2.584-1.995-2.584-1.713 0-2.005 1.23-2.005 2.5V15H5.009V5h2.97ZM3 2.487a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" clip-rule="evenodd" />
                                                <path d="M3 5.012H0V15h3V5.012Z" />
                                            </svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a target='_blank' href="https://github.com/MatheusMoraes10" className="text-gray-800 hover:text-gray-900 dark:hover:text-white">
                                            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd" />
                                            </svg>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Div colaboradora Nathany Morais */}

                        <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-800">
                            <a href="#">
                                <img className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src="https://drive.google.com/uc?export=view&id=1CaFw_DTmKKU4L97oL3jd2QyGMyuHyYfP" alt="Nathany Foto" />
                            </a>
                            <div className="p-5">
                                <h3 className="text-xl font-bold tracking-tight text-lime-900 dark:text-white">
                                    <a>NATHANY MORAIS</a>
                                </h3>
                                <span className="text-gray-800 dark:text-gray-400">Desenvolvedora Fullstack Java</span>
                                <p className="mt-3 mb-4 font-light text-gray-800 dark:text-gray-400">A sua vida e o seu mundo mudam quando você muda
                                </p>
                                <ul className="display: inline-flex space-x-4 sm:mt-0">
                                    <li>
                                        <a target='_blank' href="https://www.linkedin.com/in/nathany-k-morais/" className="text-gray-800 hover:text-gray-900 dark:hover:text-white">
                                            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 15 15">
                                                <path fill-rule="evenodd" d="M7.979 5v1.586a3.5 3.5 0 0 1 3.082-1.574C14.3 5.012 15 7.03 15 9.655V15h-3v-4.738c0-1.13-.229-2.584-1.995-2.584-1.713 0-2.005 1.23-2.005 2.5V15H5.009V5h2.97ZM3 2.487a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" clip-rule="evenodd" />
                                                <path d="M3 5.012H0V15h3V5.012Z" />
                                            </svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a target='_blank' href="https://github.com/NathanyMorais" className="text-gray-800 hover:text-gray-900 dark:hover:text-white">
                                            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd" />
                                            </svg>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Div Colaborador Pedro Moreira */}

                        <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-800">
                            <a href="#">
                                <img className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src="https://drive.google.com/uc?export=view&id=1TB4ipohSQw3zhOMWp8PSQi_mV7KsZjsW" alt="Pedro Foto" />
                            </a>
                            <div className="p-5">
                                <h3 className="text-xl font-bold tracking-tight text-lime-900 dark:text-white">
                                    <a>PEDRO MOREIRA</a>
                                </h3>
                                <span className="text-gray-800 dark:text-gray-400">Desenvolvedor Fullstack Java</span>
                                <p className="mt-3 mb-4 font-light text-gray-800 dark:text-gray-400">Aprenda com os seus erros e siga crescendo
                                </p>
                                <ul className="display: inline-flex space-x-4 sm:mt-0">
                                    <li>
                                        <a target='_blank' href="https://www.linkedin.com/in/ph-moreira/" className="text-gray-800 hover:text-gray-900 dark:hover:text-white">
                                            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 15 15">
                                                <path fill-rule="evenodd" d="M7.979 5v1.586a3.5 3.5 0 0 1 3.082-1.574C14.3 5.012 15 7.03 15 9.655V15h-3v-4.738c0-1.13-.229-2.584-1.995-2.584-1.713 0-2.005 1.23-2.005 2.5V15H5.009V5h2.97ZM3 2.487a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" clip-rule="evenodd" />
                                                <path d="M3 5.012H0V15h3V5.012Z" />
                                            </svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a target='_blank' href="https://github.com/pedrohenrique096" className="text-gray-800 hover:text-gray-900 dark:hover:text-white">
                                            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd" />
                                            </svg>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Div Colaboradora Priscila Igarashi */}

                        <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-800">
                            <a href="#">
                                <img className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src="https://drive.google.com/uc?export=view&id=1Mw9Z_fakn58zaAhNSANd4wgolQLyI9m7" alt="Priscila Foto" />
                            </a>
                            <div className="p-5">
                                <h3 className="text-xl font-bold tracking-tight text-lime-900 dark:text-white">
                                    <a>PRISCILA IGARASHI</a>
                                </h3>
                                <span className="text-gray-800 dark:text-gray-400">Desenvolvedora Fullstack Java</span>
                                <p className="mt-3 mb-4 font-light text-gray-800 dark:text-gray-400">Se quer ir rápido vá sozinho, se quer ir longe vá em grupo
                                </p>
                                <ul className="display: inline-flex space-x-4 sm:mt-0">
                                    <li>
                                        <a target='_blank' href="https://www.linkedin.com/in/igarashipriscila/" className="text-gray-800 hover:text-gray-900 dark:hover:text-white">
                                            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 15 15">
                                                <path fill-rule="evenodd" d="M7.979 5v1.586a3.5 3.5 0 0 1 3.082-1.574C14.3 5.012 15 7.03 15 9.655V15h-3v-4.738c0-1.13-.229-2.584-1.995-2.584-1.713 0-2.005 1.23-2.005 2.5V15H5.009V5h2.97ZM3 2.487a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" clip-rule="evenodd" />
                                                <path d="M3 5.012H0V15h3V5.012Z" />
                                            </svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a target='_blank' href="https://github.com/prrrri" className="text-gray-800 hover:text-gray-900 dark:hover:text-white">
                                            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd" />
                                            </svg>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Div colaborador Richard Campos */}

                        <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-800">
                            <a href="#">
                                <img className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src="https://drive.google.com/uc?export=view&id=11-4P3VaseiT2GyLgt9y3wfYhakutPm2v" alt="Richard Foto" />
                            </a>
                            <div className="p-5">
                                <h3 className="text-xl font-bold tracking-tight text-lime-900 dark:text-white">
                                    <a>RICHARD CAMPOS</a>
                                </h3>
                                <span className="text-gray-800 dark:text-gray-400">Desenvolvedor Fullstack Java</span>
                                <p className="mt-3 mb-4 font-light text-gray-800 dark:text-gray-400">É em meio a dificuldade que se encontra a oportunidade
                                </p>
                                <ul className="display: inline-flex space-x-4 sm:mt-0">
                                    <li>
                                        <a target='_blank' href="https://www.linkedin.com/in/richard-rcampos/" className="text-gray-800 hover:text-gray-900 dark:hover:text-white">
                                            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 15 15">
                                                <path fill-rule="evenodd" d="M7.979 5v1.586a3.5 3.5 0 0 1 3.082-1.574C14.3 5.012 15 7.03 15 9.655V15h-3v-4.738c0-1.13-.229-2.584-1.995-2.584-1.713 0-2.005 1.23-2.005 2.5V15H5.009V5h2.97ZM3 2.487a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" clip-rule="evenodd" />
                                                <path d="M3 5.012H0V15h3V5.012Z" />
                                            </svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a target='_blank' href="https://github.com/kvrah" className="text-gray-800 hover:text-gray-900 dark:hover:text-white">
                                            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd" />
                                            </svg>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section></>
    )
}
export default SobreNos;