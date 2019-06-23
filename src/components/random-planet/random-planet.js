import React, {Component} from 'react';
import SwapiService from '../../service/swapiservice'

export default class RandomPlanet extends Component {

	swapiService = new SwapiService();

	state = {
		id: 2,
		name: null,
		population: null,
		rotationPeriod: null,
		diameter: null,
	};

	constructor() {
		super();
		this.updatePlanet();
	}

	updatePlanet() {
		this.swapiService.getAllPlanet().then( ({count}) => {
			const minId = 1;
			const maxId = count/2.5;
			const randomPlanetId = Math.floor(Math.random() * (maxId - minId)) + minId;

			this.swapiService.getPlanet(randomPlanetId).then((planet) => {
				this.setState({
					id: randomPlanetId,
					name: planet.name,
					population: planet.population,
					rotationPeriod: planet.rotation_period,
					diameter: planet.diameter
				})
			});
		});
	}

	render() {

		const {id, name, population, rotationPeriod, diameter} = this.state;
		console.log(id)
		return (
			<>
				<div className="card mb-3">
					<div className="row no-gutters">
						<div className="col-md-4 bg-dark d-flex align-items-center justify-content-center">
							<img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} className="card-img" alt="..." />
						</div>
						<div className="col-md-8">
							<ul className="list-group list-group-flush">
								<li className="list-group-item">
									<h5 className="card-title mb-0">Name: {name}</h5>
								</li>
								<li className="list-group-item">Population: {population}</li>
								<li className="list-group-item">Rotation period: {rotationPeriod}</li>
								<li className="list-group-item">Diameter: {diameter}</li>
								<li className="list-group-item"><small className="text-muted">Last updated 3 mins ago</small></li>
							</ul>
						</div>
					</div>
				</div>
			</>
		)
	}
};