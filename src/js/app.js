import Team from "./createTeam.js";
import { bowerman, swordsman, magician, daemon, undead, zombie } from "./createCharacters.js";
import ErrorRepository from "./listErrors.js";
import Settings from "./settingCharacter.js";

const myTeam = new Team();
myTeam.add(zombie);
myTeam.add(undead);
// myTeam.add(zombie);
myTeam.addAll(magician, daemon, zombie);
console.log(myTeam.toArray());


const myErrorRepository = new ErrorRepository();
console.log(myErrorRepository);
console.log(myErrorRepository.translate(403));
console.log(myErrorRepository.translate(502));
myErrorRepository.add([502, "Bad Gateway"]);
console.log(myErrorRepository.translate(502));
console.log(myErrorRepository);

const mySettings = new Settings();
console.log(mySettings.getSettings);
mySettings.setUserSettings = ['music', 'off'];
console.log(mySettings.getSettings);
mySettings.setUserSettings = ['theme', 'grey'];
console.log(mySettings.getSettings);
