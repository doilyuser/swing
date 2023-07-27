import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import { DataState } from '@/models/DataState'
import { partyScoresCalculator } from './partyScoresCalculator'

interface Actions {
  setAnswer: (id: number, answer: number, importance?: number) => void
}

const initialDataState: DataState = {
  answers: [
    { answer: null, importance: null },
    { answer: null, importance: null },
    { answer: null, importance: null },
    { answer: null, importance: null },
    { answer: null, importance: null },
    { answer: null, importance: null },
    { answer: null, importance: null },
    { answer: null, importance: null },
    { answer: null, importance: null },
    { answer: null, importance: null },
    { answer: null, importance: null },
    { answer: null, importance: null },
    { answer: null, importance: null },
    { answer: null, importance: null },
    { answer: null, importance: null },
    { answer: null, importance: null },
    { answer: null, importance: null },
    { answer: null, importance: null },
    { answer: null, importance: null },
    { answer: null, importance: null },
  ],
  partyScores: [
    { partyName: 'Green', score: 0 },
    { partyName: 'National', score: 0 },
    { partyName: 'Labour', score: 0 },
    { partyName: 'TPM', score: 0 },
    { partyName: 'ACT', score: 0 },
    { partyName: 'TEST', score: 0 },
  ],
}

const useDataStore = create(
  immer<DataState & Actions>((set, get) => ({
    ...initialDataState,
    setAnswer: async (id, answer, importance?) => {
      set((state) => {
        //checks if importance level is there, sets if
        if (importance) {
          state.answers[id - 1].importance = importance
        }

        //changes answer value between 1 - 5
        state.answers[id - 1].answer = answer

        //sets party scores to a percentage based on answers
        state.partyScores = partyScoresCalculator(state)
      })
    },
  })),
)

export default useDataStore
