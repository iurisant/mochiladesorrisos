import React from 'react'
import ImgAbout from "../assets/img01.svg";
import Badge from '../components/Badge';
import Missao from "../assets/missao.svg";
import Visao from "../assets/visao.svg";
import Valores from "../assets/valores.svg";

export default function AboutUs() {
  return (
    <div className="w-full max-w-[1280px] px-8 py-16 overflow-hidden flex flex-col items-center">
      <div className="xm:grid xm:grid-cols-2 relative z-10
    xm:gap-16 xm:justify-items-center xm:items-center xm">
        <div>
          <h1 className="text-center text-3xl font-semibold pb-8">Sobre nós</h1>
          <p className="text-center text-xl">A Editora e Gráfica Mochila de Sorriso, é o lugar onde a educação e a inclusão caminham de mãos dadas. Fundada em 19 de outubro de 2019 por Janaína Ferreira Costa e Paulo Rafael Costa, nossa missão é mais do que simplesmente publicar livros, é trazer cor e vida ao aprendizado, tornando-o uma experiência envolvente e acessível para todas as crianças.</p>
          <br />
          <p className="text-center text-xl">Acreditamos que o aprendizado deve ser uma jornada alegre e colorida, portanto, nossas publicações são projetadas para serem não apenas educativas, as também visualmente atraentes, capturando a imaginação e o interesse das crianças desde a primeira página.</p>
        </div>
        <div className="hidden xm:block">
          <img src={ImgAbout} alt="Imagem About Me" className="w-auto h-[512px]" />
        </div>
      </div>
      <div className='badges grid justify-items-center grid-cols-1 md:grid-cols-2 xm:grid-cols-3 gap-20 pt-20
        relative z-30'>
        <Badge
          // cl="flex flex-col items-center justify-center gap-5 max-w-[350px]"
          url={Missao}
          title={"Missão"}
          description={"Tornar o aprendizado uma experiência envolvente e acessível para todas as crianças, com um foco especial na inclusão e diversidade."}
        />
        <Badge
          // cl="flex flex-col items-center justify-center gap-5 max-w-[350px]"
          url={Visao}
          title={"Visão"}
          description={"Ser uma editora líder em educação inclusiva, onde o aprendizado é uma jornada alegre e colorida que captura a imaginação desde a primeira página."}
        />
        <Badge
          // cl="flex flex-col items-center justify-center gap-5 max-w-[350px]"
          url={Valores}
          title={"Valores"}
          description={"Compromisso com a educação inclusiva, expertise em TEA, e excelência gráfica para tornar o aprendizado acessível e envolvente para todos."}
        />
      </div>
    </div>
  )
}