# Cedarmaps Web SDK Vector

CedarMaps JS is a javascript library for building interactive maps. It's simply a wrapper for [Mapbox GL Javascript API](https://github.com/mapbox/mapbox-gl-js).

# Table of Contents
- [Basic Usage](#basic-usage)
- [API](#api)
	- [map](#map)
	- [gl](#gl)
	- [api](#api)

# Basic Usage

Recommended usage is via the CedarMaps CDN. Just include CSS and JavaScript files in `<head>` section of your HTML file.

```html
<script src='https://api.cedarmaps.com/cedarmaps-gl.js/v2.0.0/cedarmaps.js'></script>
<link href='https://api.cedarmaps.com/cedarmaps-gl.js/v2.0.0/cedarmaps.css' rel='stylesheet'/>
```

and put the following code in the `<body>` of your HTML file:

```html
<div id='map' style='width: 400px; height: 300px;'></div>

<script type="text/javascript">
    var accessToken = 'ACCESS TOKEN' // You can get an access token by filling out the demo account form in https://www.cedarmaps.com/#demo
	var map = CedarMaps.map(accessToken, {
        style: 'style://streets-light', //or style://streets-dark
        container: 'map',
        center: [51.391827, 35.694875],
        zoom: 15
        });
</script>
```
**Note:** You can get an access token by filling out the demo account form in [Cedarmaps Website](https://www.cedarmaps.com/#demo).

If you prefer to have your local version of the library you can simply build it with the following commands:

**Note:** [node.js](http://nodejs.org/) must be installed on your machine.

```sh
git clone http://gitlab.cedar.ir/cedar.studios/cedarmaps-sdk-web-vector-public.git
cd cedarmaps-sdk-web-vector-public
npm install
npx webpack
```

After the built process, the files are copied into `dist/` folder according to current SDK `version`. (See `package.json`).

**Note:** Every time you pull new changes from repository, you should run `npx webpack` again.
```sh
git pull
npx webpack
```

You can also see the [API documentation](https://www.mapbox.com/mapbox-gl-js) for further help.

# Demos
[Basic map marker live example](https://demo.cedarmaps.com/websdk-vector/demos/basic-map-marker.html)

[Basic map marker with controls live example](https://demo.cedarmaps.com/websdk-vector/demos/basic-map-marker-with-controls.html)

[Direction live example](https://demo.cedarmaps.com/websdk-vector/demos/direction.html)

[Reverse geocoder live example](https://demo.cedarmaps.com/websdk-vector/demos/reverse-geocoder.html)
# API

## map
Create new cedarmaps object base on provided token and options (see [mapbox gl options](https://www.mapbox.com/mapbox-gl-js/api/#map) )

### `CedarMaps.map(ACCESS_TOKEN [, options])`

_Returns_ a `Map box` object.

```javascript
CedarMaps.map(accessToken, {
        style: 'style://streets-light', //or style://streets-dark
        container: <CONTAINER ID>,
        center: <CENTER POINT>,
        zoom: 15
      });
```


## gl
Mapbox GL object
```javascript
  var marker = new CedarMaps.gl.Marker().setLngLat([51.3789253, 35.709987]).addTo(map)
```


## api
CedarMaps API. please see [cedarmaps npm package](https://www.npmjs.com/package/cedar-maps) for more information