import Logo from "../assets/logo.svg";
import Instagram from '../assets/instagram.svg';
export default function Footer() {
  const date = new Date();
  return (
    <div className='w-full max-w-[1280px] px-8 pt-16 pb-8 overflow-hidden'>
      <div className='w-full sm:flex justify-between'>
        <div className='text-white'>
          <div className='flex items-center ms:justify-normal justify-center gap-4 mb-4'>
            <img src={Logo} alt="Mochila de Sorrisos Logo" width={64} />
            <div >
              <h1 className=' text-xs'>Editora & Gráfica</h1>
              <h1 className='font-semibold'>Mochila de Sorrisos</h1>
            </div>
          </div>
          <a className='flex items-center ms:justify-normal justify-center gap-3 my-6' href="https://www.instagram.com/mochiladesorrisos/" target="_blank" rel="noopener noreferrer">
            <img src={Instagram} alt="Instagram" width={20} height={20} />
            <p>@mochiladesorrisos</p>
          </a>
        </div>
        <div className='ms:flex md:gap-32 gap-16'>
          <div className='text-white text-center ms:text-start'>
            <h1 className="font-semibold mb-2">Navegação</h1>
            <ul>
              <li><a href="#AboutUs">Sobre nós</a></li>
              <li><a href="#Modules">Livros</a></li>
              <li><a href="#Include">Inclusão</a></li>
              <li><a href="#Products">Produtos</a></li>
            </ul>
          </div>
          <div className='text-white text-center ms:text-start'>
            <h1 className="font-semibold mb-2 mt-8 ms:mt-0">Contato</h1>
            <ul>
              <li><strong>Email:</strong> mochiladesorrisos@gmail.com</li>
              <li><strong>Tel.:</strong> (71) 98458-9094</li>
            </ul>
          </div>
        </div>
      </div>
      <hr className='my-10 border-sky-700' />
      <div className='w-full flex justify-center text-white'>
        <h1>© All Rights Reserved <strong>Mochila de Sorrisos</strong> {date.getFullYear()}</h1>
      </div>
    </div>
  )
}