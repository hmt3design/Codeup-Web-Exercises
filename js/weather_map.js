/**
 * Created by Harry on 12/5/16.
 */

$(document).ready(function () {
    "use strict";

    // Set our map options
    var mapOptions = {
        // Set the zoom level
        zoom: 13,

        // This sets the center of the map at our location
        center: {
            lat: 29.42412,
            lng: -98.493629
        }
    };

    // Render the map
    var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

    var setCityNameFromResponse = function (data) {
        $("#current-city").html(data.city.name);
    };

    var weatherArray = [];
    var setForecast = document.getElementsByClassName("forecast");

    var getMaxTemp = function (data) {
        return (Math.round(data.temp.max));
    };
    var getMinTemp = function (data) {
        return (Math.round(data.temp.min));
    };
    var getHumidity = function (data) {
        return data.humidity;
    };
    var getWind = function (data) {
        return data.speed;
    };
    var getPressure = function (data) {
        return data.pressure;
    };
    var getIcon = function (data) {
        return data.weather[0].icon;
    };
    var getDescription = function (data) {
        return data.weather[0].description;
    };
    var getLat = function (data) {
        return data.city.coord.lat;
    };
    var getLong = function (data) {
        return data.city.coord.lon;
    };

    var buildHTML = function(object) {
        return '<div class="col-sm-4">' +
            '<p><strong>' + object.day.format("dddd") + ',' + '<br>' +
            object.day.format("LL") + '</strong></p>' +
            object.maxTemp + " / " + object.minTemp + '</p>' +
            '<img src="http://openweathermap.org/img/w/' + object.icon + '.png"><p>' + object.description + '</p>' +
            '<p><em>Humidity: </em>' + object.humidity + '%</p>' +
            '<p><em>Wind: </em>' + object.wind + ' mph</p>' +
            '<p><em>Barometer: </em>' + object.pressure + ' hPa</p>' +
        '</div>';
    };

    // call OpenWeatherMap API

    var renderWeather = function (data) {
        setCityNameFromResponse(data);
        // console.log("Got weather data")
        weatherArray = [];
        var mainTable = '';
        data.list.forEach(function (object) {
            var weatherData = {
                maxTemp: getMaxTemp(object),
                minTemp: getMinTemp(object),
                humidity: getHumidity(object),
                wind: getWind(object),
                pressure: getPressure(object),
                icon: getIcon(object),
                description: getDescription(object),
                // get Momentjs.com date data
                day: moment.unix(object.dt)
            };
            weatherArray.push(weatherData);

        });

        weatherArray.forEach(function (object) {
            mainTable += buildHTML(object);
        });

        $('#weather-report').html(mainTable);

        // change map coordinates
        var coordinates = {
            lat: getLat(data),
            long: getLong(data)
        };

        document.getElementById("latitude").value = getLat(data);
        document.getElementById("longitude").value = getLong(data);

    }
    var getWeatherRequest = function (lat, lon) {
        // console.log("sendingWeatherRequest")
        $.get("http://api.openweathermap.org/data/2.5/forecast/daily", {
            APPID: "b4197e496c4b73186de7934cf48d40d6",
            // id: 4726206,
            lat: lat,
            lon: lon,
            units: "imperial",
            cnt: 3
        }).done(function (data) {
            renderWeather(data);
        });
    }
    getWeatherRequest(29.42412, -98.493629);

    $("#new-coordinates").click(function () {
        var newLat = document.getElementById("latitude").value;
        var newLong = document.getElementById("longitude").value;
        getWeatherRequest(newLat, newLong);
    });
});

// 21.281237, -157.835050