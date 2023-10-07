import Script from 'next/script'
import React from 'react'

const GoogleAnalyticsScript = () => {
  return (
    <>
<Script async src="https://www.googletagmanager.com/gtag/js?id=G-6FHPJ65VHR"/>
<Script id="google-analytics">
 {`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-6FHPJ65VHR');
 `}
</Script>
</>
  )
}

export default GoogleAnalyticsScript