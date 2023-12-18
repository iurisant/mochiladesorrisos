import React, { useState } from 'react';
import Logo from "../assets/logo.svg";
import { FaBars } from "react-icons/fa";

export default function TopBar() {
  const [showSideBar, setShowSideBar] = useState(false);

  return (
    <nav className=" w-full px-10 py-3 flex fixed z-[100] justify-center border-b bg-white">
      <div className="flex justify-between items-center w-full max-w-7xl">
        <a href='/#' className='flex items-center gap-4'>
          <img src={Logo} alt="" width={48} height={48} />
          <div >
            <h1 className='text-xs'>Editora & Gráfica</h1>
            <h1 className=' text-sm font-semibold'>Mochila de Sorrisos</h1>
          </div>
        </a>
        <ul className="flex gap-4 max-md:hidden">
          <li>
            <a href="#AboutUs" className='font-semibold text-lg hover:text-sky-600'>Sobre nós</a>
          </li>
          <li>
            <a href="#Modules" className='font-semibold text-lg hover:text-sky-600'>Livros</a>
          </li>
          <li>
            <a href="#Include" className='font-semibold text-lg hover:text-sky-600'>Inclusão</a>
          </li>
          <li>
            <a href="#Products" className='font-semibold text-lg hover:text-sky-600'>Produtos</a>
          </li>
        </ul>
        <FaBars className="md:hidden cursor-pointer" size={24}
          onClick={() => { setShowSideBar(!showSideBar) }} />
      </div>
      {(showSideBar) && (
        <div className="w-3/4 h-full fixed right-0 top-[72px] bg-white border-l md:hidden">
          <div className="flex flex-col ">
            <a href="#AboutUs" className="px-6 border-t py-3" onClick={() => { setShowSideBar(!showSideBar) }}>Sobre nós</a>
            <a href="#Modules" className="px-6 border-t py-3" onClick={() => { setShowSideBar(!showSideBar) }}>Livros</a>
            <a href="#Include" className="px-6 border-t py-3" onClick={() => { setShowSideBar(!showSideBar) }}>Inclusão</a>
            <a href="#Products" className="px-6 border-t py-3" onClick={() => { setShowSideBar(!showSideBar) }}>Produtos</a>
          </div>
        </div>
      )}
    </nav>

  )
}