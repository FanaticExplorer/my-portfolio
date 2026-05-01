import { AnimatePresence, motion } from 'framer-motion'
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { Footer } from './components/ui/Footer'
import { Navbar } from './components/ui/Navbar'
import { Contact } from './pages/Contact'
import { Orders } from './pages/Orders'
import { Home } from './pages/Home'
import { Projects } from './pages/Projects'

function NotFound() {
  const { t } = useTranslation()
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>{t('seo.notFound.title')}</title>
        <meta name="description" content={t('seo.notFound.description')} />
        <meta property="og:title" content={t('seo.notFound.title')} />
        <meta property="og:description" content={t('seo.notFound.description')} />
        <meta property="og:type" content="website" />
      </Helmet>
      {t('app.notFound')}
    </div>
  )
}

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
          <Route path="/orders" element={<Orders />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  )
}

function App() {
  const { i18n } = useTranslation()

  return (
    <Router>
      <Helmet htmlAttributes={{ lang: i18n.language }} />
      <Navbar />
      <main className="pt-20">
        <AnimatedRoutes />
      </main>
      <Footer />
    </Router>
  )
}

export default App
