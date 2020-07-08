import React, { Component } from 'react';
import { Button, Table } from 'reactstrap';
import { AdDeleteAction } from '../../store/ActionCreators';
import { connect } from 'react-redux';


class AdList extends Component {
	constructor(props){
		super(props);
		this.handleDelete=this.handleDelete.bind(this)

	}
	handleDelete(ad) {
		// console.log(this.props);
		this.props.deleteAd(ad)
		.then(res => {
			if(this.props.deletead.errmess){
				this.props.showAlert("danger", this.props.deletead.errmess )
			}
			else{
				this.props.showAlert("info", "Ad deleted Successfully")
			}
		});
		
	}
	render() {
			var ads=this.props.ads;
			if (ads) {
				var adlist = ads.map(ad => {
					return (
						<tr key={ad.id}>
							<td>{ad.book_name}</td>
							<td>{ad.author}</td>
							<td>{ad.description}</td>
							<td>{ad.transaction_type}</td>
							<td>{ad.price?ad.price:""}</td>
							<td><Button  onClick={() => { this.handleDelete(ad) }}><span className="fa fa-times-circle"></span></Button ></td>
						</tr>
					)
				})
				return (
					<div className="container">
						<Table striped bordered hover responsive>
							<thead>
								<th>Book Name</th>
								<th>Author</th>
								<th>Description</th>
								<th>Type</th>
								<th>Price</th>
								<th>Remove Ad</th>
							</thead>
							<tbody>
								{adlist}
							</tbody>
						</Table>
					</div>
				)

			}
			else {
				return <h2> No Ads Here! Try refreshing the page<span className="fa fa-filter"/></h2>
			}

			
		}
	}
const mapStateToProps = (state) => {
	return {
		deletead:state.deleteAd
	}
}

const mapDispatchToProps = (dispatch) => ({
	deleteAd: (data)=>dispatch(AdDeleteAction(data))
})
	export default connect(mapStateToProps,mapDispatchToProps)(AdList);