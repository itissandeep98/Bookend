import React, { Component } from 'react'
import { Form, Row, FormGroup, Label, Input, FormText, Button, Spinner } from 'reactstrap';
import { Dropdown } from "semantic-ui-react";


export default class FormCreateAd extends Component {
	constructor(props) {
		super(props);
		this.state = {
			bookname:"",
			author:"",
			description:"",
			price:"",
			numdays:"",
			numdisabled:true,
			transactiontype:"Sell",
			tags:[],
			courses:[],
			coursedisabled:false,
		}
		this.handlereset = this.handlereset.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange=this.handleChange.bind(this);
		this.handleCourseChange=this.handleCourseChange.bind(this);
	}

	handleChange(e){		
		this.setState({
			[e.target.name]:e.target.value
		},()=>{
				if (this.state.transactiontype === "Lend") {
					this.setState({
						numdisabled: false
					});
				}
				else {
					this.setState({
						numdisabled: true
					});
				}
		})
				
	}

	handleCourseChange(event,result){
		const { value } = result || event.target;
		
		this.setState({
			...this.state.courses,
			courses:value
		})
	}

	handlereset() {
		this.setState({
			bookname: "",
			author: "",
			description: "",
			price: "",
			numdays: "",
			numdisabled: false,
			transactiontype: "",
			tags: "",
			courses: [],
		})
	}

	handleSubmit(event){
		event.preventDefault();
		var transaction = {
			type: this.state.transactiontype,
			price: this.state.price
		}
		if (this.state.transactiontype === "Lend") {
			transaction["days"] = this.state.numdays;
		}
		const data = {
			book_name: this.state.bookname,
			author: this.state.author,
			description: this.state.description,
			transaction,
			tags: this.state.tags,
			courses: this.state.courses,
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
			});
	}

	render() {
		var courselist="";
		if (this.props.courses.isLoading) {
			courselist = [{
				key: "loading",
				value: "loading",
				image: <Spinner />
			}]
		}
		else if(this.props.courses.errmess){
			courselist=[{
				key:"error",
				value: this.props.courses.errmess,
				
			}]
		}
		else {
			courselist = this.props.courses.courses
			if (this.state.courses.length === 3) {
				courselist = courselist.map((course) => {
					course.disabled = true
					return course
				})
			}
			else {
				courselist = courselist.map((course) => {
					course.disabled = false
					return course
				})
			}
		}
		var button = <Button type="submit" value="submit" className="btn-dark">Submit</Button>;
		if(this.props.createad.isLoading){
			button =  <Spinner type="grow" color="secondary" />
		}
		return (
			<Form onSubmit={this.handleSubmit}>
				<Row>
					<FormGroup className="col-12 col-md-6">
						<Label htmlFor="bookname">Book Name:</Label>
						<Input type="text" required id="bookname" name="bookname" value={this.state.bookname} onChange={this.handleChange} />
					</FormGroup >
					<FormGroup className="col-12 col-md-6">
						<Label htmlFor="author">Author:</Label>
						<Input type="text" required id="author" name="author" value={this.state.author} onChange={this.handleChange}/>
					</FormGroup >
				</Row>
				<FormGroup >
					<Label htmlFor="description">Description:</Label>
					<Input type="textarea" required id="description" name="description" value={this.state.description} onChange={this.handleChange} />
				</FormGroup >
				<Row>
					<FormGroup className="col-6 col-md-4">
						<Label for="transactiontype">Transaction type:</Label>
						<Input type="select" required name="transactiontype" id="transactiontype" value={this.state.transactiontype} onChange={this.handleChange}>
							<option disabled >Choose below</option>
							<option>Sell</option>
							<option>Lend</option>
						</Input>
					</FormGroup>
					<FormGroup className="col-6 col-md-4">
						<Label htmlFor="numdays">Number of days:</Label>
						<Input type="number" required disabled={this.state.numdisabled} id="numdays" name="numdays" value={this.state.numdays} onChange={this.handleChange} />,
					</FormGroup >
					<FormGroup className="col-12 col-md-4" >
						<Label htmlFor="price">Price:</Label>
						<Input type="number" required pattern="[0-9]+" id="price" name="price" value={this.state.price} onChange={this.handleChange} />
					</FormGroup >
				</Row>
				<Row>
					<FormGroup className="col-12 col-md-6">
						<Label for="tags">Select tags:</Label>
						<Input type="select" name="tags" id="tags" multiple value={this.state.tags} onChange={this.handleChange}>
							<option>tag1</option>
							<option>tag2</option>
						</Input>
						<FormText>Select atmost 3</FormText>
					</FormGroup>
					<FormGroup className="col-12 col-md-6">
						<Label for="course">Select Related Courses:</Label>
						<Dropdown placeholder="Courses" fluid multiple openOnFocus clearable search selection options={courselist} value={this.state.courses} onChange={this.handleCourseChange} />
						<FormText>Select atmost 3</FormText>
					</FormGroup>
				</Row>
				<Row>
					<FormGroup className="col-2">
						<Button onClick={this.handlereset} className="btn-danger">Reset</Button>
					</FormGroup>
					<FormGroup className="col-3">
						{button}
					</FormGroup>
				</Row>
			</Form>
		)
	}
}
