import React, {Component} from 'react';
import './Pet.css';
// export default class Pet extends Component {
class Pet extends Component {
	render() {
		const liStyle = {fontSize: '1.5em'};
		return (
			<div className="card">
				<h1 className="name">Puppy</h1>
				<img src="http://cdn3-www.dogtime.com/assets/uploads/2011/03/puppy-development-460x306.jpg" alt="puppy" />
				<h5 style={{fontSize: '2em', margin: '5px'}}>List:</h5>
				<ul>
					<li style={liStyle}>Foo</li>
					<li style={liStyle}>Bar</li>
				</ul>
			</div>
		);
	}
}

export default Pet;