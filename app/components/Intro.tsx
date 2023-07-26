import Image from 'next/image'
import { Button } from './Button'
import { FancyButton } from './FancyButton'
import { Icons } from './Icons'
import Link from 'next/link'

export function Intro() {
  return (
    <div className="flex h-full flex-col items-center rounded-lg bg-swing-white">
      <div className="relative w-full rounded-lg bg-swing-grey">
        <Icons />
      </div>
      <div className="relative flex h-full w-full">
        <div className="absolute -top-20 left-0 right-0 m-auto w-5/6 rounded-lg bg-swing-white p-4 shadow-2xl">
          <p>Swing voter? No problem.</p>
          <p>
            Finish this quiz to quickly assess which party&apos;s policies best
            align with your values.
          </p>
        </div>
      </div>
      <div className="relative h-full">
        <div className="absolute left-1/2 -translate-x-1/2 transform">
          <div className="flex">
            {/* sm: -top-10 or something???*/}
            <Link href={`/question/1`}>
              <FancyButton name="Get Started" />
            </Link>
            <Link href={'/'}>
              <Button name="Vote Today" />
            </Link>
            <Link href={'/'}>
              <Button name="More Info" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
