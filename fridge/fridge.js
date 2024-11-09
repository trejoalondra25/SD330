function doStartClock() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('timePar').innerHTML = h + ":" + m + ":" + s;
    setTimeout(doStartClock, 1000);
}
function checkTime(i) {
    if (i < 10) { i = "0" + i };
    return i;
}

let is24HourFormat = true;
function doStartClock() {
    setInterval(() => {
        const today = new Date();
        let h = today.getHours();
        let m = checkTime(today.getMinutes());
        let s = checkTime(today.getSeconds());

        if (!is24HourFormat) {
            h = h % 12 || 12;
        }

        const timeString = `${h}:${m}:${s}`;
        document.getElementById('timePar').innerHTML = timeString + (is24HourFormat ? "" : (h >= 12 ? " AM" : " PM"));
    }, 500);
}

function checkTime(i) {
    return i < 10 ? "0" + i : i;
}
function toggleTimeFormat() {
    is24HourFormat = !is24HourFormat; // Switch the format
}

var pic = document.getElementById('home1');

function black() {
    hideTemperatureControls();
    hideimageControls();

    pic.src = "https://w0.peakpx.com/wallpaper/410/412/HD-wallpaper-plain-black-black.jpg";
    var audio = document.getElementById("audio");
    audio.pause();

}
function view() {
    hideTemperatureControls();
    hideimageControls();

    pic.src = "https://www.mydomaine.com/thmb/n8rBJ29AmT0AhD95KFaeHUsQyl8=/1192x0/filters:no_upscale():strip_icc()/fridge-organization-ideas-2-breathing-room-3fd52372dcb249449087afac9d991702.png";
    var audio = document.getElementById("audio");
    audio.pause();
}
function disney() {
    hideTemperatureControls();
    hideimageControls();

    pic.src = "https://miro.medium.com/v2/resize:fit:1400/1%2ALeSvDnTsdrwQfN0s_fbGLQ.png";
    var audio = document.getElementById("audio");
    audio.pause();
}
function browser() {
    hideTemperatureControls();
    hideimageControls();
    pic.src = "https://www.partitionwizard.com/images/uploads/articles/2021/03/bing-search-history/bing-search-history-1.jpg";
    var audio = document.getElementById("audio");
    audio.pause();
}

function television() {
    hideTemperatureControls();
    hideimageControls();
    pic.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-gjQeEoEsH2_9UyjvFSemwAmbNiuIKuAtGQ&s";
    var audio = document.getElementById("audio");
    audio.play();
    var audio2 = document.getElementById("music");
    audio2.pause();
}

function Listen() {
    hideTemperatureControls();
    var audio2 = document.getElementById("music");
    audio2.play();
    const audioDisplay = document.getElementById('imageControls');
    const displayImage = document.getElementById('home1');

    settingsActive = !settingsActive;

    if (settingsActive) {
        audioDisplay.style.display = "block";
        displayImage.style.display = "none";
    } else {
        audioDisplay.style.display = "none";
        displayImage.style.display = "block";
    }

    var audio = document.getElementById("audio");
    audio.pause();
}
//function toggleMusic() {
//const audio = document.getElementById("music");
//const playPauseBtn = document.getElementById("playPauseBtn");

var myAudio = document.getElementById("music");
function play() {
    myAudio.play();
}


//}
function hideimageControls() {
    document.getElementById('imageControls').style.display = "none";
    document.getElementById('home1').style.display = "block"; // Show the display image
    settingsActive = false; // Reset settings active state
}

function seeWeather() {
    hideTemperatureControls();
    hideimageControls();
    pic.src = "https://filestore.community.support.microsoft.com/api/images/deaa2939-33bd-4727-9ece-cf51a6898722?upload=true"
    var audio = document.getElementById("audio");
    audio.pause();
}

