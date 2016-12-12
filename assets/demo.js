window.onload = function () {

	//---------------------------------------------------------------
	// Setup

	var map = L.map('map').setView([51.505, -0.09], 13);
	L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png').addTo(map);

	map.addHardBounds();

	var bounds = L.latLngBounds([[51.55, -0.2], [51.45, 0]]);
	map.setMaxBounds(bounds);

	//---------------------------------------------------------------
	// Controls

	var turnOn = document.getElementById('turn-on');
	var turnOff = document.getElementById('turn-off');
	var state = document.getElementById('state');

	turnOn.onclick = function () {
		map.addHardBounds();
		this.setAttribute('disabled', 'true');
		turnOff.removeAttribute('disabled');
		state.innerHTML = 'active';
	};

	turnOff.onclick = function () {
		map.removeHardBounds();
		this.setAttribute('disabled', 'true');
		turnOn.removeAttribute('disabled');
		state.innerHTML = 'disabled';
	};

};
