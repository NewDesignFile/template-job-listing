import './../_sass/_reset.scss'
import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import './../_sass/_utilities.scss'
import './../_sass/_base.scss'
import './../_sass/_layout.scss'
import './../_sass/_shadows.scss'
import './../_sass/_typography.scss'
import './../_sass/_buttons.scss'
import Script from 'next/script'

export default function App({ Component, pageProps }: AppProps) {
return (
  <>
  <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-HS4RZ4M57Q"
          strategy="afterInteractive"
        />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-HS4RZ4M57Q');
          `}
        </Script>
        <Component {...pageProps} />
  </>)
}