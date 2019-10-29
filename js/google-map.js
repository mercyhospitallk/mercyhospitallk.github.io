
var google;

function init() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    // var myLatlng = new google.maps.LatLng(40.71751, -73.990922);
    var myLatlng = new google.maps.LatLng(7.438001, 81.812957);
    // 39.399872
    // -8.224454
    
    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 15,

        // The latitude and longitude to center the map (always required)
        center: myLatlng,

        // How you would like to style the map. 
        scrollwheel: false,
        styles: [
            {
                "featureType": "administrative.country",
                "elementType": "geometry",
                "stylers": [
                    {
                        "visibility": "simplified"
                    },
                    {
                        "hue": "#ff0000"
                    }
                ]
            }
        ]
    };

    

    // Get the HTML DOM element that will contain your map 
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map');

    // Create the Google Map using out element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);
    
    var addresses = ['Maruthamunai'];

    for (var x = 0; x < addresses.length; x++) {
        $.getJSON('https://maps.googleapis.com/maps/api/geocode/json?address=Mercy+Hospital,+01,Main+street,Maruthamunai-01.,+Maruthamunai+32314,+Sri+Lanka&key=AIzaSyBE2kpNzxI6BfWU606PwhaL9Lj29rDMpc4', null, function (data) {
            var p = data.results[0].geometry.location
            var latlng = new google.maps.LatLng(p.lat, p.lng);
            new google.maps.Marker({
                position: latlng,
                map: map,
                icon: 'images/loc.png',
                // labelOrigin: { x: 12, y: -10},
                label:'Mercy Hospital',
                // labelContent: place["place_name"],
                // labelAnchor: new google.maps.Point(20, 0),
                // labelClass: "labels", // the CSS class for the label
                // labelStyle: {opacity: 0.75}
            });

        });
    }
    
}
google.maps.event.addDomListener(window, 'load', init);
