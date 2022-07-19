var playerName;

var startButtonElement;

//add click events
function addEvents() {
    startButtonElement = document.getElementById('startButton');
    startButtonElement.addEventListener("click", function () {
        localStorage.setItem('playerName', playerName);
        saveName();
    });
}

//add new player name to names array
function addNewPlayer(_playerName, _playersArray) {
    _playersArray.push(_playerName);
    return _playersArray;
}

//check name input value
function checkNameValue() {
    var formElement = document.getElementById('formContent');
    var labelElement = document.getElementById('labelName');
    var nameValue = document.getElementById('inputName').value;
    var buttonDisabled = nameValue ? false : true;
    startButtonElement.disabled = buttonDisabled;
    if (!nameValue) {
        formElement.classList.add("class-name-required");
        labelElement.classList.remove("class-label-top");
    } else {
        formElement.classList.remove("class-name-required");
        labelElement.classList.add("class-label-top");
    }
    playerName = nameValue;
}

//save player name to local storage array
function saveName() {
    var playersArray = new Array();
    if (localStorage.getItem('namesArray')) {
        playersArray = JSON.parse(localStorage.getItem('namesArray'));
    }
    const equalsArray = playersArray.filter(name => name == playerName);
    if (equalsArray.length == 0) {
        playersArray = addNewPlayer(playerName, playersArray);
        localStorage.setItem('namesArray', JSON.stringify(playersArray));
    }
}

//export functions for unit tests
if (typeof module !== 'undefined') {
    module.exports = {
        addNewPlayer: addNewPlayer
    }
}