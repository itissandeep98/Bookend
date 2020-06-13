import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'


class Home extends Component {
	render() {
		console.log(this.props)
		var errmess = this.props.login.details.email_id
		if (!errmess) {
			return <Redirect to="/login" />
		}
		return (
			<div className="container-fluid">
				<hr />
				<div className="row">
					<h1>yesss {this.props.login.details.name}</h1>
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		login: state.login
	}
}
export default connect(mapStateToProps)(Home)