// import { fingerPaint } from '../layout'
import { Finger_Paint } from 'next/font/google'

const fingerPaint = Finger_Paint({ subsets: ['latin'], weight: ['400'] })

export function Title() {
  return (
    <div className="flex flex-col items-center">
      <h1
        className={`${fingerPaint.className} text-5xl md:text-6xl xl:text-7xl 2xl:text-8xl`}
      >
        Swing
      </h1>
      <p>By Loulan</p>
    </div>
  )
}
