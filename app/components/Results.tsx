import { ResultsStats } from './ResultsStats'
import { Title } from './Title'

export function Results() {
  return (
    <>
      {/* Here is where we can make the heights responsive */}
      {/* This height should be like... 30%? */}
      <div>
        <Title
          title={'Results'}
          content={'Some stuff that explains or something I dunno'}
        />
      </div>
      {/* This height should be like... 60%? */}
      <div className="flex flex-col items-center mb-10 bg-white rounded-lg w-72 pb-80">
        <ResultsStats />
      </div>
    </>
  )
}
