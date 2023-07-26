// import { fingerPaint } from '../layout'
import { Finger_Paint } from 'next/font/google'

const fingerPaint = Finger_Paint({ subsets: ['latin'], weight: ['400'] })

interface TitleProps {
  title: string
  content: string
}

export function Title({ title, content }: TitleProps) {
  return (
    <div className="flex flex-col items-center p-10">
      <h1
        className={`${fingerPaint.className} text-6xl md:text-7xl 2xl:text-8xl`}
      >
        {title}
      </h1>
      <p>{content}</p>
    </div>
  )
}
