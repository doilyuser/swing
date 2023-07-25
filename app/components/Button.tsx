interface ButtonProps {
  name: string
}

export function Button({ name }: ButtonProps) {
  return (
    <>
      <button className="relative w-48 h-12 overflow-hidden text-base rounded-full shadow group bg-swing-grey">
        <span className="relative transition-all duration-300 text-swing-black group-hover:text-swing-white">
          {name}
        </span>
      </button>
    </>
  )
}
