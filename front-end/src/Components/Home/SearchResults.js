import React, { Component } from 'react'
import { Table, Progress, Button } from 'reactstrap'

export default class SearchResults extends Component {
	render() {
		var ads = this.props.ads;
		var adlist = <Progress animated color="danger" value="100" />
		if (ads) {
			adlist = ads.map(ad => {
				return (
					<tr key={ad.id}>
						<td>{ad.book_name}</td>
						<td>{ad.author}</td>
						<td>{ad.description}</td>
						<td>{ad.transaction_type}</td>
						<td>{ad.price ? ad.price : ""}</td>
						<td><Button outline onClick={() => { this.props.handleInfo(ad.user_id) }}><span className="fa fa-info-circle"></span></Button ></td>
					</tr>
				)
			})
			return <Table striped bordered hover responsive>
							<thead>
								<tr>
									<th>Title</th>
									<th>Author</th>
									<th>Description</th>
									<th>Type</th>
									<th>Price</th>
									<th>Seller</th>
								</tr>
							</thead>
							<tbody>
								{adlist}
							</tbody>
						</Table>
		}
		else{
			return <h2> No Results Found<span className="fa fa-filter"></span></h2>
		}
	}
}
