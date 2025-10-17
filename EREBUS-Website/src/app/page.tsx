import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import LoadingScreen from '@/components/ui/LoadingScreen'

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <main className="min-h-screen">
        <Header />
        <Hero />
        <Footer />
      </main>
    </>
  )
}
