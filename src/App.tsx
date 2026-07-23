import { AnimatePresence, motion } from 'framer-motion'
import { BrowserRouter as Router, Route, Routes, useLocation, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { Home, ArrowUpRight } from 'lucide-react'
import { Footer } from './components/ui/Footer'
import { Navbar } from './components/ui/Navbar'
import { ScrollToTop } from './components/ScrollToTop'
import { Contact } from './pages/Contact'
import { Orders } from './pages/Orders'
import { Home as HomePage } from './pages/Home'
import { Projects } from './pages/Projects'

function NotFound() {
  const { t } = useTranslation()
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center bg-[#0e0e0e] px-6 py-20 text-center text-[#f0f0f0]">
      <Helmet>
        <title>{t('seo.notFound.title')}</title>
        <meta name="description" content={t('seo.notFound.description')} />
        <meta property="og:title" content={t('seo.notFound.title')} />
        <meta property="og:description" content={t('seo.notFound.description')} />
        <meta property="og:type" content="website" />
      </Helmet>
      <h1
        className="text-6xl font-semibold text-[#e8b84b]"
        style={{ fontFamily: 'var(--font-heading)' }}
      >
        404
      </h1>
      <p className="mt-4 text-lg text-[#888888]">{t('app.notFound')}</p>
      <Link
        to="/"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#e8b84b] px-5 py-2.5 text-sm font-semibold text-[#0e0e0e] transition hover:brightness-110"
      >
        <Home size={16} />
        {t('navbar.home')}
        <ArrowUpRight size={16} />
      </Link>
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
          <Route path="/" element={<HomePage />} />
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
      <ScrollToTop />
      <Navbar />
      <main className="pt-20">
        <AnimatedRoutes />
      </main>
      <Footer />
    </Router>
  )
}

export default App
