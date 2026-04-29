import { AnimatePresence, motion } from 'framer-motion'
import { HashRouter, Route, Routes, useLocation } from 'react-router-dom'
import { Footer } from './components/ui/Footer'
import { Navbar } from './components/ui/Navbar'
import { Contact } from './pages/Contact'
import { Freelance } from './pages/Freelance'
import { Home } from './pages/Home'
import { Projects } from './pages/Projects'

const NotFound = () => <div className="min-h-screen">Not Found</div>

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
}

function AnimatedRoutes() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.12, ease: 'easeOut' }}
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/freelance" element={<Freelance />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  )
}

function App() {
  return (
    <HashRouter>
      <Navbar />
      <main className="pt-20">
        <AnimatedRoutes />
      </main>
      <Footer />
    </HashRouter>
  )
}

export default App
