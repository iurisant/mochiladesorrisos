export default function Book({ url, title, description }) {
  return (
    <div className='w-full flex md:flex-row flex-col items-center justify-center 
    my-10 py-10 gap-10 md:gap-20 shadow-md rounded-3xl border bg-white'>
      <img src={url} alt={title} width={300} />
      <div className='flex !flex-col md:items-start items-center gap-10 w-2/3 md:w-1/2'>
        <h1 className="text-2xl font-semibold">{title}</h1>
        <p className='text-justify'>{description}</p>
        <a href="https://wa.me/557184589094"
          target="_blank" rel="noopener noreferrer"
          className='bg-sky-600 hover:bg-sky-700 text-white font-semibold py-2 px-10 rounded'
        >Saiba Mais</a>
      </div>
    </div>
  )
}