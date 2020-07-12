import React from 'react'
import { Form, FormGroup, Label, Input, FormText, Row, Col, Spinner, Button } from 'reactstrap'
import { Dropdown } from 'semantic-ui-react';

function SearchForm(props) {
	var fields = props.fields;
	var onchange = props.onChange;
	var courselist = null;
	var handleCourseChange=props.handleCourseChange;
	
	if (props.courses.isLoading) {
		courselist = [{
			key: "loading",
			value: "loading",
			image: <Spinner />
		}]
	}
	else if (props.courses.errmess) {
		courselist = [{
			key: "error",
			value: this.props.courses.errmess,

		}]
	}
	else {
		courselist = props.courses.courses
		if (fields.courses.length === 3) {
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
	
	var button = <Button> <span className="fa fa-search fa-lg" />Search</Button>;
	if(props.searchAds.isLoading){
		button=<Spinner/>
	}
	
	
	
	return (
		<Form onSubmit={props.handleSubmit}>
			<FormGroup>
				<Input type="text" name="title" placeholder="Title" value={fields.title} onChange={onchange} />
			</FormGroup>
			<FormGroup>
				<Input type="text" name="author" placeholder="Author" value={fields.author} onChange={onchange} />
			</FormGroup>
			<FormGroup>
				<Dropdown placeholder="Courses" fluid multiple search openOnFocus clearable selection options={courselist} value={fields.courses} onChange={handleCourseChange} />
			</FormGroup>
			<FormGroup>
				<Input type="text" name="tags" placeholder="Tags" value={fields.tags} onChange={onchange} />
				<FormText>Write space separated tags</FormText>
			</FormGroup>
			<FormGroup>
				<Label>Price</Label>
				<Row>
					<Col>
						<Input type="number" name="pricemin" placeholder="Min" value={fields.pricemin} onChange={onchange} />
					</Col>
					<Col>
						<Input type="number" name="pricemax" placeholder="Max" value={fields.pricemax} onChange={onchange} />
					</Col>
				</Row>
			</FormGroup>
			<FormGroup>
				<div className="text-center">
					{button}
				</div>
			</FormGroup>
		</Form>
	)
}

export default SearchForm;
