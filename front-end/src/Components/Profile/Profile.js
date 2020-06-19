import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button } from 'semantic-ui-react';
import DetailsForm from './DetailsForm';
import PasswordChange from './PasswordChange';
import DeleteAccount from './DeleteAccount';


class Profile extends Component {
	constructor(props){
		super(props);
		var { name, roll_num, email_id } = this.props.login.details
		this.state={
			name,
			roll_num,
			email_id,
			mode:true,
			specialization:"BTech" //needs to be fetched from redux store
		}
		this.editMode=this.editMode.bind(this)
		this.handleUpdate=this.handleUpdate.bind(this);
		this.onChange = this.onChange.bind(this);
	}

	onChange(e) {
		this.setState({
			[e.target.id]: e.target.value
		});
	}

	editMode(){		
		this.setState({
			mode:!this.state.mode
		})
	}

	handleUpdate(){
		console.log("here")

	}


	render() {
		var errmess = this.props.login.details.email_id
		if (!errmess) {
			return <Redirect to="/login" />
		}
		
		return (
			<div className="container">
				<hr />
				<Button toggle circular active={!this.state.mode} onClick={this.editMode}><span className="fa fa-edit" /> Edit</Button>
				<hr />
				<h1>Edit Basic Details</h1>
				<DetailsForm details={this.state} onChange={this.onChange} handleUpdate={this.handleUpdate}/>
				<hr/>
				<h1>Change Password</h1>
				<PasswordChange/>
				<hr/>
				<h1>Delete Account</h1>
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