import { Options } from '@/models/Options'

interface RadioProps {
  options: Options
  selectedOption: string
  setSelectedOption: (value: string) => void
}

export function Radio({
  options,
  selectedOption,
  setSelectedOption,
}: RadioProps) {
  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value)
  }

  return (
    <div className="flex justify-evenly">
      <div className="flex flex-col items-center">
        <p>{options.negative}</p>
        <input
          type="radio"
          value={0}
          checked={selectedOption === '20'}
          onChange={handleOptionChange}
        />
      </div>
      <div className="flex flex-col items-center">
        <br />
        <input
          type="radio"
          value={25}
          checked={selectedOption === '40'}
          onChange={handleOptionChange}
        />
      </div>
      <div className="flex flex-col items-center">
        <p>{options.neutral ? options.neutral : <br />}</p>
        <input
          type="radio"
          value={50}
          checked={selectedOption === '60'}
          onChange={handleOptionChange}
        />
      </div>
      <div className="flex flex-col items-center">
        <br />
        <input
          type="radio"
          value={75}
          checked={selectedOption === '80'}
          onChange={handleOptionChange}
        />
      </div>
      <div className="flex flex-col items-center">
        <p>{options.positive}</p>
        <input
          type="radio"
          value={100}
          checked={selectedOption === '100'}
          onChange={handleOptionChange}
        />
      </div>
    </div>
  )
}
