import Character from '../character';

export default class Math extends Character {
  constructor(name, type) {
    super(name, type);
    this.defence = 40;
    this.baseAttack = 100;
  }

  get attack() {
    return this.baseAttack;
  }

  set attack(cellsFromEnemy) {
    if (cellsFromEnemy === 1) return;
    const penalty = ((this.baseAttack / 100) * (cellsFromEnemy * 10)) - 10;
    this.baseAttack -= penalty;
  }

  get stoned() {

  }

  set stoned(value) {
    
  }
}
