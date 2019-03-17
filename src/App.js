import React, { Component } from 'react'; 
import CardList from './CardList'
import SearchBar from './SearchBar'
import Scroll from './Scroll'

import './App.css'


class App extends Component {
	constructor() {
		super();
		this.state = {
			robots: [],
			searchfield: '',
		}
	}

	onSearchChange = (event) => { 
		this.setState({ searchfield: event.target.value });
		
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => {
				return response.json();
			})
			.then(user => {
				this.setState({robots: user})
			})
	}

	render() {
		const filteredRobots = this.state.robots.filter(robot => {
			return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		})
		if(this.state.robots.length === 0) {
			return <h1>Loading...</h1>
		} else {
			return (
				<div className='tc'>
					<h1 className='tc f1'>Robo Friends</h1>
					<SearchBar searchChange={this.onSearchChange}/>
					<Scroll>
						<CardList robots={filteredRobots}/>
					</Scroll>
				</div>
				);
		}
	}


}

export default App; 
