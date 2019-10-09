// Fashion Bot

// Based on the temperature range, weather conditions and activity choose the appropriate outfit for the day. Must use conditionals, nested conditionals and prompts to return outfit in a 'alert' box. hint: MDN alert

// ~~~~~~~~~

var temp = prompt("What is the current temperature (in °F)?");
var cool = 0;       var coolWear = "";
var cold = 0;       var coldWear = "";
var warm = 0;       var warmWear = "";
var hot = 0;        var hotWear = "";
var rainy = 0;      var rainyWear = "";
var humid = 0;      var humidWear = "";

if (temp <=11) {
    alert("Did you ever consider NOT going outside?");
}
if (temp >=12 && temp <= 46) {
    cold = cold + 1;
    var coldRain = prompt("Will it snow/hail/rain? (Yes/No)");
        if (coldRain == "Yes" || coldRain == "YES" || coldRain == "yes" || coldRain == "y") {
            rainy = rainy + 1;
        }
    // COLD End Conditions
    if (cold>=1 && rainy>=1){
        confirm("For COLD, RAINY weather ranging between 12° and 46°, you should wear...");
    } else {
        confirm("For COLD weather ranging between 12° and 46°, you should wear...");
    }
}
if (temp >=47 && temp <=69) {
    cool = cool + 1;
    var coolRain = prompt("Will it rain? (Yes/No)");
    if (coolRain == "yes") {
        rainy = rainy + 1;
    }
    var coolHumid = prompt("Is it humid? (Yes/No)");
    if (coolHumid == "yes") {
        humid = humid + 1;
    }
}
if (temp >=70 && temp <=81) {
    var warmRain = prompt("Will it rain? (Yes/No)");
    if (warmRain == "yes") {
        rainy = rainy + 1;
    }
    var warmHumid = prompt("Is it humid? (Yes/No)");
    if (warmHumid == "yes") {
        humid = humid + 1;
    }
}
if (temp >=81 && temp <=103) {
    var hotRain = prompt("Will it rain? (Yes/No)");
    if (hotRain == "yes") {
        rainy = rainy + 1;
    }
    var hotHumid = prompt("Is it humid? (Yes/No)");
    if (hotHumid == "yes") {
        humid = humid + 1;
    }
}
if (temp >= 104) {
    alert("WARNING: It's way too hot to be outside comfortably for longer than 20 seconds. If you decide to go outside anyways, I recommended not wearing any clothes at all. Maybe take off your skin too.");
} 