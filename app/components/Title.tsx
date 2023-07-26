// import { fingerPaint } from '../layout'
import { Finger_Paint } from 'next/font/google'

const fingerPaint = Finger_Paint({ subsets: ['latin'], weight: ['400'] })

interface TitleProps {
  title: string
  content: string
}

export function Title({ title, content }: TitleProps) {
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <h1
        className={`${fingerPaint.className} text-6xl md:text-7xl 2xl:text-8xl`}
      >
        {title}
      </h1>
      <p>{content}</p>
    </div>
  )
}
