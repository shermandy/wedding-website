function initialize() {
		var latlng = new google.maps.LatLng(40.3014581, -79.5389289);
		var settings = {
			zoom: 13,
			center: latlng,
			mapTypeControl: false,
			streetViewControl: false,
			navigationControl: false,
			mapTypeId: google.maps.MapTypeId.ROADMAP,
			styles: [ { featureType: "road.highway", elementType: "geometry.fill", stylers: [ { color: "#61456b" } ] },{ elementType: "geometry.stroke", stylers: [ { color: "#61456b" } ] },{ featureType: "road.arterial", elementType: "geometry.fill", stylers: [ { visibility: "on" }, { color: "#c09fcc" } ] },{ featureType: "road.arterial", elementType: "geometry.stroke", stylers: [ { color: "#c09fcc" } ] },{ featureType: "poi.park", stylers: [ { visibility: "off" } ] },{ featureType: "administrative", stylers: [ { visibility: "off" } ] },{ featureType: "poi.school", stylers: [ { visibility: "off" } ] },{ featureType: "road.local", elementType: "labels", stylers: [ { visibility: "off" } ] },{ featureType: "road.highway", elementType: "labels.text", stylers: [ { visibility: "off" } ] },{ featureType: "road.local", elementType: "geometry.stroke", stylers: [ { visibility: "off" } ] },{ featureType: "road.local", elementType: "geometry.fill", stylers: [ { weight: 1 }, { color: "#505050" } ] },{ featureType: "road.arterial", elementType: "labels.text", stylers: [ { visibility: "off" } ] },{ featureType: "administrative.land_parcel", stylers: [ { visibility: "off" } ] },{ featureType: "poi.sports_complex", stylers: [ { visibility: "off" } ] },{ featureType: "poi.school", stylers: [ { visibility: "off" } ] },{ featureType: "transit", stylers: [ { visibility: "off" } ] },{ featureType: "poi", stylers: [ { visibility: "off" } ] },{ featureType: "poi", stylers: [ { visibility: "off" } ] },{ featureType: "water", stylers: [ { visibility: "off" } ] },{ featureType: "administrative.land_parcel", stylers: [ { visibility: "off" } ] },{ featureType: "landscape.man_made", stylers: [ { visibility: "off" } ] },{ featureType: "landscape.natural", stylers: [ { visibility: "on" }, { color: "#323232" } ] } ]
		};
		
		var map = new google.maps.Map(document.getElementById("map_canvas"), settings);
		
		var companyLogo = new google.maps.MarkerImage('img/lakeview.png',
			new google.maps.Size(80,42),
			new google.maps.Point(0,0),
			new google.maps.Point(50,50)
		);
		
		var companyPos = new google.maps.LatLng(40.3050186, -79.5843809);
		var companyMarker = new google.maps.Marker({
			position: companyPos,
			map: map,
			icon: companyLogo,
			title:"Lakeview"
		});


		var companyLogo2 = new google.maps.MarkerImage('img/ladyofgrace.png',
			new google.maps.Size(80,49),
			new google.maps.Point(0,0),
			new google.maps.Point(50,50)
		);
		
				
		var companyPos2 = new google.maps.LatLng(40.2880740, -79.5274589);
		var companyMarker2 = new google.maps.Marker({
			position: companyPos2,
			map: map,
			icon: companyLogo2,
			title:"Our Lady of Grace"
		});
	}
	initialize();