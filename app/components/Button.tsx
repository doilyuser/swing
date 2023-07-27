interface ButtonProps {
  name: string
}

export function Button({ name }: ButtonProps) {
  return (
    <>
      <button className="group relative h-12 w-48 overflow-hidden rounded-full bg-swing-grey text-base shadow">
        <span className="relative text-swing-black transition-all duration-300 group-hover:text-swing-white">
          {name}
        </span>
      </button>
    </>
  )
}
