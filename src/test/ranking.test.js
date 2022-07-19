var ranking = require('../ranking/ranking');

describe('Test sort by score', () => {
    test('Result greater than', () => {
        expect(ranking.sortArrayByScore(5, 1)).toBe(-1);
    });
    test('Result less than', () => {
        expect(ranking.sortArrayByScore(1, 5)).toBe(1);
    });
    test('Result equal', () => {
        expect(ranking.sortArrayByScore(1, 1)).toBe(0);
    });
});

describe('Test sort by autoClick', () => {
    test('Result sort players array', () => {
        var playersArrayInitial = [
            { playerName: 'abc', playerScore: 103, playerAutoClick: 0 },
            { playerName: 'def', playerScore: 53, playerAutoClick: 1 }
        ];
        var playersArrayResult = [
            { playerName: 'def', playerScore: 53, playerAutoClick: 1 },
            { playerName: 'abc', playerScore: 103, playerAutoClick: 0 }
        ]
        expect(ranking.sortArrayByAutoClick(playersArrayInitial)).toEqual(playersArrayResult);
    });
});