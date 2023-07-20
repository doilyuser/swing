import { Button } from './FancyButton'

export function Button({ name }: Button) {
  return (
    <>
      <button className="group relative my-3 h-12 w-48 overflow-hidden rounded-full bg-swing-grey text-base shadow">
        <span className="relative text-swing-black transition-all duration-300 group-hover:text-swing-white">
          {name}
        </span>
      </button>
    </>
  )
}
