import { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Lenis from 'lenis'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import JsonLd from './components/seo/JsonLd'
import FloatingCta from './components/ui/FloatingCta'
import Home from './pages/Home'

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.1, duration: 1.2, smoothWheel: true })
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
    return () => lenis.destroy()
  }, [])

  return (
    <BrowserRouter>
      <JsonLd />
      <Navbar />
      <main>
        <Routes>
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
      <FloatingCta />
    </BrowserRouter>
  )
}
