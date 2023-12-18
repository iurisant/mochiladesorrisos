import './App.css';
import React from 'react';
import { collection, onSnapshot } from "firebase/firestore";
import db from "./firebase";
import Carousel from './components/Carousel';
import FAB from './components/FAB';
import TopBar from './components/TopBar';
import AboutUs from './pages/AboutUs';
import Modules from './pages/Modules';
import Footer from './pages/Footer';
import Include from './pages/Include';
import Products from './pages/Products';

function App() {
  const [Banner, setBanner] = React.useState([]);
  const [Livros, setLivros] = React.useState([]);
  const [Produtos, setProdutos] = React.useState([])

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

  return (
    <>
      <main className="overflow-x-hidden">
        <TopBar />
        <section className='mt-[73px]'>
          <Carousel images={Banner} />
          <section id="AboutUs" className="w-full flex flex-col justify-center items-center relative">
            <AboutUs />
          </section>
          <section id="Modules" className="w-full flex flex-col justify-center items-center relative bg-slate-100">
            <Modules dataModules={Livros} />
          </section>
          <section id="Include" className="w-full flex flex-col justify-center items-center">
            <Include />
          </section>
          <section id="Products" className="w-full flex flex-col justify-center items-center bg-slate-100">
            <Products dataProducts={Produtos} />
          </section>
        </section>
        <FAB />
      </main>
      <footer className='bg-sky-600 w-full flex flex-col justify-center items-center relative'>
        <Footer />
      </footer>
    </>
  );
}

export default App;
