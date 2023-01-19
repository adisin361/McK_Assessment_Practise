const { calculateBowlingScore, findMaximumScore } = require('../src/bowlingGameUtility');
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

    it('Should return total score of a game when input is correct', () => {
      expect(calculateBowlingScore([6, 4, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])).toBe(16);
    });

    it('Should return total score of a game when input is correct', () => {
      expect(calculateBowlingScore([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10])).toBe(30);
    });
  });

  describe('Maximum bowling score calculator', () => {
    it('Should return maximum score of multiple bowling games', () => {
      expect(findMaximumScore([[10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10], [3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6]])).toBe(300);
    });

    it('Should return maximum score of multiple bowling games', () => {
      expect(findMaximumScore([[6, 4, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10]])).toBe(30);
    });

    it('Should return maximum score of multiple bowling games', () => {
      expect(findMaximumScore([[3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10]])).toBe(90);
    });
  });
});