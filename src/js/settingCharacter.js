class Settings {
	constructor() {
		this.defaultSettings = new Map ([
			['theme', 'dark'],
			['music', 'trance'],
			['difficulty', 'easy'],
		])

		this.userSettings = new Map();
	} 

	get getSettings() {
		const userSettings = Array.from(this.userSettings);
		const fullSettings = this.defaultSettings;

		for (let setting of userSettings) {
			fullSettings.set(setting[0], setting[1]);
		} 

		return Array.from(fullSettings);
	}

	set setUserSettings(setting) {
		this.userSettings.set(setting[0], setting[1]);
	}
}


export default Settings;
