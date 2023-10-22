import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
      <footer className="bg-lime-800">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-4 lg:py-4">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              {/* Logo Clicável */}
              <a href="#" className="flex items-center">
                <img
                  src="https://drive.google.com/uc?export=view&id=1wNh6e17GX5lUaUwU5wuM_Z5ovUm6AB6M"
                  className="h-8 mr-3"
                  alt="EcoYbyra Logo"
                />
                <span className="self-center text-2xl font-semibold whitespace-nowrap text-lime-100">
                  EcoYbyrá
                </span>
              </a>
            </div>
            {/* Div dos Atalhos */}
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <ul className="text-lime-100 font-medium">
                  <li className="mb-2">
                  <Link to='/home'>
                    <a className="hover:underline">
                      Início
                    </a>
                  </Link>
                  </li>
                  <li>
                  <Link to='/sobreNos'>
                    <a className="hover:underline">
                      Sobre Nós
                    </a>
                  </Link>
                  </li>
                </ul>
              </div>
              {/* Div dos Encontre-Nos */}
              <div>
                <ul className="text-lime-100 font-medium">
                  <li className="mb-2">
                    <a
                      href="https://github.com/Projeto-EcoYbyra"
                      className="hover:underline "
                      target="_blank"
                    >
                      Github
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://linktr.ee/ybyraeco"
                      className="hover:underline"
                      target="_blank"
                    >
                      Desenvolvedores
                    </a>
                  </li>
                </ul>
              </div>
              {/* Div da ODS */}
              <div>
                <ul className="text-lime-100 font-medium">
                  <li className="mb-2">
                    <a
                      href="https://brasil.un.org/pt-br/sdgs/17"
                      className="hover:underline"
                      target="_blank"
                    >
                      Link da ONU
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://docs.google.com/document/d/1CKFzRtEGO3TUCIpmdOSqS39NK0DMyhRa9au5PkyoVCM/edit?usp=sharing"
                      className="hover:underline"
                      target="_blank"
                    >
                      Carta ao Leitor
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Linha de Separação */}
          <hr className="my-4 border-lime-100 sm:mx-auto lg:my-4" />

          {/* Div Pai dos Ícones e EcoYbyra Copyright */}
          <div className="sm:flex sm:items-center flex-col-reverse">
            {/* Div do Copyright EcoYbyra */}
            <span className="text-xs text-lime-100 sm:text-center mt-2">
              © 2023{" "}
              <a href="#" className="hover:underline">
                EcoYbyra™
              </a>
            </span>

            {/* Div do Contato e do Github */}
            <div className="flex mt-10 space-x-4 sm:justify-center sm:mt-0">
              {/* Contato */}
              <a
                href="https://linktr.ee/ybyraeco"
                className="text-lime-100 hover:text-lime-100"
                target="_blank"
              >
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M16 0H4a2 2 0 0 0-2 2v1H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4.5a3 3 0 1 1 0 6 3 3 0 0 1 0-6ZM13.929 17H7.071a.5.5 0 0 1-.5-.5 3.935 3.935 0 1 1 7.858 0 .5.5 0 0 1-.5.5Z" />
                </svg>
                <span className="sr-only">Contato</span>
              </a>

              {/* Github */}
              <a
                href="https://github.com/Projeto-EcoYbyra"
                className="text-lime-100 hover:text-lime-100"
                target="_blank"
              >
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span className="sr-only">GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
