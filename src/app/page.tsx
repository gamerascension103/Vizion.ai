import { Header } from '@/components/header'
import { Hero } from '@/components/hero/Hero'
import { Pain } from '@/components/pain'

export default function Home() {
  return (
    <>
      <Header variant="homepage" />
      <Hero />
      <Pain />
    </>
  )
}
