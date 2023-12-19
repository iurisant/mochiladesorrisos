export default function ModalLoading() {
  return (
    <div className='bg-white fixed z-[500] w-[100vw] h-[100vh] flex flex-col items-center justify-center gap-3'>
      <div className=' w-16 h-16 border-[8px] rounded-full border-sky-600 border-t-white animate-spin' />
      <p>Carregando...</p>
    </div>
  )
}