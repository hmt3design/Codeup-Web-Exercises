(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray;
    console.log(planetsArray);

    // TODO: Convert planetsString to an array, save it to planetsArray.
    var planetsArray = planetsString.split("|");
    console.log(planetsArray);

    // TODO: Create a string with <br> tags between each planet. console.log() your results.
    //       Why might this be useful?
    var planetsBR = planetsArray.join("<br>");
    console.log(planetsBR);

    // Bonus: Create a second string that would display your planets in an undordered list.
    //        You will need an opening AND closing <ul> tags around the entire string, and <li> tags around each planet.
    //        console.log() your results.

    var planetsUL = "<ul><li>" + planetsArray.join("</li><li>") + "</li></ul>";
            console.log(planetsUL);
})();
