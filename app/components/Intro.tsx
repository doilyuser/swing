import Image from 'next/image'
import { Button } from './Button'
import { FancyButton } from './FancyButton'
import { Icons } from './Icons'
import Link from 'next/link'

export function Intro() {
  return (
    <>
      <div className="relative rounded-lg h-72 w-72 bg-swing-grey">
        <Icons />
        <div className="absolute w-64 p-4 space-y-2 transform -translate-x-1/2 rounded-lg shadow-2xl left-1/2 top-48 h-fit bg-swing-white">
          <p>Swing voter? No problem.</p>
          <p>
            Finish this quiz to quickly assess which party&apos;s policies best
            align with your values.
          </p>
          <div className="absolute space-y-3 transform -translate-x-1/2 -bottom-48 left-1/2">
            <Link href={`/question/1`}>
              <FancyButton name="Get Started" />
            </Link>
            <Button name="Vote Today" />
            <Button name="More Info" />
          </div>
        </div>
      </div>
    </>
  )
}
