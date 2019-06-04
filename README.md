# leaflet-mouse-position [![npm version][npm-image]][npm-url] [![NPM Downloads][npm-downloads-image]][npm-url]

Leaflet.MousePosition is a simple mouse position control that you can drop into your leaflet map. It displays geographic coordinates of the mouse pointer, as it is moved about the map.

![Screenshot](/screenshot/sample.png?raw=true)

## Using the Mouse Position Control

Insert the following line:

    ...
    L.control.mousePosition().addTo(map);
    ...

## Available Options:

These are the available options:

`position:` The standard Leaflet.Control position parameter. Defaults to 'bottomleft'

`separator:` To separate longitude\latitude values. Defaults to ' : '

`emptystring:` Initial text to display. Defaults to 'Unavailable'

`numDigits:` Number of digits. Defaults to 5

`lngFirst:` Weather to put the longitude first or not. Defaults to false

`lngFormatter:` Custom function to format the longitude value. Argument: numerical longitude value. Return value: formatted string. Defaults to undefined.

`latFormatter:` Custom function to format the latitude value. Argument: numerical latitude value. Return value: formatted string. Defaults to undefined.

`prefix:` A string to be prepended to the coordinates. Defaults to the empty string ‘’.

`wrapLng:` Controls if longitude values will be [wrapped](https://leafletjs.com/reference-1.5.0.html#latlng-wrap). Defaults to true.

`formatter:` A custom function to format the entire value. Arguments: numerical longitude value, numerical latitude value. Return value: formatted string.
 Defaults to undefined. If defined will ignore: `lngFirst`, `lngFormatter`, `latFormatter` and `prefix`.

## Public Methods:

These are the available methods:

`getLatLng:` Request the last recorded cursor position, as a
[LatLng](https://leafletjs.com/reference-1.3.2.html#latlng) object.

## License

MIT License (MIT)

[npm-image]: https://badge.fury.io/js/leaflet-mouse-position.svg
[npm-url]: https://www.npmjs.com/package/leaflet-mouse-position
[npm-downloads-image]: https://img.shields.io/npm/dt/leaflet-mouse-position.svg
