import { Intro } from './Intro'
import { Title } from './Title'

export function Splash() {
  return (
    <>
      {/* Here is where we can make the heights responsive */}
      <div>
        <Title />
      </div>
      <div className="mb-10 flex w-72 flex-col items-center rounded-lg bg-white pb-80">
        <Intro />
      </div>
    </>
  )
}
