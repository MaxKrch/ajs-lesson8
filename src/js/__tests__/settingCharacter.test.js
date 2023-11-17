import Settings from "../settingCharacter.js";

test("get default setting", () => {
	const mySettings = new Settings();
	const received = mySettings.getSettings;
	const expected = [
		['theme', 'dark'],
		['music', 'trance'],
		['difficulty', 'easy'],
	];

	expect(received).toEqual(expected);
})



test("set and get userseting", () => {
	const mySettings = new Settings();
	mySettings.setUserSettings = ['theme','gray'];
	const received = mySettings.getSettings;
	const expected = [
		['theme', 'gray'],
		['music', 'trance'],
		['difficulty', 'easy'],
	];

	expect(received).toEqual(expected);
})