import Image from 'next/image'

type Icon = {
  name: string
}

export function Icon({ name }: Icon) {
  return (
    <>
      <Image src={`/${name}.svg`} alt="logo" width={40} height={40} />
    </>
  )
}
