import React, { Component } from 'react'
import { Breadcrumb, BreadcrumbItem, Form, FormGroup, Label, Input, Button, Row, FormText } from 'reactstrap'
import { Link } from 'react-router-dom'

export class CreateAd extends Component {
	constructor(props) {
		super(props);
		this.state = {
			button: <Button type="submit" value="submit" className="primary">Submit</Button>,
			days: <Input type="text" required disabled pattern="[0-9]" id="numdays" name="numdays" innerRef={(input) => this.numdays = input} />
		}
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handlelend = this.handlelend.bind(this);
	}
	handleSubmit(e) {

	}
	handlelend(e) {
		if (e.target.value === "Lend") {
			this.setState({
				days: <Input type="text" required pattern="[0-9]" id="numdays" name="numdays" innerRef={(input) => this.numdays = input} />
			});
		}
		else {
			this.setState({
				days: <Input type="text" required disabled pattern="[0-9]" id="numdays" name="numdays" innerRef={(input) => this.numdays = input} />
			});
		}
	}

	render() {
		if (localStorage.getItem("token") == null) {
			window.open("login", "_self")
		}
		return (
			<div className="container">
				<div className="row">
					<Breadcrumb>
						<BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
						<BreadcrumbItem active>Create ad</BreadcrumbItem>
					</Breadcrumb>
				</div>
				<h1>Create ad</h1>
				<hr />
				<div className="row ">
					<div className="col-12 border-bottom">
						<Form onSubmit={this.handleSubmit}>
							<FormGroup>
								<Label htmlFor="creator">Creator</Label>
								<Input type="text" required id="creator" name="creator" innerRef={(input) => this.creator = input} />
							</FormGroup >
							<FormGroup >
								<Label htmlFor="bookname">Book Name</Label>
								<Input type="text" required id="bookname" name="bookname" innerRef={(input) => this.bookname = input} />
							</FormGroup >
							<FormGroup >
								<Label htmlFor="description">Description</Label>
								<Input type="textarea" required id="description" name="description" innerRef={(input) => this.description = input} />
							</FormGroup >
							<Row>
								<FormGroup className="col-12 col-md-4">
									<Label htmlFor="date">Date</Label>
									<Input type="date" required id="date" name="date" innerRef={(input) => this.date = input} />
								</FormGroup>
								<FormGroup className="col-6 col-md-4">
									<Label for="transactiontype">Transaction type</Label>
									<Input type="select" name="transactiontype" id="transactiontype" onChange={this.handlelend} innerRef={(input) => this.transactiontype = input}>
										<option>Sell</option>
										<option>Lend</option>
									</Input>
								</FormGroup>
								<FormGroup className="col-6 col-md-4">
									<Label htmlFor="numdays">Number of days</Label>
									{this.state.days}
								</FormGroup >
							</Row>
							<Row>
								<FormGroup className="col-12 col-md-4" >
									<Label htmlFor="price">Price</Label>
									<Input type="text" required pattern="[0-9]+(\.[0-9][0-9]?)?" id="price" name="price" innerRef={(input) => this.price = input} />
									<FormText>Decimal number with atmost 2 precision</FormText>
								</FormGroup >
								<FormGroup className="col-12 col-md-4">
									<Label for="tags">Select tags</Label>
									<Input type="select" name="tags" id="tags" multiple innerRef={(input) => this.tags = input}>
										<option>tag1</option>
										<option>tag2</option>
									</Input>
									<FormText>Select atmost 3</FormText>
								</FormGroup>
								<FormGroup className="col-12 col-md-4">
									<Label for="course">Select Related Courses</Label>
									<Input type="select" name="course" id="course" multiple  innerRef={(input) => this.course = input}>
										<option>tag1</option>
										<option>tag2</option>
									</Input>
									<FormText>Select atmost 3</FormText>
								</FormGroup>
							</Row>

							<FormGroup >
								{this.state.button}
							</FormGroup>
						</Form>
					</div>
				</div>
			</div>
		)
	}
}
