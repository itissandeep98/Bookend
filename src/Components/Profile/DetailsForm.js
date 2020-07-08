import React, { Component } from 'react'
import { Form, Input, Dropdown, Button } from 'semantic-ui-react'
import { Row, Col } from 'reactstrap'
import { connect } from 'react-redux';

class DetailsForm extends Component {
	constructor(props) {
		super(props);
		var { name, roll_num, email_id } = this.props.login.details
		this.state = {
			name,
			roll_num,
			email_id,
			mode: true,
			specialization: "BTech" //needs to be fetched from redux store
		}
		this.editMode = this.editMode.bind(this)
		this.handleUpdate = this.handleUpdate.bind(this);
		this.onChange = this.onChange.bind(this);
	}

	onChange(e) {
		this.setState({
			[e.target.id]: e.target.value
		});
	}

	editMode() {
		this.setState({
			mode: !this.state.mode
		})
	}

	handleUpdate() {
		console.log("handleUpdate")
	}

	render() {
		const options = [
			{ key: 'BTech', text: 'BTech', value: 'BTech' },
			{ key: 'MTech', text: 'MTech', value: 'MTech' },
			{ key: 'PhD', text: 'PhD', value: 'Phd' },
		]
		return (
			<div>
				<h1>Edit Basic Details <Button toggle circular active={!this.state.mode} onClick={this.editMode}><span className="fa fa-edit" /> Edit</Button></h1>
				<Form onSubmit={this.handleUpdate}>
					<Row>
						<Col xs={12} md={6}>
							<Form.Field required>
								<label htmlFor="name">Name</label>
								<Input fluid
									type="text"
									id="name"
									onChange={this.onChange}
									value={this.state.name}
									disabled={this.state.mode} />
							</Form.Field>
						</Col>
						<Col xs={12} md={6}>
							<Form.Field required>
								<label htmlFor="roll_num">Roll Number</label>
								<Input
									label={<Dropdown id="specialization" options={options} value={this.state.specialization} disabled />}
									type="number"
									id="roll_num"
									labelPosition='left'
									value={this.state.roll_num}
									onChange={this.onChange}
									disabled={this.state.mode}
								/>
							</Form.Field>
						</Col>
						<Col xs={12} md={6}>
							<Form.Field required >
								<label htmlFor="email_id">Email</label>
								<Input
									type="email"
									id="email_id"
									onChange={this.onChange}
									value={this.state.email_id}
									disabled={this.state.mode} />
							</Form.Field>
						</Col>
					</Row>
					<Form.Field className="text-center m-10">
						<Button primary circular disabled={this.state.mode} ><span className="fa fa-paper-plane" /> Submit</Button>
					</Form.Field>

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


export default connect(mapStateToProps)(DetailsForm)
