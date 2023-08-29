/* eslint-disable no-unused-vars */

export default class Character {
  constructor(name, type) {
    const subclasses = [
      {
        type: 'Bowman',
        attack: 25,
        defence: 25,
      },
      {
        type: 'Swordsman',
        attack: 40,
        defence: 10,
      },
      {
        type: 'Magician',
        attack: 10,
        defence: 40,
      },
      {
        type: 'Undead',
        attack: 25,
        defence: 25,
      },
      {
        type: 'Zombie',
        attack: 40,
        defence: 10,
      },
      {
        type: 'Daemon',
        attack: 10,
        defence: 40,
      },
    ];
    if (name.lenght < 2) {
      throw new Error('Некорректное имя');
    }
    if (!subclasses.find((item) => item.type === type)) {
      throw new Error('Неверно указан класс');
    }
    this.type = type;
    this.name = name;
    this.health = 100;
    this.level = 1;
    this.attack = subclasses.find((item) => item.type === type).attack;
    this.defence = subclasses.find((item) => item.type === type).defence;
  }
}
