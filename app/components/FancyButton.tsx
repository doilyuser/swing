export type Button = {
  name: string
}

export function FancyButton({ name }: Button) {
  return (
    <>
      <button className="group relative my-3 h-12 w-48 overflow-hidden rounded-full bg-swing-white text-base shadow">
        <div className="absolute inset-0 w-3 bg-swing-red transition-all duration-300 ease-out group-hover:w-full"></div>
        <span className="relative text-swing-black group-hover:text-swing-white">
          {name}
        </span>
      </button>
    </>
  )
}
