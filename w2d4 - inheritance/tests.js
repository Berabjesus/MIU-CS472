describe("filter", function () {
  it("takes an array of n number of bad words and return filtered string without no bad words in it",
      function () {
          assert.equal("This is good", "This is not good".filter(["not"]));
      });
});


describe("bubble sort", function () {
  it("takes unsorted array and returns sorted array",
      function () {
          assert.deepEqual([1, 2, 3, 4], [3, 1, 4, 2].bubbleSort());
      });
});