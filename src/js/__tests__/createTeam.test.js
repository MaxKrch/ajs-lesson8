import Team from "../createTeam.js"
import { magician, daemon, zombie } from "../createCharacters.js";


test("add new character", () => {
	const myTeam = new Team();
	myTeam.add(zombie);

	const received = myTeam.members.has(zombie);
	const expected = true;

	expect(received).toBe(expected);
})



test("add double character", () => {
	const myTeam = new Team();
	myTeam.add(zombie);
	
	const myFunc = () => {
		myTeam.add(zombie);
	}
	const expected = "Этот персонаж уже в команде";

	expect(myFunc).toThrow(expected);
})



test("add many characters", () => {
	const myTeam = new Team();
	myTeam.addAll(zombie, magician, daemon);

	const expected = 3;
	const received = myTeam.members.size;

	expect(received).toBe(expected);
})



test("set to array", () => {
	const myTeam = new Team();
	myTeam.addAll(zombie, magician, daemon);

	const expected = true;
	const received = Array.isArray(myTeam.toArray());

	expect(received).toBe(expected)

})