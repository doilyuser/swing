import { Button } from './Button'
import { FancyButton } from './FancyButton'
import { Icons } from './Icons'

export function Content() {
  return (
    <div className="flex h-full w-72 flex-col items-center rounded-lg bg-white">
      <Icons />
      <FancyButton name="Get Started!" />
      <Button name="Vote Today" />
      <Button name="More Info" />
    </div>
  )
}
