import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Banner from '../components/Banner/Banner'
import Footer from '../components/Footer/Footer'

function FullPageWrapper(Component) {
  const app = () => {
    return (
      <div style={{ position: 'relative' }}>
        <div style={{ position: 'absolute', top: 0, right: 0, left: 0, zIndex: 10 }}>
          <Navbar />
        </div>
        <div style={{ paddingTop: '65px' }}>
          <Component />
        </div>
        <Banner />
        <Footer />
      </div>
    )
  }
  return app;
}

export default FullPageWrapper
