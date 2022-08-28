import React from 'react'
import  { useEffect } from 'react'

const MapComponent = (props) => {
    useEffect(()=>{
        const ifameData=document.getElementById("iframeId")
        const lat=props.lat;
        const lon=props.lon;
        ifameData.src=`https://maps.google.com/maps?q=${lat},${lon}&hl=es;&output=embed`
    })
  return (
    <div>
        <iframe id="iframeId" style={{ width: '500px', height: '500px',margin: '0 auto', display: 'block', borderStyle: 'none' }}></iframe>
    </div>
  )
}

export default MapComponent