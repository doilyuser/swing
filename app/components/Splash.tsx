import { Intro } from './Intro'
import { Title } from './Title'

export function Splash() {
  return (
    <div className="h-full w-11/12 max-w-xl">
      <div className="h-1/6">
        <Title title={'Swing'} content={'By Loulan'} />
      </div>
      <div className="h-3/4 rounded-lg bg-white">
        <Intro />
      </div>
    </div>
  )
}
