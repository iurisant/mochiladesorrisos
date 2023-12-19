import React from 'react';
import { collection, onSnapshot } from "firebase/firestore";
import db from "../firebase";
import Logo from "../assets/logo.svg";
import DashboardCarousel from '../components/DashboardCarousel';
import DashboardModules from '../components/DashboardModules';
import DashboardProducts from '../components/DashboardProducts';
import { signOut, getAuth } from "firebase/auth"

export default function Dashboard() {
  const [Banner, setBanner] = React.useState([]);
  const [Livros, setLivros] = React.useState([]);
  const [Produtos, setProdutos] = React.useState([])
  const auth = getAuth()

  React.useEffect(() => {
    const getBanners = async () => {
      onSnapshot(collection(db, "banner"), (doc) => {
        const updatedData = [];
        doc.forEach((doc) => {
          updatedData.push({ id: doc.id, ...doc.data() });
        });
        setBanner(updatedData);
      });
    }

    const getLivros = async () => {
      onSnapshot(collection(db, "livros"), (doc) => {
        const updatedData = [];
        doc.forEach((doc) => {
          updatedData.push({ id: doc.id, ...doc.data() });
        });
        setLivros(updatedData);
      });
    }

    const getProdutos = async () => {
      onSnapshot(collection(db, "produtos"), (doc) => {
        const updatedData = [];
        doc.forEach((doc) => {
          updatedData.push({ id: doc.id, ...doc.data() });
        });
        setProdutos(updatedData);
      });
    }
    getBanners();
    getLivros();
    getProdutos();
  }, [])

  async function handleSignOut() {
    try {
      await signOut(auth);
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <main className='bg-slate-100 pt-[73px] flex flex-col items-center'>
      <nav className=" w-full px-10 py-3 flex fixed top-0 z-[100] justify-center border-b bg-white">
        <div className="flex justify-between items-center w-full max-w-7xl">
          <a href='/admin/#' className='flex items-center gap-4'>
            <img src={Logo} alt="" width={48} height={48} />
            <div >
              <h1 className='text-xs line-clamp-1'>Editora & Gráfica</h1>
              <h1 className=' text-sm font-semibold line-clamp-1'>Mochila de Sorrisos</h1>
            </div>
          </a>
          <button onClick={() => { handleSignOut() }}>Sair</button>
        </div>
      </nav>
      <DashboardCarousel data={Banner} />
      <DashboardModules data={Livros} />
      <DashboardProducts data={Produtos} />
    </main>
  )
}