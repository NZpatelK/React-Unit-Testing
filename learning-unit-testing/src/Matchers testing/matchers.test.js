
//This testing is to test if calcuate answer to match the expect answer 
test('math test', () => {
    expect(2+2).toBe(4);
});

//This is the array and assign a new key and value in the array 
//then the testing is to test if array key and value is match the expect key and value.
test('object assignment', () => {
    const data = {one: 1};
    data['two'] = 2;
    expect(data).toEqual({one: 1, two: 2});
});


//This testing is to check the value to make sure the value is not equal zero.
test('adding positive numbers is not zero', () => {
    for (let a = 1; a < 5; a++) {
      for (let b = 1; b < 5; b++) {
        expect(a + b).not.toBe(0);
      }
    }
  });

  