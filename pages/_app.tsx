// import '../styles/globals.css'
import React from 'react'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import '../styles/App.less'

function MyApp ({ Component, pageProps }: AppProps) {
  console.log('test', Component, pageProps)
  return (
    <Layout>
       <Component {...pageProps} />
    </Layout>
  )
}
export default MyApp
