
var rankingArray = new Array();

//sort players array first by autoClick value and then by score
function sortPlayersArray() {
    if (rankingArray) {
        rankingArray = sortArrayByAutoClick(rankingArray);
        createElements();
    }
}

//sort players array by auto clicks value
function sortArrayByAutoClick(rankingArray) {
    return rankingArray.sort(function (a, b) {
        if (a.playerAutoClick < b.playerAutoClick) {
            return 1;
        } if (a.playerAutoClick > b.playerAutoClick) {
            return -1;
        }
        if (a.playerAutoClick == b.playerAutoClick) {
            return sortArrayByScore(a.playerScore, b.playerScore);
        }
    });
}

//sort players array by score value
function sortArrayByScore(a, b) {
    if (a < b) {
        return 1;
    } if (a > b) {
        return -1;
    }
    return 0;
}

//create ranking list
function createElements() {
    const list = document.createElement('ol');
    var cont = 0;
    rankingArray.forEach(item => {
        cont++;
        const listItem = document.createElement('li');
        listItem.innerHTML = 'Name: <b>' + item.playerName + '</b> | AutoClick: <b>' + item.playerAutoClick + '</b> | Score: <b>' + item.playerScore + '</b>';
        switch (cont) {
            case 1:
                const image1 = document.createElement('img');
                image1.src = '../images/oro.png';
                listItem.appendChild(image1);
                break;
            case 2:
                const image2 = document.createElement('img');
                image2.src = '../images/plata.png';
                listItem.appendChild(image2);
                break;
            case 3:
                const image3 = document.createElement('img');
                image3.src = '../images/bronce.png';
                listItem.appendChild(image3);
                break;
            default:
                break;
        }
        list.append(listItem);
    });
    document.getElementById('rankingContent').append(list);
}

//navigate to back
function goBack() {
    window.location.href = '../game/game.html'
}

//initialize players array
function initializeRanking() {
    var namesArray = new Array();
    namesArray = JSON.parse(localStorage.getItem('namesArray'));
    namesArray.forEach(name => {
        if (name) {
            rankingArray.push({
                'playerName': name,
                'playerScore': JSON.parse(localStorage.getItem(name)).playerScore,
                'playerAutoClick': JSON.parse(localStorage.getItem(name)).playerAutoClick,
            });
        }
    });
    sortPlayersArray();
}

//export functions for unit tests
if (typeof module !== 'undefined') {
    module.exports = {
        sortArrayByAutoClick: sortArrayByAutoClick,
        sortArrayByScore: sortArrayByScore
    }
}
