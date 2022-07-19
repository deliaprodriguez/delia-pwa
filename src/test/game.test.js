var game = require('../game/game');

describe('Test decrease score', () => {
    test('Result player score after get auto clicks', () => {
        expect(game.decreaseScore(51, 50)).toBe(1);
    });
});

describe('Test increase autoClick ', () => {
    test('Result player autoClick after increase', () => {
        expect(game.increaseAutoClick()).toBe(1);
    });
});

describe('Test increase score', () => {
    test('Result player score after increase', () => {
        expect(game.increaseScore()).toBe(1);
    });
});

describe('Test increase autoClick increment', () => {
    test('Result player current autoClick increment', () => {
        expect(game.increaseAutoClickIncrement()).toBe(100);
    });
});