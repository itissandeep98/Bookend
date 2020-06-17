import React, { Component } from 'react'
import { Form, Row, FormGroup, Label, Input, FormText, Button, Spinner } from 'reactstrap'

export default class FormCreateAd extends Component {
	constructor(props) {
		super(props);
		this.state = {
			button: <Button type="submit" value="submit" className="btn-dark">Submit</Button>,
			days: <Input type="number" required disabled id="numdays" name="numdays" innerRef={(input) => this.numdays = input} />,
		}
		this.spinnerActive = this.spinnerActive.bind(this);
		this.spinnerReset = this.spinnerReset.bind(this);
		this.handlereset = this.handlereset.bind(this);
		this.handlelend = this.handlelend.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);


	}

	spinnerActive() {
		this.setState({
			button: <Spinner type="grow" color="secondary" />
		})
	}

	spinnerReset() {
		this.setState({
			button: <Button type="submit" value="submit" className="btn-dark">Submit</Button>,
		})
	}

	handlelend(e) {
		if (e.target.value === "Lend") {
			this.setState({
				days: <Input type="number" required id="numdays" name="numdays" innerRef={(input) => this.numdays = input} />
			});
		}
		else {
			this.setState({
				days: <Input type="number" required disabled id="numdays" name="numdays" innerRef={(input) => this.numdays = input} />
			});
		}
	}

	handlereset() {
		// e.preventDefault();
		this.bookname.value = null;
		this.author.value = null;
		this.description.value = null;
		this.price.value = null;
		this.numdays.value = null;
		this.numdays.disabled = true;
		this.transactiontype.value = "Choose below";
		this.tags.value = null;
		this.course.value = null;
	}

	handleSubmit(event){
		event.preventDefault();
		this.spinnerActive()
		var transaction = {
			type: this.transactiontype.value,
			price: this.price.value
		}
		if (this.transactiontype.value === "Lend") {
			transaction["days"] = this.numdays.value
		}
		const data = {
			book_name: this.bookname.value,
			author: this.author.value,
			description: this.description.value,
			transaction,
			tags: this.tags.value,
			courses: this.course.value,
		}
		this.props.handleSubmit(data)
			.then((response) => {
				if (this.props.createad.succmess) {
					this.props.showAlert("info", this.props.createad.succmess);
					this.handlereset()
				}
				else if (this.props.createad.errmess) {
					this.props.showAlert("danger", this.props.createad.errmess)
				}
				this.spinnerReset()
			});
	}

	render() {	
		console.log(this.props);
		var courselist=null;
		if(!this.props.courses.courses){
			courselist = <option>{this.props.courses.errmess}</option>
		}
		else{
			courselist=this.props.courses.courses.map((course)=>{
				return <option>{course}</option>
			})
		}
		return (
			<Form onSubmit={this.handleSubmit}>
				<Row>
					<FormGroup className="col-12 col-md-6">
						<Label htmlFor="bookname">Book Name:</Label>
						<Input type="text" required id="bookname" name="bookname" innerRef={(input) => this.bookname = input} />
					</FormGroup >
					<FormGroup className="col-12 col-md-6">
						<Label htmlFor="author">Author:</Label>
						<Input type="text" required id="author" name="author" innerRef={(input) => this.author = input} />
					</FormGroup >
				</Row>
				<FormGroup >
					<Label htmlFor="description">Description:</Label>
					<Input type="textarea" required id="description" name="description" innerRef={(input) => this.description = input} />
				</FormGroup >
				<Row>
					<FormGroup className="col-6 col-md-4">
						<Label for="transactiontype">Transaction type:</Label>
						<Input type="select" required name="transactiontype" id="transactiontype" onChange={this.handlelend} innerRef={(input) => this.transactiontype = input}>
							<option disabled selected>Choose below</option>
							<option>Sell</option>
							<option>Lend</option>
						</Input>
					</FormGroup>
					<FormGroup className="col-6 col-md-4">
						<Label htmlFor="numdays">Number of days:</Label>
						{this.state.days}
					</FormGroup >
					<FormGroup className="col-12 col-md-4" >
						<Label htmlFor="price">Price:</Label>
						<Input type="number" required pattern="[0-9]+" id="price" name="price" innerRef={(input) => this.price = input} />

					</FormGroup >
				</Row>
				<Row>
					<FormGroup className="col-12 col-md-6">
						<Label for="tags">Select tags:</Label>
						<Input type="select" name="tags" id="tags" multiple innerRef={(input) => this.tags = input}>
							<option>tag1</option>
							<option>tag2</option>
						</Input>
						<FormText>Select atmost 3</FormText>
					</FormGroup>
					<FormGroup className="col-12 col-md-6">
						<Label for="course">Select Related Courses:</Label>
						<Input type="select" name="course" id="course" multiple innerRef={(input) => this.course = input}>
							{courselist}
						</Input>
						<FormText>Select atmost 3</FormText>
					</FormGroup>
				</Row>
				<Row>
					<FormGroup className="col-2">
						<Button onClick={this.handlereset} className="btn-danger">Reset</Button>
					</FormGroup>
					<FormGroup className="col-3">
						{this.state.button}
					</FormGroup>
				</Row>
			</Form>
		)
	}
}
