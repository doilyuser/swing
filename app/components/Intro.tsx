import Image from 'next/image'
import { Button } from './Button'
import { FancyButton } from './FancyButton'
import { Icons } from './Icons'

export function Intro() {
  return (
    <>
      <div className="relative h-72 w-72 rounded-lg bg-swing-grey">
        <Icons />
        <div className="absolute left-1/2 top-48 h-fit w-64 -translate-x-1/2 transform space-y-2 rounded-lg bg-swing-white p-4 shadow-2xl">
          <p>Swing voter? No problem.</p>
          <p>
            Finish this quiz to quickly assess which party&apos;s policies best
            align with your values.
          </p>
          <div className="absolute -bottom-48 left-1/2 -translate-x-1/2 transform space-y-3">
            <FancyButton name="Get Started" />
            <Button name="Vote Today" />
            <Button name="More Info" />
          </div>
        </div>
      </div>
    </>
  )
}
