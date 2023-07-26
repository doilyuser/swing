import { Intro } from './Intro'
import { Title } from './Title'

export function Splash() {
  return (
    <>
      {/* Here is where we can make the heights responsive */}
      {/* This height should be like... 30%? */}
      <div>
        <Title title={'Swing'} content={'By Loulan'} />
      </div>
      {/* This height should be like... 60%? */}
      <div className="flex flex-col items-center mb-10 bg-white rounded-lg w-72 pb-80">
        <Intro />
      </div>
    </>
  )
}
