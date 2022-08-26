import React from 'react'
import Navbar from '../components/Navbar'
import 'twin.macro'
import { Helmet } from 'react-helmet'

const FlashsaleBrand = () => {
  return (
    <>
      <Helmet>
        <title>Pixy Dashboard - Shop</title>
      </Helmet>
      <Navbar />
      <div tw="flex justify-center items-center">
        <div className="tableauPlaceholder" tw="w-full h-full">
          <object className="tableauViz" tw="w-full hidden" height="2527">
            <param
              name="host_url"
              value="https%3A%2F%2Fprod-useast-a.online.tableau.com%2F"
            />{' '}
            <param name="embed_code_version" value="3" />{' '}
            <param name="site_root" value="&#47;t&#47;redcommindonesia" />
            <param
              name="name"
              value="InsigniaMarkethacPixyV4&#47;Shop"
            />
            <param name="tabs" value="no" />
            <param name="toolbar" value="yes" />
            <param name="showAppBanner" value="false" />
          </object>
        </div>
      </div>
    </>
  )
}

export default FlashsaleBrand
