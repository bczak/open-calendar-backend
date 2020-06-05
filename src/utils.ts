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
	if (list.includes(zone)) return zone;
	return 'UTC+00:00'
}

let cache: any = []

// UTC+02:00 -> -120
export function getOffset(timezone: string): any {
	if (cache[timezone] != undefined) return cache[timezone];
	let h = Number(timezone.substr(4, 2));
	let m = Number(timezone.substr(7, 2))
	let ans
	if (timezone[3] == '+') ans = -h * 60 - m -1
	if (timezone[3] == '-') ans = +h * 60 + m+ 1
	cache[timezone] = ans;
	return ans
}