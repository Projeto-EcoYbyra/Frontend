import { Link, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import logofolha from '../../assets/folhaLogo.jpg'
import { toastAlerta } from '../../utils/toastAlerta'
import { AuthContext } from '../../contexts/AuthContext'
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { ShoppingCartIcon } from '@heroicons/react/20/solid'

// Categorias que aparecem no Navbar o endereço do <login to =""> tem que ser cadastrado no link 
const navigation = [
  { name: 'Home', href: '#', link: 'Home', current: true },
  { name: 'Produtos', href: '#', link: 'Produto', current: false },
  { name: 'Categorias', href: '#', link: 'Categoria', current: false },
  { name: 'Cadastrar Categoria', href: '#', link: 'cadastroCategoria', current: false },
  { name: 'Cadastrar', href: '#', link: 'cadastro', current: false },
  { name: 'Sobre Nos', href: '#', link: 'SobreNos', current: false },
]
// /Catergorias que aparecem no Navbar

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}
function Navbar() {
  let navigate = useNavigate()

  const { usuario, handleLogout, quantidadeItens } = useContext(AuthContext)

  function logout() {
    handleLogout()
    toastAlerta('Usuário deslogado com sucesso', 'sucesso')
    navigate('/login')
  }

  let navbarComponent  //variavel usada no conteúdo sobre renderização condicional

  if (usuario.token !== "") {
    navbarComponent = (

      <>
        <Disclosure as="nav" className="bg-gray-800">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                  <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                    {/* Menu Mobille botão*/}
                    <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                      <span className="absolute -inset-0.5" />
                      <span className="sr-only">Abrir Menu Principal</span>
                      {open ? (
                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                      )}
                    </Disclosure.Button>
                  </div>

                  {/* Logo e nome EcoYbbyra */}
                  <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                    <div className="flex flex-shrink-0 items-center">
                      <img
                        className="h-8 w-auto"
                        src={logofolha}
                        alt="EcoYbira"
                      />
                      <Link to='/home' className='hover:underline'>
                      <span className='text-white text-2x1 font-bold uppercase ml-3 invisible sm:visible'>EcoYbira</span>
                      </Link>                      
                    </div>
                    {/* /fim Logo e nome EcoYbbyra */}

                    {/* Mapa dos botões para desktop */}
                    <div className="hidden sm:ml-6 sm:block">
                      <div className="flex space-x-4">
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className={classNames(
                              item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                              'rounded-md px-3 py-2 text-sm font-medium'
                            )}
                            aria-current={item.current ? 'page' : undefined}
                          >
                            {/* Função que faz ir para o botão do clique correspondente */}
                            <Link to={item.link} className='hover:underline'>{item.name}</Link>
                          </a>
                        ))}
                      </div>
                    </div>
                    {/* /Fim Mapa dos botões para desktop */}

                  </div>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                    {/* Carrinho */}
                    <Link to='/carrinho' className='hover:underline'>
                      <button
                        type="button"
                        className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 mr-2"
                      >
                        <span className="absolute -inset-1.5" />
                        <span className="sr-only">Carrinho</span>
                        <ShoppingCartIcon className="h-8 w-8" aria-hidden="true" />
                        <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-[#03A678] border-2 border-white rounded-full -top-2 -right-2 dark:border-white dark:bg-[#014040]">{quantidadeItens}</div>
                      </button>
                    </Link>
                    {/* /Carrinho */}

                    {/* Menu do Usuário */}
                    <Menu as="div" className="relative ml-3">
                      <div>
                        <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                          <span className="absolute -inset-1.5" />
                          <span className="sr-only">Abrir menu do usuário</span>
                          <img
                            className="h-8 w-8 rounded-full"
                            // Foto do cliente
                            src={usuario.foto}
                            alt="Foto Cliente"
                          />
                        </Menu.Button>
                      </div>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        {/* Itens do menu que abre ao clicar no usuário */}
                        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <Menu.Item>
                            {({ active }) => (
                              <Link to='/perfil' className='hover:underline'>
                                <a
                                  href="#"
                                  className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                >
                                  Meu Perfil
                                </a>
                              </Link>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                              >
                                Settings
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <Link to='' onClick={logout} className='hover:underline'>
                                <a
                                  href="#"
                                  className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                >
                                  Sair
                                </a>
                              </Link>
                            )}
                          </Menu.Item>
                        </Menu.Items>
                        {/* /Itens do menu que abre ao clicar no usuário */}

                      </Transition>
                    </Menu>
                  </div>
                </div>
              </div>
              
              {/* Mapa dos botões para Mobille */}
              <Disclosure.Panel className="sm:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'block rounded-md px-3 py-2 text-base font-medium'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {/* Função que faz ir para o botão do clique correspondente */}
                      <Link to={item.link} className='hover:underline'>{item.name}</Link>
                    </Disclosure.Button>
                  ))}
                </div>
                {/* Fim Mapa dos botões para Mobille */}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </>

    )
  }else{
    const navigation = [
      { name: 'Home', href: '#', link: 'Home', current: true },
      { name: 'Produtos', href: '#', link: 'Produto', current: false },
      { name: 'Categorias', href: '#', link: 'Categoria', current: false },
      { name: 'Cadastrar Categoria', href: '#', link: 'cadastroCategoria', current: false },
      { name: 'Cadastrar', href: '#', link: 'cadastro', current: false },
      { name: 'Sobre Nos', href: '#', link: 'SobreNos', current: false },
    ]
    navbarComponent = (
    <Disclosure as="nav" className="bg-gray-800">
    {({ open }) => (
      <>
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* Menu Mobille botão*/}
              <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Abrir Menu Principal</span>
                {open ? (
                  <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                )}
              </Disclosure.Button>
            </div>

            {/* Logo e nome EcoYbbyra */}
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center">
                <img
                  className="h-8 w-auto"
                  src={logofolha}
                  alt="EcoYbira"
                />
                <Link to='/home' className='hover:underline'>
                <span className='text-white text-2x1 font-bold uppercase ml-3 invisible sm:visible'>EcoYbira</span>
                </Link>                      
              </div>
              {/* /fim Logo e nome EcoYbbyra */}

              {/* Mapa dos botões para desktop */}
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'rounded-md px-3 py-2 text-sm font-medium'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {/* Função que faz ir para o botão do clique correspondente */}
                      <Link to={item.link} className='hover:underline'>{item.name}</Link>
                    </a>
                  ))}
                </div>
              </div>
              {/* /Fim Mapa dos botões para desktop */}

            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              {/* Carrinho */}
              <Link to='/carrinho' className='hover:underline'>
                <button
                  type="button"
                  className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 mr-2"
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">Carrinho</span>
                  <ShoppingCartIcon className="h-8 w-8" aria-hidden="true" />
                  <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-[#03A678] border-2 border-white rounded-full -top-2 -right-2 dark:border-white dark:bg-[#014040]">{quantidadeItens}</div>
                </button>
              </Link>
              {/* /Carrinho */}

              {/* Menu do Usuário */}
              <Menu as="div" className="relative ml-3">
                <div>
                  <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">Abrir menu do usuário</span>
                    <img
                      className="h-8 w-8 rounded-full"
                      // Foto do cliente
                      src={usuario.foto}
                      alt="Foto Cliente"
                    />
                  </Menu.Button>
                </div>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  {/* Itens do menu que abre ao clicar no usuário */}
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <Menu.Item>
                      {({ active }) => (
                        <Link to='/perfil' className='hover:underline'>
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Meu Perfil
                          </a>
                        </Link>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                        >
                          Settings
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <Link to='' onClick={logout} className='hover:underline'>
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Sair
                          </a>
                        </Link>
                      )}
                    </Menu.Item>
                  </Menu.Items>
                  {/* /Itens do menu que abre ao clicar no usuário */}

                </Transition>
              </Menu>
            </div>
          </div>
        </div>
        
        {/* Mapa dos botões para Mobille */}
        <Disclosure.Panel className="sm:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2">
            {navigation.map((item) => (
              <Disclosure.Button
                key={item.name}
                as="a"
                href={item.href}
                className={classNames(
                  item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                  'block rounded-md px-3 py-2 text-base font-medium'
                )}
                aria-current={item.current ? 'page' : undefined}
              >
                {/* Função que faz ir para o botão do clique correspondente */}
                <Link to={item.link} className='hover:underline'>{item.name}</Link>
              </Disclosure.Button>
            ))}
          </div>
          {/* Fim Mapa dos botões para Mobille */}
        </Disclosure.Panel>
      </>
    )}
  </Disclosure>

)
    
  }

  return (
    <>
      {navbarComponent}
    </>
  )
}

export default Navbar