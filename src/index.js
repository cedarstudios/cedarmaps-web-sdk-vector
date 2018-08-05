'use strict'

const mapboxGl = require('mapbox-gl')
const cedarMapsMethods = require('cedar-maps')
const styleMapper = {
  'cedarmaps://styles/light': 'https://api.cedarmaps.com/v1/styles/cedarmaps.light.json',
  'cedarmaps://styles/dark': 'https://api.cedarmaps.com/v1/styles/cedarmaps.dark.json'
}

const map = (accessToken, options) => {
  const {style} = options
  const cedarMapsStyle = styleMapper[style]
  if (!style) throw Error('Invalid style provided')
  mapboxGl.accessToken = ''
  mapboxGl.setRTLTextPlugin('https://api.cedarmaps.com/cedarmaps-gl.js/rtl-plugin.js');
  return new mapboxGl.Map({...options, style: `${cedarMapsStyle}?access_token=${accessToken}`})
}

module.exports = {
  map,
  gl: mapboxGl,
  api: cedarMapsMethods
}