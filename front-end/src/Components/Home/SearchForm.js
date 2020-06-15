import React from 'react'
import { Form, FormGroup, Label, Input, Button, FormText, Row, Col } from 'reactstrap'

function SearchForm(props) {
	var fields = props.fields;
	var onchange = props.onChange;
	return (
		<Form onSubmit={props.handleSubmit}>
			<FormGroup>
				<Input type="text" name="title" placeholder="Title" value={fields.title} onChange={onchange} />
			</FormGroup>
			<FormGroup>
				<Input type="text" name="author" placeholder="Author" value={fields.author} onChange={onchange} />
			</FormGroup>
			<FormGroup>
				<Input type="text" name="course" placeholder="Course" value={fields.course} onChange={onchange} />
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
					<Button> <span className="fa fa-search fa-lg"></span>Search</Button>
				</div>
			</FormGroup>
		</Form>
	)
}

export default SearchForm;