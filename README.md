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
<script src='https://api.cedarmaps.com/cedarmaps-gl.js/v1.0.0/cedarmaps.js'></script>
<link href='https://api.cedarmaps.com/cedarmaps-gl.js/v1.0.0/cedarmaps.css' rel='stylesheet'/>
```

and put the following code in the `<body>` of your HTML file:

```html
<div id='map' style='width: 400px; height: 300px;'></div>

<script type="text/javascript">
	var map = CedarMaps.map(accessToken, {
        style: 'cedarmaps://styles/light', //or cedarmaps://styles/dark
        container: <CONTAINER ID>,
        center: <CENTER POINT>,
        zoom: 15
        });
</script>
```
**Note:** You can get an access token by filling out the demo account form in [Cedarmaps Website](https://www.cedarmaps.com/#demo).

If you prefer to have your local version of the library you can simply build it with the following commands:

**Note:** [node.js](http://nodejs.org/) must be installed on your machine.

```sh
git clone http://gitlab.cedar.ir/cedar.studios/cedarmaps-sdk-web-vector.git
cd cedarmaps-sdk-web-vector
npm install
npx webpack
```

After the built process, the files are copied into `dist/` folder according to current SDK `version`. (See `package.json`).

**Note:** Every time you pull new changes from repository, you should run `npx webpack` again.
```sh
git pull
npx webpack
```

You can also see the [API documentation](hhttps://www.mapbox.com/mapbox-gl-js) for further help.

# API

## map
Create new cedarmaps object base on provided token and options (see [mapbox gl options](https://www.mapbox.com/mapbox-gl-js/api/#map) )

### `CedarMaps.map(ACCESS_TOKEN [, options])`

_Returns_ a `Map box` object.

```javascript
CedarMaps.map(accessToken, {
        style: 'cedarmaps://styles/light', //or cedarmaps://styles/dark
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

_Example_: Check out a [Live example](https://demo.cedarmaps.com/websdk-vector/demos/basic-map-marker.html).

## api
CedarMaps API. please see [cedarmaps npm package](https://www.npmjs.com/package/cedar-maps) for more information