
it('should calculate the monthly rate correctly', function () {
  // ...
  const values = {
    amount: 20000,
    years: 10,
    rate: 6.5
  };
  expect(calculateMonthlyPayment(values)).toEqual('227.10');
});


it("should return a result with 2 decimal places", function() {
  // ..
  const values = {
    amount: 20084,
    years: 10,
    rate: 6.5
  };
  expect(calculateMonthlyPayment(values)).toEqual('228.05');
});

it("should factor terribly high interest rates", function() {
  const values = {
    amount: 1000,
    years: 40,
    rate: 99
  };
  expect(calculateMonthlyPayment(values)).toEqual('82.50');
});

it("should return NaN when rate is zero", function() {
  const values = {
    amount: 10000,
    years: 5,
    rate: 0
  };
  expect(calculateMonthlyPayment(values)).toEqual('NaN');
});