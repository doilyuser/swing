import { Options } from './Options'

export interface Question {
  id: number
  englishQuestion: string
  englishOptions: Options
  teReoQuestion: string
  teReoOptions: Options
}
