	function initMap() {
    var map;
    var bounds = new google.maps.LatLngBounds();
    var mapOptions = {
        mapTypeId: 'roadmap'
    };
                    
    // Display a map on the web page
    map = new google.maps.Map(document.getElementById("mapCanvas"), mapOptions);
    map.setTilt(50);
        
    // Multiple markers location, latitude, and longitude
    var markers = [
      ['Joshua Tree', 33.8734, -115.9010],
      ['Mount Pinos', 34.8128, -119.1454] ,
      ['Mount Hollywood', 34.0741, -118.1804],
      ['Mount Baldy', 34.2364, -117.6590],
      ['Mount Baden-Powell', 34.3586, -117.7645]
    ];

    var infoWindowContent = [
        ['<div class="info_content">' +
        '<h3>Joshua Tree</h3>' + '<IMG BORDER="0" ALIGN="Left" SRC="https://www.rei.com/adventures/assets/adventures/images/trip/gallery/northamerica/jtb_01">' + 
        '<p>Joshua Tree is an art museum located in the New York City borough of Brooklyn.</p>' + '</div>'],
        ['<div class="info_content">' +
        '<h3>Mount Pinos</h3>' +
        '<p>Mount Pinos is the public library system of the borough of Brooklyn, in New York City.</p>' + 
        '</div>'],
        ['<div class="info_content">' +
        '<h3>Mount Hollywood</h3>' +
        '<p>Mount Hollywood is a 12-acre (4.9 ha) zoo located off Flatbush Avenue on the eastern side of Prospect Park, Brooklyn, New York City.</p>' +
        '</div>'],
        ['<div class="info_content">' +
        '<h3>Mount Baldy</h3>' +
        '<p>Mount Baldy is an art museum located in the New York City borough of Brooklyn.</p>' + '</div>'],
        ['<div class="info_content">' +
        '<h3>Mount Baden-Powell</h3>' +
        '<p>Mount Baden-Powell is a 12-acre (4.9 ha) zoo located off Flatbush Avenue on the eastern side of Prospect Park, Brooklyn, New York City.</p>' +
        '</div>']
      ];

       var infoWindow = new google.maps.InfoWindow(), marker, i;
    
    // Place each marker on the map  
    for( i = 0; i < markers.length; i++ ) {
        var position = new google.maps.LatLng(markers[i][1], markers[i][2]);
        bounds.extend(position);
        marker = new google.maps.Marker({
            position: position,
            map: map,
            title: markers[i][0]
        });

         google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
                infoWindow.setContent(infoWindowContent[i][0]);
                infoWindow.open(map, marker);
            }
        })(marker, i));

        // Center the map to fit all markers on the screen
        map.fitBounds(bounds);
    }

     var boundsListener = google.maps.event.addListener((map), 'bounds_changed', function(event) {
        this.setZoom(8);
        google.maps.event.removeListener(boundsListener);
    });
    
}
// Load initialize function
google.maps.event.addDomListener(window, 'load', initMap);









































	// var map;
	// var Markers = {};
	// var infowindow;
	// var markers = [
	// 		['Joshua Tree', 33.8734, -115.9010, ],
	// 		['Mount Pinos', 34.8128, -119.1454, ],
	// 		['Mount Hollywood', 34.0741, -118.1804,],
	// 		['Mount Baldy', 34.2364, -117.6590, ],
	// 		['Mount Baden-Powell', 34.3586, -117.7645, ]
	// 	];


		
	// var origin = new google.maps.LatLng(locations[0][2], locations[0][3]);


	// function initialize() {
	// 	var mapOptions = {
	// 		zoom: 13,
	// 		center: origin
	// 		// center: new google.maps.LatLng(34.0741, -118.1804),
	// 		// zoom: 8,
	// 		// mapTypeId: google.maps.MapTypeId.ROADMAP
	// 	};

	// map = new google.maps.Map(document.getElementById('map'),
	// 		mapOptions);

	// 	infowindow = new google.maps.InfoWindow();

	// for (i = 0; i < locations.length; i++) {
	// 	var position = new google.maps.LatLng(locations[i][2], locations[i][3]);
	// 		// bounds.extend(position);
	// 		var marker = new google.maps.Marker({
	// 		position: position,
	// 		map: map,
	// 		// title: markers[i][0]
	// 		});

		// 	google.maps.event.addListener(marker, 'click', (function(marker, i) {
  //           return function() {
  //               infowindow.setContent(locations[i][1]);
  //               infowindow.setOptions({maxWidth: 200});
  //               infoWindow.open(map, marker);
  //           }
		// 	})(marker, i));
		// 	Markers[locations[i][4]] = marker;


		// }

	// 	locate(0);

	// function locate(marker_id) {
	// 	var myMarker = Markers[marker_id];
	// 	var markerPosition = myMarker.getPosition();
	// 	map.setCenter(markerPosition);
	// 	google.maps.event.trigger(myMarker, 'click');
	// }

	// google.maps.event.addDomListener(window, 'load', initialize);





	// function initMap() {
 //    var map;
 //    var bounds = new google.maps.LatLngBounds();
 //    var mapOptions = {
 //        mapTypeId: 'ROADMAP'
 //    };
                    
    
    // map = new google.maps.Map(document.getElementById("mapCanvas"), mapOptions);
    // map.setTilt(50);

		

		// var infoWindowContent = [
  //       ['<div class="info_content">' +
  //       '<h3>Joshua Tree</h3>' +
  //       '<p>Joshua Tree is an art museum located in the New York City borough of Brooklyn.</p>' + '</div>'],
  //       ['<div class="info_content">' +
  //       '<h3>Mount Pinos</h3>' +
  //       '<p>Mount Pinos is the public library system of the borough of Brooklyn, in New York City.</p>' +
  //       '</div>'],
  //       ['<div class="info_content">' +
  //       '<h3>Mount Hollywood</h3>' +
  //       '<p>Mount Hollywood is a 12-acre (4.9 ha) zoo located off Flatbush Avenue on the eastern side of Prospect Park, Brooklyn, New York City.</p>' +
  //       '</div>'],
  //       ['<div class="info_content">' +
  //       '<h3>Mount Baldy</h3>' +
  //       '<p>Mount Baldy is an art museum located in the New York City borough of Brooklyn.</p>' + '</div>'],
  //       ['<div class="info_content">' +
  //       '<h3>Mount Baden-Powell</h3>' +
  //       '<p>Mount Baden-Powell is a 12-acre (4.9 ha) zoo located off Flatbush Avenue on the eastern side of Prospect Park, Brooklyn, New York City.</p>' +
  //       '</div>']
  //   	];

    	// var infoWindow = new google.maps.InfoWindow(), marker, i;

		// var contentString = 'Hello';

		//  var infowindow = new google.maps.infoWindow({
		//  	content: contentString
		// });

		// var marker, i;

		


	// 	map.fitBounds(bounds);
	// }
	// var boundsListener = google.maps.event.addListener((map), 'bounds_changed', function(event) {
 //        this.setZoom(14);
 //        google.maps.event.removeListener(boundsListener);
 //    });
    
	

	// google.maps.event.addDomListener(window, 'load', initMap);



