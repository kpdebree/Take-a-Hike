var weather_apikey = "5fea5bb7daa140b575bd56da497c455f";



function initMap() {
    var map;
    var bounds = new google.maps.LatLngBounds();
    var mapOptions = {
        mapTypeId: 'terrain'
    };
                    
    // Display a map on the web page
    map = new google.maps.Map(document.getElementById("mapCanvas"), mapOptions);
    map.setTilt(50);

      var infoWindow = new google.maps.InfoWindow(), marker, i;
    
    // Place each marker on the map  
    for( i = 0; i < locations.length; i++ ) {
        console.log(locations[i])
        var position = new google.maps.LatLng(locations[i].lat, locations[i].lng);
        bounds.extend(position);
        var marker = new google.maps.Marker({
            position: position,
            map: map,
            title: locations[i].name
        });

         google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
                infoWindow.setContent('<div class="info_content"><h3>' + locations[i].name + '</h3> <IMG BORDER="0" ALIGN="Left" SRC="' + locations[i].photo + '" height=100px width=100px>'
                  + '<p>Joshua Tree is an art museum located in the New York City borough of Brooklyn.</p>' + '</div>'
                );
                weather();

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
  // Load initialize function
google.maps.event.addDomListener(window, 'load', initMap);  
}


function weather(){

      for (i = 0; i < locations.length; i++) {
      // console.log(markers[i]);

      console.log("Location name: " + locations[i].name);

    // weather info
      var longitude = locations[i].lng;
       console.log("longitude: " + longitude);
      var latitude = locations[i].lat;
       console.log("latitude: " + latitude);
      var APIKey = "058e52fd52e54f1043d30a1ad70a482e";
      var queryURL = "https://api.darksky.net/forecast/058e52fd52e54f1043d30a1ad70a482e/33.87342,%20-115.90099";
      var proxy = 'https://cors-anywhere.herokuapp.com/';
      var apiLinkDS = "https://api.darksky.net/forecast/" + APIKey + "/" + latitude + ",%20" + longitude;

      console.log("apiLinkDS: " + apiLinkDS);
      console.log("queryURL: " + queryURL);

      // $("#location-name").html("<h1>Current Weather in " + location[i].name + "</h1>");

    }

    $.ajax({
      xhrFields: {
      withCredentials: true
    },
      url: proxy + apiLinkDS,
      method: "GET",
      success:function(data) { 
        console.log(data);
        // console.log(data.currently);
        console.log("Current Temperature: " + data.currently.temperature + "F");
        console.log("Current Skies: " + data.currently.summary);
        console.log("Tomorrow's High: " + data.daily.data[0].temperatureHigh + "F");
        console.log("Current alerts: " + data.alerts[0].title);


      // $("#current-temperature").html("<p>Current temperature: " + data.currently.temperature + "F</p>");
      // $("#current-skies").html("<p>Current skies: " + data.currently.icon + " " + data.currently.summary);
      // $("#tomorrow-high").html("<p>Tomorrow's High: " + data.daily.data[0].temperatureHigh + "F</p>");
      // $("#alerts").html("<p>Current alerts: " + "<span class='text-danger'>" + data.alerts[0].title + "</p>");
    }, //end of success function
  })//end of ajax
}// end of weather function

$(document).ready(function() { 

	initMap();
  // getDataTest();
});