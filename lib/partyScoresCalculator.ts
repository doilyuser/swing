import { DataState } from '@/models/DataState'
import { partyStances } from './partyStances'

export function partyScoresCalculator(state: DataState) {
  //map through party scores in state
  return state.partyScores.map((partyScore) => {
    let newPartyScore = 0
    //loop through question answers in state
    for (let i = 0; i < state.answers.length; i++) {
      let answer = state.answers[i].answer
      if (answer !== null) {
        //convert answer to percentage
        answer = answer * 20
        //get party stance percentage that matches party and question
        const stance = partyStances[i].stances.find(
          (el) => el.party === partyScore.partyName,
        )!.stance
        //check stance percentage against answer percentage
        if (answer !== null) {
          //strong match within 10%
          if (answer <= stance + 10 && answer >= stance - 10) {
            newPartyScore += 5
          }
          // weak match within 20%
          else if (answer <= stance + 20 && answer >= stance - 20) {
            newPartyScore += 2
          }
        }
      }
    }
    //return new partyScore object with updated score for each party
    return { ...partyScore, score: newPartyScore }
  })
}
