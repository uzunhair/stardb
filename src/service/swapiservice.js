class SwapiService {

	constructor() {
		this.basicUrl = 'https://swapi.co/api/'
	};

	getResource = async (url) => {
		const res = await fetch(`${this.basicUrl}${url}`);
		if (!res.ok) {
			throw new Error(`Could not fetch ${this.basicUrl}${url}, received ${res.status}`)
		}
		return await res.json();
	};

	getAllPeople = async () => {
		const res = await this.getResource('people');
		return res.results;
	};

	getPerson = async (id) => {
		return await this.getResource(`people/${id}/`);
	};
	getPlanet = async (id) => {
		return await this.getResource(`planets/${id}/`);
	};
	getAllPlanet = async () => {
		return await this.getResource('planets')
	};
	getAllStarships = async () => {
		const res = await this.getResource('starships');
		return res.results;
	};
	getStarships = async (id) => {
		return await this.getResource(`starships/${id}`)
	}
}

export default SwapiService;

// (async () => {
// 	const swapi = new SwapiService();
// 	const person = await swapi.getPerson(1);
// 	console.log(person);
// })();