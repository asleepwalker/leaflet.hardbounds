#Leaflet.HardBounds

[Leaflet](http://leafletjs.com/) plugin to prevent panning outside of map bounds.

Requires: Leaflet v0.6.3 or higher.

## Usage

Setup hard bounds:

	map.addHardBounds();

Then you can set maxBounds as usual:

	var bounds = L.latLngBounds([[51.55, -0.2], [51.45, 0]]);
	map.setMaxBounds(bounds);

Or even unset them:

	map.setMaxBounds(null);

However, it's better to remove listener if you need hard bounds no more:

	map.removeHardBounds();

### <a href="http://asleepwalker.github.io/leaflet.hardbounds/">Demo</a>

## License

The MIT License.