L.Control.MousePosition = L.Control.extend({
  options: {
    position: 'bottomleft',
    separator: ' : ',
    emptyString: 'Unavailable',
    lngFirst: false,
    numDigits: 5,
    latLngFormatter: undefined,
    lngFormatter: undefined,
    latFormatter: undefined,
    prefix: ""
  },

  onAdd: function (map) {
    this._container = L.DomUtil.create('div', 'leaflet-control-mouseposition');
    L.DomEvent.disableClickPropagation(this._container);
    map.on('mousemove', this._onMouseMove, this);
    this._container.innerHTML=this.options.emptyString;
    return this._container;
  },

  onRemove: function (map) {
    map.off('mousemove', this._onMouseMove)
  },

  _onMouseMove: function (e) {
    var lng = e.latlng.lng;
    var lat = e.latlng.lat;
	var value = "";
	if (this.options.latLngFormatter != undefined) {
		value = this.options.latLngFormatter(lat, lng)
	} else {
		lng = this.options.lngFormatter ? this.options.lngFormatter(lng) : L.Util.formatNum(lng, this.options.numDigits);
		lat = this.options.latFormatter ? this.options.latFormatter(lat) : L.Util.formatNum(lat, this.options.numDigits);
		value = this.options.lngFirst ? lng + this.options.separator + lat : lat + this.options.separator + lng;
	}
    var prefixAndValue = this.options.prefix + ' ' + value;
    this._container.innerHTML = prefixAndValue;
  }

});

L.Map.mergeOptions({
    positionControl: false
});

L.Map.addInitHook(function () {
    if (this.options.positionControl) {
        this.positionControl = new L.Control.MousePosition();
        this.addControl(this.positionControl);
    }
});

L.control.mousePosition = function (options) {
    return new L.Control.MousePosition(options);
};
