export default function Badge({ url, title, description }) {
  return (
    <div className="flex flex-col items-center justify-center gap-5 max-w-[350px]">
      <img src={url} alt={title} width={128} />
      <h1 className="text-2xl font-semibold ">
        {title}
      </h1>
      <p className=' text-center'>{description}</p>
    </div>
  )
}