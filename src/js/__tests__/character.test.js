/* eslint-disable no-new */
/* eslint-disable no-unused-vars */
import Undead from '../class/undead';
import Character from '../character';

test('Ошибка в type', () => {
  expect(() => {
    new Character('Boba', 'Dead');
  }).toThrow('Неизвестное существо');
});

test('Проверка корректности имени', () => {
  expect(() => {
    new Undead('B');
  }).toThrow('Имя должно содержать от 2 до 10 символов');
});

test('Тест повышения уровня', () => {
  const testUpChar = {
    type: 'Undead',
    name: 'Boba',
    health: 100,
    level: 2,
    attack: 30,
    defence: 30,
  };

  const testChar = new Undead('Boba');
  testChar.levelup();
  expect(testChar).toEqual(testUpChar);
});

test('Тест повышения уровня при нулевом здоровье', () => {
  const testChar = new Undead('Boba');
  testChar.health = 0;
  expect(() => {
    testChar.levelup();
  }).toThrow('YOU DEAD');
});

test('Тест получения урона', () => {
  const testDamagedChar = {
    type: 'Undead',
    name: 'Boba',
    health: 85,
    level: 1,
    attack: 25,
    defence: 25,
  };
  const testChar = new Undead('Boba');
  testChar.damage(20);
  expect(testChar).toEqual(testDamagedChar);
});
