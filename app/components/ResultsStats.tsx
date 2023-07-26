'use client'

import { Icons } from './Icons'
import useDataStore from '@/lib/dataStore'
import { StatBar } from './StatBar'

export function ResultsStats() {
  const { partyScores } = useDataStore()
  const partyScoresForSort = [...partyScores]
  return (
    <>
      <div className="relative rounded-lg h-72 w-72 bg-swing-grey">
        <Icons />
        <div className="absolute w-64 p-4 space-y-2 transform -translate-x-1/2 rounded-lg shadow-2xl left-1/2 top-48 h-fit bg-swing-white">
          <h2>YOUR STATS BRUH</h2>
          {partyScoresForSort ? (
            partyScoresForSort
              .sort((a, b) => b.score - a.score)
              .slice(0, 5)
              .map((partyScore) => {
                return (
                  <StatBar
                    key={partyScore.partyName}
                    percentage={partyScore.score}
                    partyName={partyScore.partyName}
                  />
                )
              })
          ) : (
            <h1>LOADING</h1>
          )}

          <div className="absolute space-y-3 transform -translate-x-1/2 -bottom-48 left-1/2"></div>
        </div>
      </div>
    </>
  )
}
