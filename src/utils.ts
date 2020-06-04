import {animals, colors, Config, uniqueNamesGenerator} from 'unique-names-generator';
import list from "./zones";
export function getRandomName() {
	const customConfig: Config = {
		dictionaries: [colors, animals],
		separator: ' ',
		length: 2,
	};
	return uniqueNamesGenerator(customConfig)
	
}
export function getTimeZone(zone: string): string {
	if(list.includes(zone)) return zone;
	
	return 'UTC'
}