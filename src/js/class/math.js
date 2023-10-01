/* eslint-disable no-plusplus */
import Character from '../character';

export default class Math extends Character {
  constructor(name, type) {
    super(name, type);
    this.defence = 40;
    this.attack = 100;
    this.stoned = false;
  }

  getAttack() {
    return this.attack;
  }

  setAttack(cellsFromEnemy) {
    // if (this.stoned) {
    //   this.attack -= Math.round(Math.log2(cellsFromEnemy) * 5);
    // }
    if (cellsFromEnemy === 1) return;
    if (cellsFromEnemy === 2) this.attack = (this.attack / 100) * 90;
    if (cellsFromEnemy === 3) this.attack = (this.attack / 100) * 80;
    if (cellsFromEnemy === 4) this.attack = (this.attack / 100) * 70;
    if (cellsFromEnemy === 5) this.attack = (this.attack / 100) * 60;
    if (cellsFromEnemy === 6) this.attack = (this.attack / 100) * 50;
    if (cellsFromEnemy === 7) this.attack = (this.attack / 100) * 40;
    if (cellsFromEnemy === 8) this.attack = (this.attack / 100) * 30;
    if (cellsFromEnemy === 9) this.attack = (this.attack / 100) * 20;
    if (cellsFromEnemy === 10) this.attack = (this.attack / 100) * 10;
    // let percent = 100;
    // for (let i = 0; i < cellsFromEnemy; i++) {
    //   percent -= 10;
    //   if (i === cellsFromEnemy) {
    //     this.attack = (this.attack / 100) * percent;
    //     break;
    //   }
    // }
  }

  getStoned() {
    return this.stoned;
  }

  setStoned() {
    if (this.stoned === false) this.stoned = true;
  }
}
