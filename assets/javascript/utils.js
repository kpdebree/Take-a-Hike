var CLIENT_ID = "JMRL0LMRP5KL2BKOT5MJGGADP4FGW1RB1NDY53ENOVEN5KR3";
var CLIENT_SECRET = "1D32DJ1AOTCPXDGR4VFWYQTFR2DEE24NYS1YQV41SLFGUBNL";
var location;
var current_date = new Date();
var dateString = current_date.toISOString().slice(0,10).replace(/-/g,"");
var venue;
var venueInfo;
var response;



// var query_url = 'https://api.foursquare.com/v2/venues/search?' + '&client_id=' + CLIENT_ID + '&client_secret=' + CLIENT_SECRET +
    // '&section=trails&ll=' + String(location.lat) + ',' + String(location.lng) + '&v=' + dateString +'&query=' + location.title;
var query_url = 'https://api.foursquare.com/v2/venues/search?&client_id=JMRL0LMRP5KL2BKOT5MJGGADP4FGW1RB1NDY53ENOVEN5KR3&client_secret=1D32DJ1AOTCPXDGR4VFWYQTFR2DEE24NYS1YQV41SLFGUBNL&section=trails&ll=34.8128,-119.1454&v=20171012&query=Mount%20Pinos;'

// var infoUrl = "https://api.foursquare.com/v2/venues/search?client_id=X3JOZJUYLFFFB22HKOYSX0FSX30LZFP0DRPUE2E2WP04MMFU&client_secret=I0L2CGALFX1S5DC0NWEUGKNMUUUTKHGGJXKPB2YSQJWBBDTB&section=trails&ll="
//             + String(location.lat) + "," + String(location.lng) + "&v=" + dateStr + "&query=" + marker.title;


function foursquareRequest(url) {
    var httpRequest = new XMLHttpRequest();
    if (!httpRequest) {
        alert("Sorry, we can't connect to the foursquare database")
        return false;
    }

    httpRequest.onreadystatechange = function () {
        if (httpRequest.readyState == XMLHttpRequest.DONE) {
            if (httpRequest.status == 200) {
                var f_response = JSON.parse(httpRequest.responseText);
                getVenueInfo(f_response)
            } else if (httpRequest.status == 400) {
                alert('There was an error 400');
            } else {
            alert('Error, something other than 200 was returned');
             }
        }
    };

    httpRequest.open('GET', url);
    httpRequest.send();
};



function getVenueInfo(data) {
    venue = data.response.venues[0];
    console.log (venue)
    venueInfo = {
        name: venue.name,
        location: venue.location.city + ", " + venue.location.state,
        checkins: venue.stats.checkinsCount,
        id: data.response.venues[0].id
    };
    console.log(venueInfo)
}


function weatherRequest(url) {
    var httpRequest = new XMLHttpRequest();
    if (!httpRequest) {
        alert("Sorry, we can't connect to the foursquare database")
        return false;
    }

    httpRequest.onreadystatechange = function () {
        if (httpRequest.readyState == XMLHttpRequest.DONE) {
            if (httpRequest.status == 200) {
                var w_response = JSON.parse(httpRequest.responseText);
                console.log("Name: " + w_response.name)
                var temp = (w_response.main.temp - 273) * (5 / 9) + 32;
                console.log("Temp: " + w_response.main.temp)
                console.log("Temp: " + temp)
                console.log("Weather: " + w_response.weather[0].main + " " + w_response.weather[0].description)
            } else if (httpRequest.status == 400) {
                alert('There was an error 400');
            } else {
            alert('Error, something other than 200 was returned');
            console.log(httpRequest.responseText)
             }
        }
    };

    httpRequest.open('GET', url);
    httpRequest.send();
};

function weather() {
  for (i = 0; i < locations.length; i++) {
      var query_url = "http://api.openweathermap.org/data/2.5/weather?lat=" + locations[i].lat + "&lon=" + locations[i].lng + "&appid=5fea5bb7daa140b575bd56da497c455f";
      console.log(query_url)
      weatherRequest(query_url);
  }
}

function foursquare() {
  for (i = 0; i < locations.length; i++) {
      var query_url = "https://api.foursquare.com/v2/venues/search?&client_id=" + CLIENT_ID + "&client_secret=" + CLIENT_SECRET + "&section=trails&ll=" +locations[i].lat + "," + locations[i].lng + "&v=" + dateString + "&query=" + locations[i].name;
      console.log(query_url)
      foursquareRequest(query_url);
  }
}