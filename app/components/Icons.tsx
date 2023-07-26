import { Icon } from './Icon'

export function Icons() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex justify-evenly">
        <Icon name="bank" />
        <Icon name="bulb" />
        <Icon name="cash" />
        <Icon name="cloudy" />
      </div>
      <div className="flex  justify-evenly">
        <Icon name="contract" />
        <Icon name="send" />
        <Icon name="shopping" />
        <Icon name="target" />
      </div>
      <div className="flex justify-evenly">
        <Icon name="cloudy" />
        <Icon name="bank" />
        <Icon name="bulb" />
        <Icon name="send" />
      </div>
      <div className="flex  justify-evenly">
        <Icon name="contract" />
        <Icon name="send" />
        <Icon name="shopping" />
        <Icon name="target" />
      </div>
      <div className="flex  justify-evenly">
        <Icon name="contract" />
        <Icon name="send" />
        <Icon name="shopping" />
        <Icon name="target" />
      </div>
    </div>
  )
}
