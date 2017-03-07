L.Control.MousePosition = L.Control.extend({
  options: {
    position: 'bottomleft',
    emptyString: 'Unavailable',
    formatters: [function(lat, lon) {
      return L.Util.formatNum(lat, 5) + ':' + L.Util.formatNum(lon, 5)
    }]
  },

  onAdd: function (map) {
    this._container = L.DomUtil.create('div', 'leaflet-control-mouseposition');
    L.DomEvent.disableClickPropagation(this._container);
    map.on('mousemove', this._onMouseMove, this);
    this._container.innerHTML=this.options.emptyString;

    this._formatterIndex = this.options.formatters.length;
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
    this._formatterIndex++;
    if(this._formatterIndex >= this.options.formatters.length) {
      this._formatterIndex = 0;
    }

    this._formatter = this.options.formatters[this._formatterIndex];
    
    if(e) this._onMouseMove(e);
  },

  _onMouseMove: function (e) {
    this._container.innerHTML = this._formatter(e.latlng.lat, e.latlng.lng);
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