import { notFound } from 'next/navigation'

import { QuestionCard } from '@/app/components/QuestionCard'
import { questions } from '@/lib/questions'

export default function Question({ params }: { params: { slug: number } }) {
  const question = questions[params.slug - 1]

  return (
    <main className="flex min-h-screen flex-col items-center">
      {question ? <QuestionCard question={question} /> : notFound()}
    </main>
  )
}
