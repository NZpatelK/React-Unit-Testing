

//This is an inequality testing between two values.
test('number test', () => {
    const value = 2+2;
    expect(value).toBeGreaterThan(3);
    expect(value).toBeGreaterThanOrEqual(3.5);
    expect(value).toBeLessThan(5);
    expect(value).toBeLessThanOrEqual(4.5);
  
    // toBe and toEqual are equivalent for numbers
    expect(value).toBe(4);
    expect(value).toEqual(4);
})


// This float number testing to use speicalist to test for float around
// becuase other test tool will round up or down to become whole without decimal
// use this testing to foucs on decimal value.
test('float number test', () => {
    const value = 0.1 + 0.2;
    expect(value).toBeCloseTo(0.3);
})