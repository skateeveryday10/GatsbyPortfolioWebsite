import React from 'react'
import Layout from '../components/Layout'

export const Head = () => {
  return(
      <>
          <title>Falk Web Design</title>
          <meta name='robots' content='noindex' />
      </>
  );
}

export default function NotFound() {
  return (
    <Layout>
      <div>
          <h2>404 Error</h2>
          <p>Page not found, check your url?</p>
      </div>
    </Layout>
  )
}
