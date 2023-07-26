import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import { DataState } from '@/models/DataState'
import { partyScoreCalculator } from '@/lib/partyScoreCalculator'

interface Actions {
  setAnswer: (id: number, answer: number, importance?: number) => void
  setScore: (id: number, score: number) => void
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
    { partyName: 'Green', score: 50 },
    { partyName: 'National', score: 100 },
    { partyName: 'Labour', score: 0 },
    { partyName: 'TPM', score: 0 },
    { partyName: 'ACT', score: 0 },
    { partyName: 'TEST', score: 0 },
  ],
}

const useDataStore = create(
  immer<DataState & Actions>((set) => ({
    ...initialDataState,
    setAnswer: (id, answer, importance?) => {
      set((state) => {
        if (importance) {
          state.answers[id - 1].importance = importance
        }
        state.answers[id - 1].answer = answer
      })
    },
    setScore: (id, score) => {
      set((state) => {
        const calculatedScore = partyScoreCalculator(id, score)
      })
    },
  })),
)

export default useDataStore
