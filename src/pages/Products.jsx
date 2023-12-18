import React from 'react'

export default function Products({ dataProducts }) {
  return (
    <div className="w-full max-w-[1280px] px-8 py-16 overflow-hidden flex flex-col items-center">
      <h1 className="text-center text-3xl font-semibold mb-16">Produtos Gráfica</h1>
      <div className='grid gap-8 grid-cols-1 md:grid-cols-2 xm:grid-cols-3 2xl:grid-cols-4'>
        {dataProducts.map((v, k) => (
          <div className="card">
            <div className="content shadow-md">
              <div className="back">
                <img className="max-w-[192px] max-h-[192px]" src={v.url && v.url.includes("https://imgur.com") ?
                  v.url.replace("https://imgur.com", "https://i.imgur.com").concat(".png") : v.url} alt={v.name} />
                <h1 className='max-w-[192px] max-h-[192px] text-center mt-4 font-bold'>{v.name}</h1>
              </div>
              <div className="front">
                <p className='max-w-[192px] max-h-[192px]  text-center my-4 text-zinc-500'>{v.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div >
  )
}