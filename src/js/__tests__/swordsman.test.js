import Swordsman from '../class/swordman';

test('Правильно создается обЪект', () => {
  const swordman = new Swordsman('Swordsman');
  const correct = {
    attack: 40,
    defence: 10,
    health: 100,
    level: 1,
    name: 'Swordsman',
    type: 'Swordsman',
  };

  expect(swordman).toEqual(correct);
});
