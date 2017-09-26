describe('FizzBuzz', function() {

  var fizzBuzz;

  beforeEach(function() {
    fizzBuzz = new FizzBuzz();
  });

  describe('knows when a number is', function() {
    it('divisible by 3', function() {
      expect(fizzBuzz.isDivisibleByThree(3)).toBe(true);
    });
    it('divisible by 5', function() {
      expect(fizzBuzz.isDivisibleByFive(5)).toBe(true);
    });
    it('divisible by 15', function() {
      expect(fizzBuzz.isDivisibleByFifteen(15)).toBe(true);
    });
  });

  describe('knows when a number is NOT', function() {
    it('divisible by 3', function() {
      expect(fizzBuzz.isDivisibleByThree(1)).toBe(false);
    });
    it('divisible by 5', function() {
      expect(fizzBuzz.isDivisibleByFive(1)).toBe(false);
    });
    it('divisible by 15', function() {
      expect(fizzBuzz.isDivisibleByFifteen(1)).toBe(false);
    });
  });

  describe('when playing, says', function() {
    it('"Fizz" when a number is divisible by 3', function() {
      expect(fizzBuzz.says(3)).toEqual("Fizz");
    });
    it('"Buzz" when a number is divisible by 5', function() {
      expect(fizzBuzz.says(5)).toEqual("Buzz");
    });
    it('"FizzBuzz" when a number is divisible by 3 and 5', function() {
      expect(fizzBuzz.says(15)).toEqual("FizzBuzz");
    });
    it('Number when a number is not divisible by 3 or 5', function() {
      expect(fizzBuzz.says(13)).toEqual(13)
    });
  });

});
