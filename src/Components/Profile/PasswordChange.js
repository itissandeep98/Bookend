import React, { Component } from 'react'
import { Button, Form, Input } from 'semantic-ui-react'

export default class PasswordChange extends Component {
	constructor(props){
		super(props);
		this.state={
			mode:true,
			password:"",
			newpassword:"",
			cnfpassword:"",
		}
		this.editMode=this.editMode.bind(this);
		this.onChange=this.onChange.bind(this);
	}

	editMode() {
		this.setState({
			mode: !this.state.mode,
			password:"",
			cnfpassword:"",
			newpassword:""
		})
	}

	onChange(e) {
		this.setState({
			[e.target.id]: e.target.value
		});
	}

	handleUpdate(){
		console.log("handleUpdate");
		
	}

	render() {
		return (
			<div>
				<h1>Change Password <Button toggle circular active={!this.state.mode} onClick={this.editMode}><span className="fa fa-edit" /> Edit</Button></h1>
				<Form onSubmit={this.handleUpdate}>
					<Form.Field >
						<Input
							type="password"
							id="password"
							label={{ basic: true, content: 'Old Password' }}
							onChange={this.onChange}
							value={this.state.password}
							readOnly ={this.state.mode} />
					</Form.Field>
					<Form.Field >
						<Input
							type="password"
							id="newpassword"
							label={{ basic: true, content: 'New Password' }}
							onChange={this.onChange}
							value={this.state.newpassword}
							readOnly={this.state.mode} />
					</Form.Field>
					<Form.Field >
						<Input
							type="password"
							id="cnfpassword"
							label={{ basic: true, content: 'Confirm Password' }}
							onChange={this.onChange}
							value={this.state.cnfpassword}
							readOnly={this.state.mode} />
					</Form.Field>
					<Form.Field className="text-center">
						<Button primary circular disabled={this.state.mode} ><span className="fa fa-paper-plane" /> Update</Button>
					</Form.Field>
				</Form>
			</div>
		)
	}
}
