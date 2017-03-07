# Leaflet.MousePosition

Leaflet.MousePosition is a simple mouse position control that you can drop into your leaflet map. It displays geographic coordinates of the mouse pointer, as it is moved about the map.

## Using the Mouse Position Control

Insert the following line:

    ...
    L.control.mousePosition().addTo(map);
    ...

## Available Options:

These are the available options:

`emptystring:` Initial text to display. Defaults to 'Unavailable'

`formatters:` Array of custom functions to format the mouse position value. When the mouse position control is clicked, the formatter will be advanced to the next function in the array.

`position:` The standard Leaflet.Control position parameter. Defaults to 'bottomleft'