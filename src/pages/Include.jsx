import Includes from "../assets/img02.svg"

export default function Include() {
  return (
    <div className="w-full max-w-[1280px] px-8 py-16 overflow-hidden flex flex-col items-center">
      <div className="xm:grid xm:grid-cols-2 relative z-10
        xm:gap-16 xm:justify-items-center xm:items-center xm">
        <div>
          <h1 className="text-center text-3xl font-semibold mb-8">Inclusão</h1>
          <p className="text-center text-xl">A inclusão escolar é mais do que uma prática pedagógica; é um direito humano fundamental. Ela permite que crianças e adolescentes, independentemente de suas habilidades, origens ou condições, tenham acesso a uma educação de qualidade. A diversidade no ambiente escolar enriquece o processo de aprendizagem, promovendo empatia e respeito mútuo entre os estudantes. Para que a inclusão seja efetiva, é necessário que as escolas estejam preparadas para acolher todos os alunos. Isso envolve desde a formação de professores até a adaptação de infraestruturas e materiais didáticos. Quando a inclusão é bem executada, ela não beneficia apenas os alunos com necessidades especiais, mas toda a comunidade escolar, que aprende a valorizar as diferenças e a trabalhar em conjunto para o bem comum.</p>
        </div>
        <div className="hidden xm:block">
          <img src={Includes} alt="Imagem About Me" className="w-auto h-[512px]" />
        </div>
      </div>
      <div className='relative'>
        <h1 className="relative z-20 text-center text-xl font-semibold max-w-[1024px] w-full mt-20 mb-8 text-sky-600">"Se uma criança não pode aprender da maneira que ensinamos, talvez devêssemos ensinar da maneira que ela aprende." - Ignacio Estrada, educador</h1>
      </div>
    </div>
  )
}