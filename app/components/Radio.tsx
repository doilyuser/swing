export type Options = {
  negative: string
  neutral?: string
  positive: string
}

export function Radio(options: Options) {
  return (
    <div className="flex justify-evenly">
      <div className="flex flex-col items-center">
        <p>{options.negative}</p>
        <input type="radio" />
      </div>
      <div className="flex flex-col items-center">
        <br />
        <input type="radio" />
      </div>
      <div className="flex flex-col items-center">
        <p>{options.neutral ? options.neutral : <br />}</p>
        <input type="radio" />
      </div>
      <div className="flex flex-col items-center">
        <br />
        <input type="radio" />
      </div>
      <div className="flex flex-col items-center">
        <p>{options.positive}</p>
        <input type="radio" />
      </div>
    </div>
  )
}
