import { Intro } from './Intro'
import { Title } from './Title'

export function Splash() {
  return (
    <>
      {/* Here is where we can make the heights responsive */}
      {/* This height should be like... 30%? */}
      <div>
        <Title />
      </div>
      {/* This height should be like... 60%? */}
      <div className="mb-10 flex w-72 flex-col items-center rounded-lg bg-white pb-80">
        <Intro />
      </div>
    </>
  )
}
