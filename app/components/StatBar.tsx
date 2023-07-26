interface StatBarProps {
  percentage: number
  partyName: string
}

export function StatBar({ percentage, partyName }: StatBarProps) {
  return (
    <div className="my-2 rounded-full bg-swing-blue">
      <div
        className="flex items-center px-4 py-1 rounded-full bg-swing-grey"
        style={{ width: `${percentage}%` }}
      >
        {`${partyName}: ${percentage}%`}
      </div>
    </div>
  )
}
