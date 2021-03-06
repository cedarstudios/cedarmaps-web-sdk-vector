'use strict'

const mapboxGl = require('mapbox-gl')
const cedarMapsAPI = require('@cedarstudios/cedarmaps')
const styleMapper = {
  'style://streets-light': 'https://api.cedarmaps.com/v1/styles/cedarmaps.light.json',
  'style://streets-dark': 'https://api.cedarmaps.com/v1/styles/cedarmaps.dark.json'
}
mapboxGl.setRTLTextPlugin('https://api.cedarmaps.com/cedarmaps-gl.js/rtl-plugin.js');

mapboxGl.map = (accessToken, options) => {
  const {style} = options
  const cedarMapsStyle = styleMapper[style]
  if (!style) throw Error('Invalid style provided')
  mapboxGl.accessToken = ''
  return new mapboxGl.Map({...options, style: `${cedarMapsStyle}?access_token=${accessToken}`})
}

mapboxGl.api = cedarMapsAPI;

module.exports = mapboxGl
