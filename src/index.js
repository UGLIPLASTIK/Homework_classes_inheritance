/* eslint-disable no-unused-vars */
// import Character from './js/character';
import Bowman from './js/class/bowman';
import Undead from './js/class/undead';
import Team from './js/team';

const bowman = new Bowman('Biba');
const undead = new Undead('Boba');

const team = new Team();
team.addAll(undead);
team.toArray();

console.log(team.members);