// Load initialize function
	// google.maps.event.addDomListener(window, 'load', initMap);
		// var infowindow = new google.maps.infoWindow({
		// 	content: "Hello"
		// 	});
// 
			// google.maps.event.addListener(marker,'click,' function(){
			// infowindow.open(map,marker);
			// });

		

			// marker.addListener('click', function(){
			// 	infowindow.open(map, marker);
			// });

			// google.maps.event.addListener(map, 'click', function(event) {
   // 			InfoWindow(event);
  	// 		});

			// google.maps.event.addListener(marker,'click', (function(marker, i) {
			// return function() {
			// 	infowindow.contentString(locations[i][0]);
			// 	infowindow.open(map, marker);
			// }
			


		// })(marker, i));
			
	
			

		

	// function initMap() {
	// 	var Joshua Tree = {lat: 33.8734, lng: -115.9010};

	// 	var map = new google.maps.Map(document.getElementById('map'), {
	// 		zoom: 4,
	// 		center: Joshua Tree
	// 	});

	// 	var marker = new google.maps.Marker({
	// 		position: Joshua Tree,
	// 		map: map,
	// 		title: 'Joshua Tree'
	// 	});

	// }

		// var contentString = '<div id="content">' +
		// '<div id="siteNotice">'+
		// '</div>'+
		// '<h1 id="fistHeading"class="firstHeading">Joshua Tree</h1>'+
		// '<div id="bodyContent">'+
		// '<p><b>Joshua Tree</b>, xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'+
		// 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'+
		// 'Northern Territory,xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'+
		// '</p>'+
		// '</div>'+
		// '</div>';

		
		

		// marker.addListener('click', function() {
		// 	infoWindow.open(map,marker);
		// })





















	

