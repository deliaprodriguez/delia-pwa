var home = require('../index');

describe('Test add new player name', () => {
    test('Result players name array after add new player', () => {
        var playersArrayInitial = new Array();
        const playersArrayResult = ['delia']
        expect(home.addNewPlayer('delia', playersArrayInitial)).toEqual(playersArrayResult);
    });
});
