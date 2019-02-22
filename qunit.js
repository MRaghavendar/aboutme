function Conversion(number) {
    cel = (number - 32) / 1.8;
    return Math.ceil(cel);
    
  }

  QUnit.test("Conversion", function(assert) {
	assert.equal(Conversion(10), -12, "10 degrees Fahrenheit == -12 degrees Celsius");
	assert.equal(Conversion(30), -1, "30 degrees Fahrenheit == -1 degrees Celsius");
	assert.equal(Conversion(25), -3, "25 degrees Fahrenheit == -4 degrees Celsius");
	assert.equal(Conversion(60), 16, "60 degrees Fahrenheit == 16 degrees Celsius");
	assert.equal(Conversion(100), 38, "100 degrees Fahrenheit == 38 degrees Celsius");
  });