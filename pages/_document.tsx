import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" data-new-ui-theme='dark' >
      <Head />
      <body className='sans-serif'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
