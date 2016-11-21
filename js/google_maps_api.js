/**
 * Created by Harry on 11/21/16.
 */
"use strict";

(function () {

    // Set our map options
    var mapOptions = {
        // Set the zoom level
        zoom: 10,

        // This sets the center of the map at our location
        center: {
            lat: 29.426791,
            lng: -98.489602
        }
    };

// Set address to geocode
    var address = "3211 Wurzbach Rd, San Antonio, TX 78238";

// Init geocoder object
    var geocoder = new google.maps.Geocoder();

// Geocode our address
    geocoder.geocode({"address": address}, function (results, status) {

        // Check for a successful result
        if (status == google.maps.GeocoderStatus.OK) {

            // Recenter the map over the address
            map.setCenter(results[0].geometry.location);
        } else {

            // Show an error message with the status if our request fails
            alert("Geocoding was not successful - STATUS: " + status);
        }
    });
// Create lat and long for our marker position
    var pengsChinese = {lat: 29.466604, lng: -98.624213};

// Create a new infoWindow object with content
    var infowindow = new google.maps.InfoWindow({
        content: "Peng\'s Chinatown Chinese."
    });

    var contentPengs = '<div id="content">' +
        '<div id="siteNotice">' +
        '</div>' +
        '<h1 id="firstHeading" class="firstHeading">Peng\'s Chinatown Chinese</h1>' +
        '<div id="bodyContent">' +
        '<p><b>Peng\'s Chinatown Chinese</b> is a rarity among most Chinese restaurants; it doesn\'t offer a buffet. The food is cooked fresh and to order, and the cooks don\'t balk at making changes to their signature dishes. I enjoy the Beef Lo Mein with no veggies, myself.</p>' +
        '</div>' +
        '</div>';

    // Render the map
    var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

    var infowindow = new google.maps.InfoWindow({
        content: contentPengs,
        maxWidth: 300
    })

    // Add the marker to our existing map
    var marker = new google.maps.Marker({
        position: pengsChinese,
        map: map,
        animation: google.maps.Animation.DROP,
        icon: "img/rice-512-copy.png"
    });
    marker.addListener('click', toggleBounce);

    function toggleBounce() {
        if (marker.getAnimation() !== null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }
    }

    // Open the window using our map and marker
    marker.addListener('click', function () {
        infowindow.open(map, marker);
    });
})();

var json = [];
    {
        position: pengsChinese,
        name: "Peng\'s Chinatown Chinese",
        address: "3211 Wurzbach Rd, San Antonio, TX 78238",
        lat: 29.466604,
        long: -98.624213,
        icon: "img/rice-512-copy.png",
        narrative: "<b>Peng\'s Chinatown Chinese</b> is a rarity among most Chinese restaurants; it doesn\'t offer a buffet. The food is cooked fresh and to order, and the cooks don\'t balk at making changes to their signature dishes. I enjoy the Beef Lo Mein with no veggies, myself."
    };
    {
        "position": texasRoadhouse
        "name": "Texas Roadhouse",
        "address": "2893 Cinema Ridge, San Antonio, TX 78238",
        "lat": 29.463242,
        "long": -98.619974,
        "icon": "img/food_steak-512-copy.png",
        "narrative": "<b>Texas Roadhouse</b> is part of the national chain of restaurants, but these people know how to cook steaks. A tip: don\'t eat all of the rolls, no matter how delicious they are. You want to save room for your steak. Also call ahead: you can\'t make reservations, but you can reduce your wait time on arrival."
    };
    {
        "position": countyLine
        "name": "The County Line",
        "address": "10101 W IH 10, San Antonio, Texas 78230, San Antonio, TX 78230",
        "lat": 29.537768,
        "long": -98.567388,
        "icon": "img/barbecue_21-512-copy.png",
        "narrative": "<b>The County Line</b> has two locations in San Antonio; but go to the one on I-10. The one on the Riverwalk tends to be busy. Best barbecue in San Antonio, especially for beef ribs."
    }
console.log(json.length);

}