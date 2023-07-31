import { DataState } from '@/models/DataState'
import { partyStances } from './partyStances'

export function partyScoresCalculator(state: DataState) {
  const quizLength = state.answers.length
  // these numbers could be manipulated to effect final score simulating whether the user actually cares
  let range = 20
  let importance = 100
  return state.partyScores.map((partyScore) => {
    let answered = 0
    let newPartyScore = 0
    for (let i = 0; i < quizLength; i++) {
      const answer = state.answers[i].answer
      const stance = partyStances[i].stances.find(
        (el) => el.party === partyScore.partyName,
      )!.stance
      if (answer !== null) {
        answered += 1
        const difference = Math.abs(stance - answer)
        difference < range
          ? (newPartyScore += (importance - difference) / answered)
          : null
      }
    }
    return { ...partyScore, score: newPartyScore }
  })
}
