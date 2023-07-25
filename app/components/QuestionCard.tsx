'use client'

import { Question } from '@/models/Question'
import { Icons } from './Icons'
import { Radio } from './Radio'
import { FancyButton } from './FancyButton'
import { useState } from 'react'
import Link from 'next/link'
import useDataStore from '@/lib/dataStore'

interface QuestionProps {
  question: Question
}

export function QuestionCard({ question }: QuestionProps) {
  const linkTo = `/question/${question.id + 1}`
  const { setAnswer } = useDataStore()

  const [selectedOption, setSelectedOption] = useState<string>('3')

  const handleAnswer = () => {
    setAnswer(question.id, Number(selectedOption))
  }

  return (
    <div className="flex flex-col items-center mb-10 bg-white rounded-lg w-72 pb-80">
      <div className="relative rounded-lg h-72 w-72 bg-swing-grey">
        <Icons />
        <div className="absolute w-64 p-4 space-y-2 transform -translate-x-1/2 rounded-lg shadow-2xl left-1/2 top-48 h-fit bg-swing-white">
          <p>{question.englishQuestion}</p>
          <p>blah blah blah some context probably</p>
          <div className="absolute space-y-3 transform -translate-x-1/2 -bottom-48 left-1/2">
            <Radio
              options={question.englishOptions}
              selectedOption={selectedOption}
              setSelectedOption={setSelectedOption}
            />
            <Link href={linkTo}>
              <FancyButton name="Next" handleClick={handleAnswer} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
