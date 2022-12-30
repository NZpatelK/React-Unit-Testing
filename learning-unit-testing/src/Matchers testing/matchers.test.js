test('math test', () => {
    expect(2+2).toBe(4);
});

test('object assignment', () => {
    const data = {one: 1};
    data['two'] = 2;
    expect(data).toEqual({one: 1, two: 2});
});

test('adding positive numbers is not zero', () => {
    for (let a = 1; a < 5; a++) {
      for (let b = 1; b < 5; b++) {
        expect(a + b).not.toBe(0);
      }
    }
  });

  