const thing = () => {
  return 2;
}

describe('First test to sum', () => {
  test('Should be 2', () => {
    expect(thing()).toBe(2);
  });
});
