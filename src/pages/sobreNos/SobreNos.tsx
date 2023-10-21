import React from 'react';
import './SobreNos.css';


function SobreNos() {
    return (
        <><div>
            <p>
                O projeto consiste em uma plataforma de e-commerce inovadora que incentiva a adoção de práticas sustentáveis e visa fortalecer parceria com instituições, ONG’s e empresas que apoiam e praticam o desenvolvimento da conscientização sustentável e do compartilhamento de recursos.

                Catálogo Abrangente:

                O EcoYbyrá oferece uma ampla gama de produtos, desde sementes orgânicas, suprimentos para hortas urbanas e fertilizantes naturais até ferramentas de jardim de alta qualidade feito por comunidades locais, utilizando materiais sustentáveis e métodos de produção tradicionais.

                Seleção Criteriosa:

                Cada produto disponível na plataforma é cuidadosamente selecionado com base em critérios de sustentabilidade, qualidade e eficácia. A ênfase é dada a produtos que minimizam o impacto ambiental.

                Planos de Assinatura Mensal:

                Os clientes têm a opção de escolher entre diferentes planos de assinatura mensal que oferecem uma seleção personalizada de produtos ecológicos e sustentáveis, sendo parte dos lucros destinados para apoiar projetos que promovem o desenvolvimento sustentável, como a implementação de hortas comunitárias e a educação ambiental.

            </p>

        </div>
            <section className="bg-white dark:bg-gray-900">

                {/* Div que fala sobre a equipe */}

                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
                    <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Nosso Time</h2>
                        <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">Projeto desenvolvido com muito carinho e dedicação pelo nosso time</p>
                    </div>

                    {/* Div colaborador Guilheme Martins */}

                    <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
                        <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                                <img className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src="https://drive.google.com/uc?export=view&id=1CukwnjFKbVsZCo1QbPJtRWBnbwNuI4HN" alt="Guilherme Foto" />
                            </a>
                            <div className="p-5">
                                <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    <a href="#">GUILHERME MARTINS</a>
                                </h3>
                                <span className="text-gray-500 dark:text-gray-400">PIO ou Ex técnico Informática</span>
                                <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">A sua vida e o seu mundo mudam quando você muda</p>
                                <ul className="display: inline-flex space-x-4 sm:mt-0">
                                    <li>
                                        <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 15 15">
                                                <path fill-rule="evenodd" d="M7.979 5v1.586a3.5 3.5 0 0 1 3.082-1.574C14.3 5.012 15 7.03 15 9.655V15h-3v-4.738c0-1.13-.229-2.584-1.995-2.584-1.713 0-2.005 1.23-2.005 2.5V15H5.009V5h2.97ZM3 2.487a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" clip-rule="evenodd" />
                                                <path d="M3 5.012H0V15h3V5.012Z" />
                                            </svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd" />
                                            </svg>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Div colaborador Matheus Moraes */}

                        <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                                <img className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src="https://drive.google.com/uc?export=view&id=1c-P5xMnpFCZwRBXZPu5CKaLtHIJJEkPm" alt="Matheus Foto" />
                            </a>
                            <div className="p-5">
                                <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    <a href="#">MATHEUS MORAES</a>
                                </h3>
                                <span className="text-gray-500 dark:text-gray-400">PIO ou ex Analista de suporte</span>
                                <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">A sua vida e o seu mundo mudam quando você muda</p>
                                <ul className="display: inline-flex space-x-4 sm:mt-0">
                                    <li>
                                        <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 15 15">
                                                <path fill-rule="evenodd" d="M7.979 5v1.586a3.5 3.5 0 0 1 3.082-1.574C14.3 5.012 15 7.03 15 9.655V15h-3v-4.738c0-1.13-.229-2.584-1.995-2.584-1.713 0-2.005 1.23-2.005 2.5V15H5.009V5h2.97ZM3 2.487a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" clip-rule="evenodd" />
                                                <path d="M3 5.012H0V15h3V5.012Z" />
                                            </svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd" />
                                            </svg>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Div colaboradora Nathany Morais */}

                        <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                                <img className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src="https://drive.google.com/uc?export=view&id=1CaFw_DTmKKU4L97oL3jd2QyGMyuHyYfP" alt="Nathany Foto" />
                            </a>
                            <div className="p-5">
                                <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    <a href="#">NATHANY MORAIS</a>
                                </h3>
                                <span className="text-gray-500 dark:text-gray-400">Senior Front-end Developer</span>
                                <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">A sua vida e o seu mundo mudam quando você muda
                                </p>
                                <ul className="display: inline-flex space-x-4 sm:mt-0">
                                    <li>
                                        <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 15 15">
                                                <path fill-rule="evenodd" d="M7.979 5v1.586a3.5 3.5 0 0 1 3.082-1.574C14.3 5.012 15 7.03 15 9.655V15h-3v-4.738c0-1.13-.229-2.584-1.995-2.584-1.713 0-2.005 1.23-2.005 2.5V15H5.009V5h2.97ZM3 2.487a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" clip-rule="evenodd" />
                                                <path d="M3 5.012H0V15h3V5.012Z" />
                                            </svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd" />
                                            </svg>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Div Colaborador Pedro Moreira */}

                        <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                                <img className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src="https://drive.google.com/uc?export=view&id=1TB4ipohSQw3zhOMWp8PSQi_mV7KsZjsW" alt="Pedro Foto" />
                            </a>
                            <div className="p-5">
                                <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    <a href="#">PEDRO MOREIRA</a>
                                </h3>
                                <span className="text-gray-500 dark:text-gray-400">Senior Front-end Developer</span>
                                <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">A sua vida e o seu mundo mudam quando você muda
                                </p>
                                <ul className="display: inline-flex space-x-4 sm:mt-0">
                                    <li>
                                        <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 15 15">
                                                <path fill-rule="evenodd" d="M7.979 5v1.586a3.5 3.5 0 0 1 3.082-1.574C14.3 5.012 15 7.03 15 9.655V15h-3v-4.738c0-1.13-.229-2.584-1.995-2.584-1.713 0-2.005 1.23-2.005 2.5V15H5.009V5h2.97ZM3 2.487a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" clip-rule="evenodd" />
                                                <path d="M3 5.012H0V15h3V5.012Z" />
                                            </svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd" />
                                            </svg>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Div Colaboradora Priscila Igarashi */}

                        <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                                <img className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src="https://drive.google.com/uc?export=view&id=1Mw9Z_fakn58zaAhNSANd4wgolQLyI9m7" alt="Priscila Foto" />
                            </a>
                            <div className="p-5">
                                <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    <a href="#">PRISCILA IGARASHI</a>
                                </h3>
                                <span className="text-gray-500 dark:text-gray-400">Senior Front-end Developer</span>
                                <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">A sua vida e o seu mundo mudam quando você muda
                                </p>
                                <ul className="display: inline-flex space-x-4 sm:mt-0">
                                    <li>
                                        <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 15 15">
                                                <path fill-rule="evenodd" d="M7.979 5v1.586a3.5 3.5 0 0 1 3.082-1.574C14.3 5.012 15 7.03 15 9.655V15h-3v-4.738c0-1.13-.229-2.584-1.995-2.584-1.713 0-2.005 1.23-2.005 2.5V15H5.009V5h2.97ZM3 2.487a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" clip-rule="evenodd" />
                                                <path d="M3 5.012H0V15h3V5.012Z" />
                                            </svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd" />
                                            </svg>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Div colaborador Richard Campos */}

                        <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                                <img className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src="https://drive.google.com/uc?export=view&id=11-4P3VaseiT2GyLgt9y3wfYhakutPm2v" alt="Richard Foto" />
                            </a>
                            <div className="p-5">
                                <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    <a href="#">RICHARD CAMPOS</a>
                                </h3>
                                <span className="text-gray-500 dark:text-gray-400">Senior Front-end Developer</span>
                                <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">A sua vida e o seu mundo mudam quando você muda
                                </p>
                                <ul className="display: inline-flex space-x-4 sm:mt-0">
                                    <li>
                                        <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 15 15">
                                                <path fill-rule="evenodd" d="M7.979 5v1.586a3.5 3.5 0 0 1 3.082-1.574C14.3 5.012 15 7.03 15 9.655V15h-3v-4.738c0-1.13-.229-2.584-1.995-2.584-1.713 0-2.005 1.23-2.005 2.5V15H5.009V5h2.97ZM3 2.487a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" clip-rule="evenodd" />
                                                <path d="M3 5.012H0V15h3V5.012Z" />
                                            </svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
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