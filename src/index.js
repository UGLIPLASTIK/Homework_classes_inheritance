/* eslint-disable no-unused-vars */
// import Character from './js/character';
import Daemon from './js/class/daemon';
import Bowman from './js/class/bowman';
import Undead from './js/class/undead';
import Team from './js/team';

const dreamteam = new Team();
const daemon = new Daemon('Biba');
const bowman = new Bowman('Boba');
const undead = new Undead('Beba');
dreamteam.addAll(daemon, bowman, undead);
console.log(dreamteam.iterate());
console.log(dreamteam.iterate());
console.log(dreamteam.iterate());
