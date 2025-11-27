import { Layout, Navbar, Footer } from "nextra-theme-docs"
import { Head } from "nextra/components"
import { getPageMap } from "nextra/page-map"
import "nextra-theme-docs/style.css"
import "./globals.css"

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const metadata = {
  description: 'A powerful web extension that lets you create custom slash commands to insert text snippets on any website. Type / to instantly insert emails, addresses, code snippets, and more.',
  metadataBase: new URL('https://slasher-app.github.io/docs/'),
  keywords: ["slash commands", "web extension", "productivity", "browser extension", "text snippets", "chrome extension", "text expansion"],
  generator: 'Next.js',
  applicationName: 'Slasher',
  appleWebApp: {
    title: 'Slasher'
  },
  title: {
    default: 'Slasher - Slash Commands Everywhere!',
    template: '%s | Nextra'
  },
  openGraph: {
    url: './',
    siteName: 'Slasher',
    locale: 'en_US',
    type: 'website'
  },
  other: {
    'msapplication-TileColor': '#fff'
  },
  alternates: {
    canonical: './'
  }
}

const navbar = (
  <Navbar
    logo={
      <div className="flex items-center gap-2">
        <img
          src={`${basePath}/docs/slasher-icon.png`}
          alt="Slasher"
          width={40}
          height={40}
        />
        <span className="font-bold text-lg">Slasher</span>
      </div>
    }
    projectLink="https://github.com/slasher-app/slasher"
  />
)

const footer = (
  <Footer className="flex-col items-center md:items-start">
    <p className="mt-6 text-xs">
      {new Date().getFullYear()} | Slasher
    </p>
  </Footer>
)

export default async function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body className="antialiased">
        <Layout
          navbar={navbar}
          footer={footer}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/slasher-app/slasher"
          sidebar={{
            defaultMenuCollapseLevel: 1,
            toggleButton: true
          }}
          toc={{
            float: true,
            title: 'On This Page',
            extraContent: null,
            backToTop: true
          }}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
