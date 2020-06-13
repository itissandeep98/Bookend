import React, { Component } from 'react'
import { connect } from 'react-redux'

class Profile extends Component {

	setProf = (user) => this.props.setProfile(user);

	async componentDidMount() {
		// This fetch request should only be made when the user logins and when edits the profile. Don't have to make it again and again everytime profile page is opened.

		const response = await fetch('/profile', {
			method: 'POST',
			body: JSON.stringify(),
			headers: {
				"Content-Type": "application/json"
			}
		});

		const data = await response.json();
		
		console.log(data);

	}

	render() {
		console.log(this.props);
		const {name, rollNum} = this.props
	
		return (
			<div className="container">
				<h1>{ name }</h1>
				<h2>{ rollNum }</h2>
			</div>
		)
	}
}

// export const setProfile = (user) => { dispatch({ type: 'SET_PROFILE', user: user }) };

const mapStateToProps = (state) => {
	return {
		id: state.id,
		name: state.name,
		rollNum: state.rollNum
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		setProfile: (user) => { dispatch({ type: 'SET_PROFILE', user: user }) },
		getProfile: (id) => { dispatch({ type: 'GET_PROFILE', id: id }) } 
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)