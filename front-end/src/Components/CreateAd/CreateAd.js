import React, { Component } from 'react'
import { Form, FormGroup, Label, Input, Button, Row, FormText, Alert, Spinner } from 'reactstrap'
import { createAdAction } from '../../store/ActionCreators';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class CreateAd extends Component {
	constructor(props) {
		super(props);
		this.state = {
			button: <Button type="submit" value="submit" className="btn-dark">Submit</Button>,
			days: <Input type="number" required disabled id="numdays" name="numdays" innerRef={(input) => this.numdays = input} />,
			showA:false,
			messageA:"",
			timeA:"",
			showB:false,
			messageB:"",
			timeB:""
		}
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handlelend = this.handlelend.bind(this);
		this.toggleSuccessAlert=this.toggleSuccessAlert.bind(this);
		this.toggleErrorAlert=this.toggleErrorAlert.bind(this);
		this.spinnerActive = this.spinnerActive.bind(this);
		this.spinnerReset = this.spinnerReset.bind(this);
	}
	toggleSuccessAlert(){
		this.setState({
			showA:!this.state.showA
		})
	}
	toggleErrorAlert() {
		this.setState({
			showB: !this.state.showB
		})
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
	handleSubmit(event) {
		this.spinnerActive()
		event.preventDefault()
		var transaction={
			type: this.transactiontype.value,
			price: this.price.value
		}
		if(this.transactiontype.value==="Lend"){
			transaction["days"]=this.numdays.value
		}
		const data={
			user_id:1,
			book_name:this.bookname.value,
			author:this.author.value,
			description:this.description.value,
			transaction,
			tags:this.tags.value,
			courses:this.course.value,
		}
		this.props.createAd(data)
			.then((response) => {
				if (this.props.createad.succmess) {
					this.setState({
						showA: true,
						messageA: this.props.createad.succmess,
						timeA: new Date().toLocaleTimeString()
					})
				}
				else if(this.props.createad.errmess) {
					this.setState({
						showB: true,
						messageB:this.props.createad.errmess,
						timeB: new Date().toLocaleTimeString()
					})				
				}
				this.spinnerReset();
			});
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

	render() {
		var errmess = this.props.login.details.email_id
		if (!errmess) {
			return <Redirect to="/login" />
		}
		return (
			<div className="container">
				<div className="row">
				<h1>Create ad</h1>
				</div>
				<hr />
				<Alert color="info" isOpen={this.state.showA} toggle={this.toggleSuccessAlert}>
					{this.state.timeA}  {this.state.messageA}
				</Alert>
				<Alert color="danger" isOpen={this.state.showB} toggle={this.toggleErrorAlert}>
					{this.state.timeB} {this.state.messageB}
				</Alert>
				<div className="row ">
					<div className="col-12 border-bottom">
						<Form onSubmit={this.handleSubmit}>
							<FormGroup >
								<Label htmlFor="bookname">Book Name:</Label>
								<Input type="text" required id="bookname" name="bookname" innerRef={(input) => this.bookname = input} />
							</FormGroup >
							<FormGroup>
								<Label htmlFor="author">Author:</Label>
								<Input type="text" required id="author" name="author" innerRef={(input) => this.author = input} />
							</FormGroup >
							<FormGroup >
								<Label htmlFor="description">Description:</Label>
								<Input type="textarea" required id="description" name="description" innerRef={(input) => this.description = input} />
							</FormGroup >
							<Row>
								<FormGroup className="col-6 col-md-4">
									<Label for="transactiontype">Transaction type:</Label>
									<Input type="select" required name="transactiontype" id="transactiontype" onChange={this.handlelend} innerRef={(input) => this.transactiontype = input}>
										<option disabled>Choose below</option>
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
									<Input type="select" name="course" id="course" multiple  innerRef={(input) => this.course = input}>
										<option>tag1</option>
										<option>tag2</option>
									</Input>
									<FormText>Select atmost 3</FormText>
								</FormGroup>
							</Row>

							<FormGroup  className="float-right">
								{this.state.button}
							</FormGroup>
						</Form>
					</div>
				</div>
			</div>
		)
	}
}
const mapStateToProps = (state) => {
	return {
		login: state.login,
		createad: state.createad
	}
}
const mapDispatchToProps = (dispatch) => ({
	createAd:(data)=>dispatch(createAdAction(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateAd)