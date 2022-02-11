import attack from './attack';

test('return correct sentence', () => {
  const result = attack('Smelly Ogre', 23);
  expect(result).toBe('Smelly Ogre dealt 23');
});
