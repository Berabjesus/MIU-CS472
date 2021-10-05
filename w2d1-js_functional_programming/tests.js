describe('sum', () => {
  it('takes an array of numbers and returns the total sum',
    () => {
      assert.equal(52.5, sum([122.5, 10, 20, -100]));
    });
});

describe('multiply', () => {
  it('takes an array of numbers and returns a number that is the product of all the elements',
    () => {
      assert.equal(15, multiply([10, 3, 0.5]));
    });
});

describe('reverse', () => {
  it("takes a string returns it's reverse value",
    () => {
      assert.equal('elgoog', reverse('google'));
    });
});

describe('findLongestWords', () => {
  it('takes an array of strings and length i and returns an array of strings  of length greater than i',
    () => {
      assert.deepEqual(['entire', 'points', 'towards'], findLongestWords(['The', 'entire', 'bible', 'points', 'towards', 'jesus', 'and', 'his', 'mercy'], 5));
    });
});
