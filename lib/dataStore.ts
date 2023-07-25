import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import { DataState } from '@/models/DataState'

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
        console.log(state.answers[id - 1].answer)
        console.table(state.answers)
      })
    },
  })),
)

export default useDataStore
