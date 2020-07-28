import React, { Component } from 'react';
import { Button, Table } from 'reactstrap';
import { AdDeleteAction } from '../../store/ActionCreators';
import { connect } from 'react-redux';
import { Segment, Loader, Image } from 'semantic-ui-react';


class AdList extends Component {
	constructor(props){
		super(props);
		this.handleDelete=this.handleDelete.bind(this)

	}
	handleDelete(ad) {
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
			var ads=this.props.ads.myAds;
			if(this.props.ads.isLoading){
				return(
					<Segment>
						<Table striped bordered hover responsive>
							<thead>
								<th>Book Name</th>
								<th>Author</th>
								<th>Description</th>
								<th>Type</th>
								<th>Price</th>
								<th>Courses</th>
								<th>Remove Ad</th>
							</thead>
						</Table>
						<Loader active />
						<Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
					</Segment >
				)
			}
			else if(this.props.ads.errmess){
				this.props.showAlert("danger","Error in fetching ads try refreshing the Page")
				return <div/>
			}
			else if (ads) {
				var adlist = Object.keys(ads).map(ad => {
					ad=ads[ad]
					return (
						<tr key={ad.id}>
							<td>{ad.book_name}</td>
							<td>{ad.author}</td>
							<td>{ad.description}</td>
							<td>{ad.transaction.type}</td>
							<td>{ad.transaction.price}</td>
							<td><ul>{
								ad.courses.map(course=>{
									return(<li>{course}</li>)
								})
								}
								</ul> </td>
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
								<th>Courses</th>
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
				return <h2> No Ads Here! Try Creating some ads<span className="fa fa-filter"/></h2>
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