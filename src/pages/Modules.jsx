import React from 'react'
import Book from '../components/Book'
import ImgModules from '../assets/livros.png'
export default function Modules({ dataModules }) {
  return (
    <div className="w-full max-w-[1280px] px-8 py-16 overflow-hidden flex flex-col items-center">
      <div className="xm:grid xm:grid-cols-2 relative z-10
  xm:gap-16 xm:justify-items-center xm:items-center xm">
        <div className="hidden xm:block">
          <img src={ImgModules} alt="Imagem Modulos" className="w-auto h-[512px]" />
        </div>
        <div>
          <h1 className="text-center text-3xl font-semibold pb-8">Livros</h1>
          <p className="text-center text-xl">Os nossos livros são voltados para o ensino infantil, do Grupo 1 até o 1º ano. Eles são estruturados para auxiliar os educadores na condução da aulas e para estimular os alunos na exploração de diversos temas e habilidades. O conteúdo é projetado para ser abrangente e inclusivo, cobrindo áreas como linguagem, matemática, ciências, artes e habilidades sociais. A qualidade do material é de suma importância. Apostilas bem elaboradas são visualmente atraentes e interativas, o que ajuda a manter o interesse da criança. Elas também são projetadas para serem culturalmente relevantes e inclusivas, garantindo que todas as crianças possam se ver representadas e engajadas.</p>
        </div>
      </div>
      <div className='book-reverse mt-20'>
        {dataModules.map((v, k) => (
          <Book
            key={k}
            url={v.url && v.url.includes("https://imgur.com") ?
              v.url.replace("https://imgur.com", "https://i.imgur.com").concat(".png") : v.url}
            title={v.name}
            description={v.description} />
        ))}

      </div>
    </div>
  )
}