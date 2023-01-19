const { calculateBowlingScore } = require('../src/bowlingGameUtility');
describe('Bowling Game Utility', () => {

  describe('Bowling game score calculator', () => {

    it('Should throw error when input is not array', () => {
      expect(() => { calculateBowlingScore('qwerty'); }).toThrow('Not an array');
    });

    it('Should throw error when input is not array of numbers', () => {
      expect(() => { calculateBowlingScore(['qwerty', 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3]); }).toThrow('Invalid element in array');
    });

    it('Should return wrong input when inputs don\'t add up', () => {
      expect(() => { calculateBowlingScore([8, 5, 3, 2]); }).toThrow('Invalid input');
    });

    it('Should return total score of a game when input is correct', () => {
      expect(calculateBowlingScore([3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6])).toBe(90);
    });

    it('Should return total score of a game when input is correct', () => {
      expect(calculateBowlingScore([10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10])).toBe(300);
    });

  });
});