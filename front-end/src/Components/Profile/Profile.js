import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button } from 'semantic-ui-react';
import DetailsForm from './DetailsForm';
import PasswordChange from './PasswordChange';
import DeleteAccount from './DeleteAccount';


class Profile extends Component {
	render() {
		var errmess = this.props.login.details.email_id
		if (!errmess) {
			return <Redirect to="/login" />
		}
		
		return (
			<div className="container">
				<hr />
				<DetailsForm />
				<hr/>
				<PasswordChange/>
				<hr/>
				<DeleteAccount/>
				<hr/>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		login: state.login,
	}
}


export default connect(mapStateToProps)(Profile)