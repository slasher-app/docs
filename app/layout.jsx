import { Layout, Navbar } from "nextra-theme-docs"
import { Head } from "nextra/components"
import { getPageMap } from "nextra/page-map"
import "nextra-theme-docs/style.css"

export const metadata = {
  // Define your metadata here
  // For more information on metadata API, see: https://nextjs.org/docs/app/building-your-application/optimizing/metadata
}

const navbar = (
  <Navbar
    logo={
        <>
          <img src="/slasher-icon.png" alt="Slasher" style={{ height: "50px" }} />
          <span style={{ fontSize: "1.5em", marginLeft: ".5em", fontWeight: 800, fontStyle: "italic" }}>
            Slasher
          </span>
        </>
    }
    projectLink="test"
  />
)

export default async function RootLayout({ children }) {
  return (
    <html
      // Not required, but good for SEO
      lang="en"
      // Required to be set
      dir="ltr"
      // Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
      suppressHydrationWarning
    >
      <Head
      // ... Your additional head options
      >
        {/* Your additional tags should be passed as `children` of `<Head>` element */}
      </Head>
      <body>
        <Layout
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/slasher-app/docs/tree/main"
          // ... Your additional layout options
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
