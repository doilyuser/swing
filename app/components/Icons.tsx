import { Icon } from './Icon'

export function Icons() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <div className="flex w-full justify-evenly p-2">
        <Icon name="bank" />
        <Icon name="bulb" />
        <Icon name="cash" />
        <Icon name="cloudy" />
      </div>
      <div className="flex  w-full justify-evenly p-2">
        <Icon name="contract" />
        <Icon name="send" />
        <Icon name="shopping" />
        <Icon name="target" />
      </div>
      <div className="flex w-full justify-evenly p-2">
        <Icon name="cloudy" />
        <Icon name="bank" />
        <Icon name="bulb" />
        <Icon name="send" />
      </div>
      <div className="flex  w-full justify-evenly p-2">
        <Icon name="contract" />
        <Icon name="send" />
        <Icon name="shopping" />
        <Icon name="target" />
      </div>
    </div>
  )
}
