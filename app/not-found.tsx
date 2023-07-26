import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center space-y-3 text-xl">
      <h1>Y&apos;all shouldn&apos;t be here.</h1>
      <p>
        Wanna go{' '}
        <Link href="/">
          <span className="underline hover:text-swing-grey">home?</span>
        </Link>
      </p>
    </main>
  )
}
