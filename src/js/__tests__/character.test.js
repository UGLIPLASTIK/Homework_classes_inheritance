/* eslint-disable no-unused-vars */
import Character from '../character';

test('Character constructor', () => {
  const testChar = {
    type: 'Undead',
    name: 'Boba',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(new Character('Boba', 'Undead')).toEqual(testChar);
});

test('Uncorrect name warn', () => {
  expect(new Character('B', 'Undead')).toThrow(new Error('Неверно указан класс'));
});

test('Uncorrect class name', () => {
  expect(new Character('Boba', 'Undeaded')).toThrow(new Error('Неверно указан класс'));
});

test('lvlup method', () => {
  const testUpChar = {
    type: 'Undead',
    name: 'Boba',
    health: 100,
    level: 2,
    attack: 48,
    defence: 12,
  };

  const testChar = new Character('Boba', 'Undead');

  expect(testChar.levelup()).toEqual(testUpChar);
});

// test('lvlup method warn', () => {
//   const testChar = new Character('Boba', 'Undead');
//   testChar.health = 0;
//   expect(testChar.levelup()).toThrow(new Error('YOU DEAD'));
// });

// test('damage method', () => {
//   const testDamagedChar = {
//     type: 'Undead',
//     name: 'Boba',
//     health: 82,
//     level: 1,
//     attack: 25,
//     defence: 25,
//   };
//   const testChar = new Character('Boba', 'Undead');
//   expect(testChar.damage(20)).toEqual(testDamagedChar);
// });
