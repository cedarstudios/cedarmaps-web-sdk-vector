# Cedarmaps Web SDK Vector

CedarMaps GL JS is a JavaScript library that uses WebGL to render interactive maps from vector tiles. Built on top of [Mapbox GL JS](https://github.com/mapbox/mapbox-gl-js).

**Note:** This repo is for "vector tiles". If you prefer to use our "raster tiles" please check out our [Web SDK Raster](https://github.com/cedarstudios/cedarmaps-web-sdk-raster) repository.

# Basic usage via CDN
1. Get an access token from [Cedar Maps website](https://www.cedarmaps.com/) (Menu link: "درخواست اکانت رایگان"). It may take a couple of hours until your request is processed and your credentials are emailed to you.
2. Include these CSS and JavaScript files in `<head>` section of your HTML file.
```html
<script src='https://api.cedarmaps.com/cedarmaps-gl.js/v2.2.0/cedarmaps-gl.js'></script>
<link href='https://api.cedarmaps.com/cedarmaps-gl.js/v2.2.0/cedarmaps-gl.css' rel='stylesheet'/>
```
3. Put the following code in the <body> of your HTML file:
```html
<div id='map' style='width: 400px; height: 300px;'></div>

<script type="text/javascript">
    // In order to use Cedar Maps you **MUST** have an access token
	var map = cedarmapsgl.map('YOUR_ACCESS_TOKEN', {
        style: 'style://streets-light', // Other available style: 'style://streets-dark'
        container: 'map',
        center: [51.391827, 35.694875],
        zoom: 15
        });
</script>
```
# Checking out demo files
In order to check out demo files in `/demos` folder you need to build the SDK locally or change the script and css paths to our CDN ones mentioned above. 

# Building SDK locally
1. Clone this repo:
```
git clone https://github.com/cedarstudios/cedarmaps-web-sdk-vector
cd cedarmaps-web-sdk-vector
```
3. In the root folder of your cloned repo make a new file called `access-token.js` and put your access token in it:
```
var accessToken = 'YOUR_ACCESS_TOKEN';
```
4. Install the required backages: (You have to have [Node.js](https://nodejs.org) and [npm](https://www.npmjs.com/) installed on your machine.)
```
 npm install
```

5. Build the SDK. It stores the files in `/dist/[sdk-version]` folder. (See `package.json`).

```
npx webpack
```
6. Go to `/demos` folder and pick one for the start.

# Pulling new changes from repo
Every time you pull new changes from repository, you should run `npx webpack` again.
```sh
git pull
npx webpack
```

You can also see the [API documentation](https://www.mapbox.com/mapbox-gl-js) for further help.

# API
CedarMaps GL is simply a wrapper for [Mapbox GL JS](https://github.com/mapbox/mapbox-gl-js). You may find an extensive API documentation from the [original library](https://docs.mapbox.com/mapbox-gl-js/api).

CedarMaps API. please see [cedarmaps npm package](https://www.npmjs.com/package/@cedarstudios/cedarmaps) for more information

# Cedar Maps Services
Contrary to our [Web SDK Raster](https://github.com/cedarstudios/cedarmaps-web-sdk-raster) which is by nature integrated with Cedar Maps services like forward/reverse geocoding, direction, etc., these services are separated in Web SDK Vector and are offered in an standalone NPM package [@cedarstudios/cedarmaps](https://www.npmjs.com/package/@cedarstudios/cedarmaps). But we've included them under `cedarmapsgl.api` anyway.

You may use them like:
```js
var client = cedarmapsgl.api('YOUR ACCESS TOKEN')
  client.forwardGeocoding(encodeURIComponent('ونک'), 'cedarmaps.streets', {type: 'roundabout'}, (err, res) => {console.log(res);});

```
