class Character {
	constructor (character){
		this.character = character;
		this.health = 100;
		this.level = 1;
	}
}

const bowerman = new Character("Bowerman");
const swordsman = new Character("Swordsman");
const magician = new Character("Magician");
const daemon = new Character("Daemon");
const undead = new Character("Undead");
const zombie = new Character("Zombie");

export { 
	bowerman, swordsman, magician, daemon, undead, zombie 
} 