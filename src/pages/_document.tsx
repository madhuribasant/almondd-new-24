import { Html, Head, Main, NextScript } from 'next/document'
import localFont from 'next/font/local'



export default function Document() {
  return (
    <Html lang="en" >
      <Head />
      <body>
        <Main />
        <div id="modal-root" />
        <NextScript />
      </body>
    </Html>
  )
}
