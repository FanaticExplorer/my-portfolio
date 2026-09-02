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
import { About } from './pages/About'

const pages: Record<string, React.ComponentType> = {
  '/': Home,
  '/projects': Projects,
  '/orders': Orders,
  '/contact': Contact,
  '/about': About,
}

const pageLinks: Record<string, string[]> = {
  '/': ['/projects', '/orders', '/contact', '/about'],
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

  const renderedHtml = renderToStaticMarkup(
    <HelmetProvider>
      <StaticRouter location={url}>
        <PageShell>
          <PageComponent />
        </PageShell>
      </StaticRouter>
    </HelmetProvider>,
  )

  const headMarkup = renderedHtml.match(
    /<title\b[^>]*>[\s\S]*?<\/title>|<script\b[^>]*>[\s\S]*?<\/script>|<(?:meta|link)\b[^>]*\/?>/g,
  ) || []
  const titleMarkup = headMarkup.find((markup) => markup.startsWith('<title>'))
  const title = titleMarkup?.replace(/^<title>|<\/title>$/g, '')
  const headElements = new Set(headMarkup.filter((markup) => markup !== titleMarkup))
  const html = headMarkup.reduce((result, markup) => result.replace(markup, ''), renderedHtml)

  return {
    html,
    links: new Set(pageLinks[url] || []),
    head: {
      lang: 'en',
      ...(title && { title }),
      elements: headElements as unknown as Set<{ type: string; props: Record<string, string> }>,
    },
  }
}
