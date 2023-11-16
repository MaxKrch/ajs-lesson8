class Team {
	constructor() {
		this.members = new Set();
	}
	
	add(character) {
		const chek = this.members.has(character);
		if(chek) {
			throw new Error("Этот персонаж уже в команде")
		} else {
			this.members.add(character);
		}
	}

	addAll(...characters) {
		for(let character of characters) {
			this.members.add(character)
		}
	}

	toArray() {
		const arrayCharacters = Array.from(this.members);
		return arrayCharacters;
	}
}

export default Team;

