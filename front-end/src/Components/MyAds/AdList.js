import React from 'react';
import {  Progress, Row, Container, Button, Col } from 'reactstrap';

export const AdList = ({ ads }) => {
	var adlist = <Progress animated color="danger" value="100" />
	if(ads){
		adlist = ads.map(ad => {
			return (
				<Container>
					<Row>
						<Col>Name: {ad.book_name}</Col>
						<Col>Author: {ad.author}</Col>

						<Button type="button" class="close" aria-label="Close">
							&times;
						</Button>
					</Row>
					<hr/>
				</Container>
			)
		})
	}

	return (
		<div className="container">
			{ adlist }

		</div>
	)
}