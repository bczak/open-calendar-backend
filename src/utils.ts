import {animals, colors, Config, uniqueNamesGenerator} from 'unique-names-generator';

export function getRandomName() {
	const customConfig: Config = {
		dictionaries: [colors, animals],
		separator: ' ',
		length: 2,
	};
	return uniqueNamesGenerator(customConfig)
	
}