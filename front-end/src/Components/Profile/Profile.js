import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button, Row, div } from 'reactstrap'
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';


class Profile extends Component {
	constructor(props){
		super(props);
		var { name, roll_num, email_id } = this.props.login.details
		this.state={
			name,
			roll_num,
			email_id,
			mode:true,
		}
		this.editMode=this.editMode.bind(this)
		this.handleUpdate=this.handleUpdate.bind(this);

	}
	editMode(){		
		this.setState({
			mode:!this.state.mode
		})
	}
	handleUpdate(){

	}


	render() {
		var errmess = this.props.login.details.email_id
		if (!errmess) {
			return <Redirect to="/login" />
		}
		
		var button = this.state.mode ? 
				<Button onClick={this.editMode}><span className="fa fa-edit"></span>Edit</Button> : 
					<Row>
					<div className="col-3">
						<Button onClick={this.editMode} className="btn-danger"><span className="fa fa-window-close"></span>Cancel</Button>
					</div>
					<div >
						<Button onClick={this.handleUpdate} className="btn-dark"><span className="fa fa-paper-plane"></span>Submit</Button>
					</div>
				</Row>
				
		return (
			<div className="container">
				<hr />
				{button}
				<Form onSubmit={this.handleRegister}>
					<FormGroup>
						<Label htmlFor="name">Name</Label>
						<Input type="text" readOnly={this.state.mode}  onChange={this.onChange} value={this.state.name} />
					</FormGroup>
					<FormGroup>
						<Label htmlFor="email">Email</Label>
						<Input type="email" readOnly={this.state.mode} onChange={this.onChange} value={this.state.email_id}  />
					</FormGroup>
					<FormGroup>
						<Label htmlFor="rollno">Roll Number</Label>
						<Input type="number" readOnly={this.state.mode} id="rollno" onChange={this.onChange} value={this.state.roll_num}  />
					</FormGroup>
				</Form>
				
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