import React, { Component } from 'react';
import { Progress, Row, Container, Button, Col } from 'reactstrap';
import { AdDeleteAction } from '../../store/ActionCreators';
import { connect } from 'react-redux';


class AdList extends Component {
	constructor(props){
		super(props);
		this.handleDelete=this.handleDelete.bind(this)

	}
	handleDelete(ad) {
		// console.log(this.props);
		this.props.deleteAd(ad);
	}
	render() {
			var ads=this.props.ads;
			var adlist = <Progress animated color="danger" value="100" />
			if (ads) {
				adlist = ads.map(ad => {
					return (
						<Container key={ad.id}>
							<Row>
								<Col>Name: {ad.book_name}</Col>
								<Col>Author: {ad.author}</Col>
								<Button  onClick={ () => {this.handleDelete(ad)}}>&times;</Button>
							</Row>
							<hr />
						</Container>
					)
				})
			}

			return (
				<div className="container">
					{adlist}
				</div>
			)
		}
	}
const mapDispatchToProps = (dispatch) => ({
	deleteAd: (data)=>dispatch(AdDeleteAction(data))
})
	export default connect(null,mapDispatchToProps)(AdList);