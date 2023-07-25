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
          value={1}
          checked={selectedOption === '1'}
          onChange={handleOptionChange}
        />
      </div>
      <div className="flex flex-col items-center">
        <br />
        <input
          type="radio"
          value={2}
          checked={selectedOption === '2'}
          onChange={handleOptionChange}
        />
      </div>
      <div className="flex flex-col items-center">
        <p>{options.neutral ? options.neutral : <br />}</p>
        <input
          type="radio"
          value={3}
          checked={selectedOption === '3'}
          onChange={handleOptionChange}
        />
      </div>
      <div className="flex flex-col items-center">
        <br />
        <input
          type="radio"
          value={4}
          checked={selectedOption === '4'}
          onChange={handleOptionChange}
        />
      </div>
      <div className="flex flex-col items-center">
        <p>{options.positive}</p>
        <input
          type="radio"
          value={5}
          checked={selectedOption === '5'}
          onChange={handleOptionChange}
        />
      </div>
    </div>
  )
}
