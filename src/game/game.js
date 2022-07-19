
const INITIAL_INCREMENT_VALUE = 50;
var autoClickIncrement = INITIAL_INCREMENT_VALUE;

var playerName;
var playerScore = 0;
var playerAutoClick = 0;

var autoClickCountDown;
var autoClickInterval;

var autoClickButtonElement;
var autoClickDivElement;
var autoClickTextElement;
var scoreTextElement;

//add autoclick behaviour
function autoClick() {
    playerAutoClick = increaseAutoClick();
    autoClickDivElement.style.display = 'flex';
    autoClickTextElement.innerHTML = playerAutoClick;
    saveValues();
    launchAutoClick();
}

//check autoClickButton should be dislpay
function checkAutoClickDisplay() {
    if (playerAutoClick > 0 || playerScore > autoClickIncrement) {
        autoClickIncrement = autoClickIncrement + autoClickIncrement * playerAutoClick;
        var buttonDisabled = playerScore < autoClickIncrement ? true : false;
        autoClickButtonElement.style.display = 'block';
        autoClickButtonElement.disabled = buttonDisabled;
        setAutoClickIncrement();
    }
}

//decrease score after get auto clicks
function decreaseScore(currentScore, clickIncrement) {
    return currentScore - clickIncrement;
}

//get DOM elements
function getElements() {
    autoClickButtonElement = document.getElementById("autoClickButton");
    autoClickDivElement = document.getElementById('autoClickDiv');
    autoClickTextElement = document.getElementById('autoClickValue');
    scoreTextElement = document.getElementById('scoreValue');
}

//navigate to home screen
function goToHome() {
    window.location.href = "../../index.html";
}

//increase player auto clicks
function increaseAutoClick() {
    return playerAutoClick + 1;
}

//increase auto clicks increment
function increaseAutoClickIncrement() {
    return autoClickIncrement + INITIAL_INCREMENT_VALUE;
}

//increase player score
function increaseScore() {
    return playerScore + 1;
}

//initialize player values from local storage
function initializeValues() {
    playerName = localStorage.playerName;
    document.getElementById('headerText').innerText = 'Welcome ' + playerName;
    getElements();
    savePlayerData();
    setValues();
    checkAutoClickDisplay();
}

//launch autoClick functionality
function launchAutoClick() {
    playerScore = decreaseScore(playerScore, autoClickIncrement);
    autoClickButtonElement.disabled = true;
    autoClickCountDown = autoClickIncrement;
    autoClickIncrement = increaseAutoClickIncrement();
    setAutoClickIncrement();
    autoClickInterval = setInterval(function () {
        if (autoClickCountDown - 1 >= 0) {
            scoreClick();
            autoClickCountDown--;
        } else {
            clearInterval(autoClickInterval);
        }
    }, 100);
}

//save initial player data to local storage
function savePlayerData() {
    var playerArray = {
        'playerScore': 0,
        'playerAutoClick': 0
    };
    if (localStorage.getItem(playerName)) {
        var playerData = JSON.parse(localStorage.getItem(playerName));
        playerScore = playerData.playerScore;
        playerAutoClick = playerData.playerAutoClick;
    } else {
        localStorage.setItem(playerName, JSON.stringify(playerArray));
    }
}

//save current values to local storage
function saveValues() {
    var playerArray = {
        'playerScore': playerScore,
        'playerAutoClick': playerAutoClick
    };
    localStorage.setItem(playerName, JSON.stringify(playerArray));
}

//recieve score click
function scoreClick() {
    playerScore = increaseScore();
    scoreTextElement.innerHTML = playerScore;
    saveValues();
    if (playerScore >= autoClickIncrement) {
        autoClickButtonElement.style.display = 'block';
        autoClickButtonElement.disabled = false;
        setAutoClickIncrement();
    }
}

//set autoClick increase data to element
function setAutoClickIncrement() {
    autoClickButtonElement.innerText = 'Buy score (' + autoClickIncrement + ')';
}

//set player data to score elements
function setValues() {
    scoreTextElement.innerHTML = playerScore;
    autoClickTextElement.innerHTML = playerAutoClick;
    autoClickDivElement.style.display = playerAutoClick > 0 ? 'flex' : 'none';
}

//navigate to ranking screen
function viewRanking() {
    window.location.href = "../ranking/ranking.html";
}

//export functions for unit tests
if (typeof module !== 'undefined') {
    module.exports = {
        decreaseScore: decreaseScore,
        increaseAutoClick: increaseAutoClick,
        increaseAutoClickIncrement: increaseAutoClickIncrement,
        increaseScore: increaseScore
    }
}