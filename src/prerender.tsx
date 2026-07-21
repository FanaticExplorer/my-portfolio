/* eslint-disable react-refresh/only-export-components */
import { type ReactNode } from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import './i18n/config'
import { Home } from './pages/Home'
import { Projects } from './pages/Projects'
import { Orders } from './pages/Orders'
import { Contact } from './pages/Contact'
import { Navbar } from './components/ui/Navbar'
import { Footer } from './components/ui/Footer'

const pages: Record<string, React.ComponentType> = {
  '/': Home,
  '/projects': Projects,
  '/orders': Orders,
  '/contact': Contact,
}

const pageLinks: Record<string, string[]> = {
  '/': ['/projects', '/orders', '/contact'],
}

function PageShell({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="pt-20">{children}</main>
      <Footer />
    </>
  )
}

export async function prerender(data: { url: string }) {
  const url = data.url || '/'
  const PageComponent = pages[url]

  if (!PageComponent) {
    return { html: '', links: new Set<string>() }
  }

  const helmetContext: Record<string, unknown> = {}
  const html = renderToStaticMarkup(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={url}>
        <PageShell>
          <PageComponent />
        </PageShell>
      </StaticRouter>
    </HelmetProvider>,
  )

  const helmet = (helmetContext as { helmet?: { title?: { toString: () => string } } }).helmet

  return {
    html,
    links: new Set(pageLinks[url] || []),
    head: {
      lang: 'en',
      title: helmet?.title?.toString() || 'FanaticExplorer',
    },
  }
}
