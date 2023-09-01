/* eslint-disable no-new */
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
  expect(() => {
    new Character('B', 'Undead');
  }).toThrow('Некорректное имя');
});

test('Uncorrect class name', () => {
  expect(() => {
    new Character('Boba', 'Undeaded');
  }).toThrow('Неверно указан класс');
});

test('lvlup method', () => {
  const testUpChar = {
    type: 'Undead',
    name: 'Boba',
    health: 100,
    level: 2,
    attack: 30,
    defence: 30,
  };

  const testChar = new Character('Boba', 'Undead');
  testChar.levelup();
  expect(testChar).toEqual(testUpChar);
});

test('lvlup method warn', () => {
  const testChar = new Character('Boba', 'Undead');
  testChar.health = 0;
  expect(() => {
    testChar.levelup();
  }).toThrow('YOU DEAD');
});

test('damage method', () => {
  const testDamagedChar = {
    type: 'Undead',
    name: 'Boba',
    health: 85,
    level: 1,
    attack: 25,
    defence: 25,
  };
  const testChar = new Character('Boba', 'Undead');
  testChar.damage(20);
  expect(testChar).toEqual(testDamagedChar);
});
