import React, { Component } from 'react'
import { Form, Input, Dropdown, Button } from 'semantic-ui-react'
import { Row, Col } from 'reactstrap'

export default class DetailsForm extends Component {
	render() {
		const options = [
			{ key: 'BTech', text: 'BTech', value: 'BTech' },
			{ key: 'MTech', text: 'MTech', value: 'MTech' },
			{ key: 'PhD', text: 'PhD', value: 'Phd' },
		]
		var details=this.props.details;
		var onChange=this.props.onChange;
		var handleUpdate=this.props.handleUpdate;
		return (
			<Form onSubmit={handleUpdate}>
				<Row>
					<Col xs={12} md={6}>
						<Form.Field required>
							<label htmlFor="name">Name</label>
							<Input
								type="text"
								id="name"
								onChange={onChange}
								value={details.name}
								disabled={details.mode} />
						</Form.Field>
					</Col>
					<Col xs={12} md={6}>
						<Form.Field required>
							<label htmlFor="roll_num">Roll Number</label>
							<Input
								label={<Dropdown id="specialization" options={options} value={details.specialization} disabled />}
								type="number"
								id="roll_num"
								labelPosition='left'
								value={details.roll_num}
								onChange={onChange}
								disabled={details.mode}
							/>
						</Form.Field>
					</Col>
					<Col xs={12} md={6}>
						<Form.Field required>
							<label htmlFor="email_id">Email</label>
							<Input
								type="email"
								id="email_id"
								onChange={onChange}
								value={details.email_id}
								disabled={details.mode} />
						</Form.Field>
					</Col>
					<Col className="text-center">
						<hr/>
						<Form.Field>
							<Button primary  circular disabled={details.mode} ><span className="fa fa-paper-plane" /> Submit</Button>
						</Form.Field>
					</Col>
				</Row>
			</Form>
		)
	}
}
