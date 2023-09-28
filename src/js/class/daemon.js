import Character from '../character';

export default class Daemon extends Character {
  constructor(name, type = 'Daemon') {
    super(name, type);
    this.attack = 10;
    this.defence = 40;
  }

  // get attack() {
  //   return this.attack;
  // }
  get attack() {
    return this._attack;
  }

  set attack(cellFromEnemy) {
    const penalty = (this.attack / 100) * (cellFromEnemy * 10);
    this._attack = this.attack - penalty;
  }
}
