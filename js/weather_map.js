/**
 * Created by Harry on 12/5/16.
 */

$(document).ready(function () {
    "use strict";
    var setCityNameFromResponse = function (data) {
        $("#current-city").html(data.city.name);
    };

    var weatherArray = [];
    var setForecast = document.getElementsByClassName("forecast");

    var getMaxTemp = function (data) {
        return data.temp.max;
    };
    var getMinTemp = function (data) {
        return data.temp.min;
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


    // get today's date
    // var todaysDate = new Date();
    // var day = getDate();
    // var month = getMonth()+1;
    // var getDateOutput =


    // call OpenWeatherMap API
    var openWeatherRequest = $.get("http://api.openweathermap.org/data/2.5/forecast/daily", {
        APPID: "b4197e496c4b73186de7934cf48d40d6",
        q: "San Antonio, TX",
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
                pressure: getPressure(object)
            };
            weatherArray.push(weatherData);

        });
        var mainTable;
        weatherArray.forEach(function (object) {
            mainTable =
                '<div class="col-md-4">' +
                '<p><strong>Date</strong></p>' + '<br>' +
                object.maxTemp + " / " + object.minTemp + '<br>' +
                '<p><em>Humidity</em></p>' + object.humidity + '<br>' +
                '<p><em>Wind</em></p>' + object.wind + '<br>' +
                '<p><em>Barometer</em></p>' + object.pressure +
                '</div>'

            $('#weather-report').append(mainTable);
        });
    });
});