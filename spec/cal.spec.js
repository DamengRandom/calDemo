
describe('Test calculation functions', function() {
  it('test add function', function() {
    let result = function(currentVal) {
      let prevVal = 1;
      return prevVal + currentVal;
    }

    expect(result(1)).toEqual(2);
  });

  it('test subtract function', function() {
    let result = function(currentVal) {
      let prevVal = 3;
      return prevVal - currentVal;
    }

    expect(result(1)).toEqual(2);
  });

  it('test multiply function', function() {
    result = function(currentVal) {
      let prevVal = 1;
      return prevVal * currentVal;
    }

    expect(result(2)).toEqual(2);
  });

  it('test divide function', function() {
    result = function(currentVal) {
      let prevVal = 4;
      return prevVal / currentVal;
    }

    expect(result(2)).toEqual(2);
  });

  it('test equal function', function() {
    result = function(currentVal) {
      return currentVal;
    }

    expect(result(2)).toEqual(2);
  });

  it('test reset function', function() {
    result = function() {
      return 0;
    }

    expect(result()).toEqual(0);
  });
});
