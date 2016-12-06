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
    // get today's date
    // var todaysDate = new Date();
    // var day = getDate();
    // var month = getMonth()+1;
    // var getDateOutput =


    // call OpenWeatherMap API
    var openWeatherRequest = $.get("http://api.openweathermap.org/data/2.5/forecast/daily", {
        APPID: "b4197e496c4b73186de7934cf48d40d6",
        id: 4726206,
        units: "imperial",
        cnt: 3
    });
    openWeatherRequest.done(function (data) {
        console.log(data);
        setCityNameFromResponse(data);

        data.list.forEach(function (object) {
            var weatherData = {
                maxTemp: getMaxTemp(object),
                minTemp: getMinTemp(object),
                humidity: getHumidity(object),
                wind: getWind(object),
                pressure: getPressure(object),
                icon: getIcon(object),
                description: getDescription(object)
            };
            weatherArray.push(weatherData);

        });
        var mainTable;
        weatherArray.forEach(function (object) {
            mainTable =
                '<div class="col-sm-3">' +
                '<p><strong>Date</strong></p>' +
                object.maxTemp + " / " + object.minTemp + '</p>' +
                '<img src="http://openweathermap.org/img/w/' + object.icon + '.png"><p>' + object.description + '</p>' +
                '<p><em>Humidity: </em>' + object.humidity + '%</p>' +
                '<p><em>Wind: </em>' + object.wind + ' mph</p>' +
                '<p><em>Barometer: </em>' + object.pressure + ' hPa</p>'
                '</div>'
            console.log(object.icon);
            $('#weather-report').append(mainTable);
        });
    });
});