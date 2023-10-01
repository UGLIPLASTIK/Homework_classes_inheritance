/* eslint-disable no-unused-vars */
// import Character from './js/character';
import Daemon from './js/class/daemon';
import Bowman from './js/class/bowman';
import Undead from './js/class/undead';
import Team from './js/team';

const daemon = new Daemon('Biba');
// daemon.attack = 10;

daemon.setStoned();
daemon.setAttack(2);
console.log(daemon);
console.log(daemon.attack);

// daemon.attack = 30;
// console.log(daemon.attack);

// console.log(daemon.attack);
