import React from 'react'
import Layout from '../components/layout'
import Header from '../components/header'
import Helmet from 'react-helmet'
import { SimpleImg, initSimpleImg } from 'react-simple-img'

initSimpleImg()

const IndexPage = ({ location }) => (
  <Layout location={location}>
    <Helmet
      title={'React Simple Image'}
      meta={[{ name: 'description', content: 'Elegant image lazy load vis intersection observer' }]}
    >
      <html lang="en" />
    </Helmet>

    <Header location={location} />

    <div
      style={{
        maxWidth: '800px',
        margin: '0 auto',
      }}
    >
      {[0, 1, 2, 3, 4, 5, 6, 7].map((image, i) => (
        <SimpleImg
          alt="whatever"
          key={i}
          placeholder="black"
          animationDuration={1}
          src={`https://source.unsplash.com/collection/${Math.floor(Math.random() * (100 - 0 + 1)) + 0}/800x400`}
          applyAspectRatio
          width={800}
          height={500}
        />
      ))}
    </div>
  </Layout>
)

export default IndexPage
