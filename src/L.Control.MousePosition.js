L.Control.MousePosition = L.Control.extend({
  options: {
    position: 'bottomleft',
    separator: ' : ',
    emptyString: 'Unavailable',
    lngFirst: false,
    numDigits: 5,
    lngFormatter: undefined,
    latFormatter: undefined,
    lngFormatters: [],
    latFormatters: [],
    prefix: ""
  },

  onAdd: function (map) {
    this._container = L.DomUtil.create('div', 'leaflet-control-mouseposition');
    L.DomEvent.disableClickPropagation(this._container);
    map.on('mousemove', this._onMouseMove, this);
    this._container.innerHTML=this.options.emptyString;

    this._formatterIndex = this.options.lngFormatters.length;
    this._toggleFormatters();
    const self = this;
    L.DomEvent.on(this._container, 'click', function(e) {
      self._toggleFormatters({
        latlng: map.mouseEventToLatLng(e)
      });
    });

    return this._container;
  },

  onRemove: function (map) {
    L.DomEvent.off(this._container, 'click');
    map.off('mousemove', this._onMouseMove);
  },

  _toggleFormatters: function (e) {
    if(this.options.lngFormatters.length === 0 
      || this.options.lngFormatters.length !== this.options.latFormatters.length) return;

    this._formatterIndex++;
    if(this._formatterIndex >= this.options.lngFormatters.length) {
      this._formatterIndex = 0;
    }

    this.options.lngFormatter = this.options.lngFormatters[this._formatterIndex];
    this.options.latFormatter = this.options.latFormatters[this._formatterIndex];
    
    if(e) this._onMouseMove(e);
  },

  _onMouseMove: function (e) {
    var lng = this.options.lngFormatter ? this.options.lngFormatter(e.latlng.lng) : L.Util.formatNum(e.latlng.lng, this.options.numDigits);
    var lat = this.options.latFormatter ? this.options.latFormatter(e.latlng.lat) : L.Util.formatNum(e.latlng.lat, this.options.numDigits);
    var value = this.options.lngFirst ? lng + this.options.separator + lat : lat + this.options.separator + lng;
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