let temperatureF = Math.floor(Math.random() * (5 - 65 + 1)) + 65; // Random temp between 65°F and 85°F
let isFahrenheit = true;
function displayTemperature() {

    const temperatureDisplay = document.getElementById('temperatureDisplay');
    if (isFahrenheit) {
        temperatureDisplay.textContent = `Temp: ${temperatureF}°F`;
    } else {
        const temperatureC = Math.round((temperatureF - 32) * (5 / 9)); // Convert to Celsius
        temperatureDisplay.textContent = `Temp: ${temperatureC}°C`;
    }
    displayTemperature();
}
document.getElementById("increaseTempBtn").addEventListener("click",
    function increase() {
        temperatureF++;
        displayTemperature(); // Update display
    }

);


// Function to decrease the temperature
function decrease() {
    temperatureF--;
    displayTemperature(); // Update display
}

// toggles between Fahrenheit and Celsius
function toggleTempUnit() {
    isFahrenheit = !isFahrenheit; // Toggle unit
    displayTemperature(); // Update display
}

// toggle temperature controls when Settings is clicked
function settings() {
    hideimageControls()
    const temperatureControls = document.getElementById('temperatureControls');
    const displayImage = document.getElementById('home1');

    settingsActive = !settingsActive; // Toggle settings active state

    if (settingsActive) {
        temperatureControls.style.display = "block"; // Show temperature controls
        displayImage.style.display = "none"; // Hide display image
    } else {
        temperatureControls.style.display = "none"; // Hide temperature controls
        displayImage.style.display = "block"; // Show display image
    }
    var audio = document.getElementById("audio");
    audio.pause();
    displayTemperature();
}

// function to hide temperature controls and show image
function hideTemperatureControls() {
    document.getElementById('temperatureControls').style.display = "none";
    document.getElementById('home1').style.display = "block"; // Show the display image
    settingsActive = false; // Reset settings active state
}

function countDown() {

}

// function to hide temperature controls and show image


function hideShow() {
    document.getElementById("homBtn").style.display = "block";
}

// Toggle visibility of buttons and image, only displaying the time when toggled off
function hideShow() {
    const buttons = document.querySelectorAll('#homBtn, #timerBtn, #shelfBtn, #disneyBtn, #browserBtn, #settingBtn, #teleBtn, #MusicBtn, #weatherBtn, #timerBtn, #shoppingBtn');
    const image = document.getElementById('home1');
    const temp = document.getElementById("temperatureControls");
    const music = document.getElementById("imageControls");
    const shop = document.getElementById("shoppingListControls");

    // Check if buttons and image are currently hidden
    const isHidden = Array.from(buttons).every(button => button.style.display === "none") && image.style.display === "none" &&
        temp.style.display === "none" && music.style.display === "none" && shop.style.display === "none";



    buttons.forEach(button => {
        button.style.display = isHidden ? "block" : "none";
    });


    image.style.display = "none";
    temp.style.display = "none";
    music.style.display = "none";
    shop.style.display = "none";

    var audio = document.getElementById("audio");
    audio.pause();

    var audio2 = document.getElementById("music");
    audio2.pause();
}

let shoppingListVisible = false;


function toggleShoppingList() {
    hideTemperatureControls();
    hideimageControls();

    const shoppingListControls = document.getElementById('shoppingListControls');
    const displayImage = document.getElementById('home1');

    shoppingListVisible = !shoppingListVisible;

    if (shoppingListVisible) {
        shoppingListControls.style.display = "block";
        displayImage.style.display = "none";
    } else {
        shoppingListControls.style.display = "none";
        displayImage.style.display = "block";
    }
}


function addItem() {
    const newItem = document.getElementById('newItem').value.trim();

    if (newItem) {
        const listItem = document.createElement('li');
        listItem.textContent = newItem;

        document.getElementById('shoppingList').appendChild(listItem);
        document.getElementById('newItem').value = "";  // Clear the input box
    }
}

function hideShoppingList() {
    const shoppingListControls = document.getElementById('shoppingListControls');
    shoppingListControls.style.display = "none";
    shoppingListVisible = false;
}

document.querySelectorAll('#shelfBtn, #disneyBtn, #browserBtn, #settingBtn, #teleBtn, #MusicBtn, #weatherBtn, #timerBtn')
    .forEach(button => {
        button.addEventListener('click', hideShoppingList);
    });













