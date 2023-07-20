import { fingerPaint } from '../layout'

export function Title() {
  return (
    <div className="flex flex-col items-center">
      <h1
        className={`${fingerPaint.className} text-7xl md:text-8xl xl:text-9xl`}
      >
        Swing
      </h1>
      <p>By Loulan</p>
    </div>
  )
}
