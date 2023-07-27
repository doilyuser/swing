import { DataState } from '@/models/DataState'
import { partyStances } from './partyStances'

export function partyScoresCalculator(state: DataState) {
  const range = 20
  return state.partyScores.map((partyScore) => {
    // let totalScore = 0
    let newPartyScore = 0
    for (let i = 0; i < state.answers.length; i++) {
      const answer = state.answers[i].answer
      const stance = partyStances[i].stances.find(
        (el) => el.party === partyScore.partyName,
      )!.stance
      if (answer !== null) {
        // We can use this variable if we want to change our percentage based on answered questions
        // totalScore += i * 100

        const difference = Math.abs(stance - answer)
        difference < range ? (newPartyScore += (100 - difference) / 20) : null
      }
    }
    return { ...partyScore, score: newPartyScore }
  })
}
