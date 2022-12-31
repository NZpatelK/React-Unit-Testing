const shoppingList = [
    'diapers',
    'kleenex',
    'trash bags',
    'paper towels',
    'milk',
  ];

test('the shopping list has milk on it', () => {
    expect(new Set(shoppingList)).toContain('milk');
    expect(shoppingList).toContain('milk');
})