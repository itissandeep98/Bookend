import React from 'react'
import { Table, Button } from 'reactstrap'
import { Segment, Loader, Image } from 'semantic-ui-react';

function SearchResults(props) {
	var ads = props.searchAds.ads;
	if (props.searchAds.isLoading) {
		return (
			<Segment>
				<Loader active />
				<Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
			</Segment>
		)
	}
	
	else if (ads.length) {
		var adlist = ads.map(ad => {
			return (
				<tr key={ad.id}>
					<td>{ad.book_name}</td>
					<td>{ad.author}</td>
					<td className="col-3">{ad.description}</td>
					<td>{ad.transaction.type}</td>
					<td className="col-2">{ad.transaction.price}</td>
					<td><ul>{
						ad.courses.map(course => {
							return (<li>{course}</li>)
						})
					}
					</ul> </td>
					<td ><Button outline onClick={() => { props.handleInfo(ad.uid) }}><span className="fa fa-info-circle" /></Button ></td>
				</tr>
			)
		})
		return <Table striped bordered hover responsive>
					<thead>
						<tr>
							<th>Title <span className="fa fa-book" /></th>
							<th>Author <span className="fa fa-user" /></th>
							<th>Description <span className="fa fa-file" /></th>
							<th>Type</th>
							<th>Price <span className="fa fa-rupee" /></th>
							<th>Courses</th>
							<th>Seller <span className="fa fa-tags" /></th>
						</tr>
					</thead>
					<tbody>
						{adlist}
					</tbody>
				</Table>
	}
	else {
		return <h2> No Books Here<span className="fa fa-filter" /></h2>
	}
}

export default SearchResults;