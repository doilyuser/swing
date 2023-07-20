import { Title } from './components/Title'
import { Content } from './components/Content'

export default function Home() {
  return (
    <main className="justify flex min-h-screen flex-col items-center justify-evenly">
      <Title />
      <Content />
    </main>
  )
}
