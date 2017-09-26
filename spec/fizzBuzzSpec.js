describe('FizzBuzz', function() {

  var fizzBuzz;

  describe('knows when a number is', function() {

    it('divisible by 3', function() {
      fizzBuzz = new FizzBuzz();
      expect(fizzBuzz.isDivisibleByThree(3)).toBe(true);
    });

  });

  describe('knows when a number is NOT', function() {
    it('divisible by 3', function(){
      fizzBuzz = new FizzBuzz();
      expect(fizzBuzz.isDivisibleByThree(1)).toBe(false);
    });

  });

});
