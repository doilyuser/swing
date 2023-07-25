interface FancyButtonProps {
  name: string
  handleClick?: () => void
}

export function FancyButton({ name, handleClick }: FancyButtonProps) {
  return (
    <>
      <button
        onClick={handleClick}
        className="relative w-48 h-12 overflow-hidden text-base rounded-full shadow group bg-swing-white"
      >
        <div className="absolute inset-0 w-3 transition-all duration-300 ease-out bg-swing-red group-hover:w-full"></div>
        <span className="relative text-swing-black group-hover:text-swing-white">
          {name}
        </span>
      </button>
    </>
  )
}
