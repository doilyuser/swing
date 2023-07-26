import Image from 'next/image'
import { Button } from './Button'
import { FancyButton } from './FancyButton'
import { Icons } from './Icons'
import Link from 'next/link'

export function Intro() {
  return (
    <div className="flex h-full flex-col items-center rounded-lg bg-swing-blue">
      <div className="relative w-full rounded-lg bg-swing-grey">
        <Icons />
      </div>
      <div className="relative flex h-full w-full items-center">
        <div className="absolute -top-14 left-0 right-0 m-auto w-5/6 rounded-lg bg-swing-white shadow-2xl">
          <p>Swing voter? No problem.</p>
          <p>
            Finish this quiz to quickly assess which party&apos;s policies best
            align with your values.
          </p>
        </div>
      </div>
      <div className="flex h-full flex-col items-center">
        <Link href={`/question/1`}>
          <FancyButton name="Get Started" />
        </Link>
        <Button name="Vote Today" />
        <Button name="More Info" />
      </div>
    </div>
  )
}
