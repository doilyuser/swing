import { QuestionCard } from '@/app/components/QuestionCard'
import { questions } from '@/lib/questions'

export default function Question({ params }: { params: { slug: number } }) {
  const question = questions[params.slug - 1]

  return (
    <main className="flex flex-col items-center min-h-screen">
      {question ? (
        <QuestionCard question={question} />
      ) : (
        <h1>{`WHY ARE YOU HERE`}</h1>
      )}
    </main>
  )
}
