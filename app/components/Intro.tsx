import Image from 'next/image'
import { Button } from './Button'
import { FancyButton } from './FancyButton'
import { Icons } from './Icons'
import Link from 'next/link'

export function Intro() {
  return (
    <div className="flex h-full w-full flex-col items-center rounded-lg bg-swing-white">
      <div className="relative w-full rounded-lg bg-swing-grey">
        <Icons />
      </div>
      <div className="w-5/6 -translate-y-10 space-y-3 rounded-lg bg-swing-white p-4 shadow-2xl">
        <p>Swing voter? No problem.</p>
        <p>
          Finish this quiz to quickly assess which party&apos;s policies best
          align with your values.
        </p>
      </div>
      <div className="flex -translate-y-5 flex-col space-y-3">
        <Link href={`/question/1`}>
          <FancyButton name="Get Started" />
        </Link>
        <Link href={'https://vote.nz/'}>
          <Button name="Vote Today" />
        </Link>
        <Link href={'/info'}>
          <Button name="More Info" />
        </Link>
      </div>
    </div>
  )
}
