var htmlString = "<h2> MARIST PARKING </h2> <p>";
//some test to demonstrate variables 

const response =
    await fetch("https://trejoalondra25.github.io/SD330/parking.json");
const data =
    await response.json();
htmlString += "<p> The name of 306-111 is: " + data['parkingLots'][''];
htmlString += "<p> The courses in the file are:";
let keys = Object.keys(data["parkingLots"]);
for (let i in keys) {
    let thisKey = keys[i];
    htmlString += "<br> lots #" + i + "" + thisKey + "";
}

document.getElementById('info').innerHTML += htmlString;



