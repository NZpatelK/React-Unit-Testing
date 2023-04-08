const shoppingList = [
    'diapers',
    'kleenex',
    'trash bags',
    'paper towels',
    'milk',
  ];


/**
 * This testing is to test if the value is match the array/ list
 */
test('the shopping list has milk on it', () => {
    expect(new Set(shoppingList)).toContain('milk');
    expect(shoppingList).toContain('milk');
})