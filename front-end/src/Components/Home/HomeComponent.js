import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import SearchForm from './SearchForm';
import { Progress } from 'reactstrap';


class Home extends Component {
	constructor(props){
		super(props);
		this.state={}
		this.onfieldsChange=this.onfieldsChange.bind(this);
		this.handleSearchSubmit=this.handleSearchSubmit.bind(this);
	}

	onfieldsChange(e) {
		this.setState({
			[e.target.name]:e.target.value
		})
	}

	handleSearchSubmit(e){
		e.preventDefault();
	}

	render() {
		const { name } = this.props.login.details

		var errmess = this.props.login.details.email_id
		
		if (!errmess) {
			return <Redirect to="/login" />
		}

		return (
			<div className="container-fluid">
				<hr />
				<div className="row">
					<h1>Welcome, {name}!</h1>
				</div>
				<div className="row">
					<div className="col-md-4 col-lg-3 border border-top-0">
						<SearchForm fields={this.state} onChange={this.onfieldsChange} handleSubmit={this.handleSearchSubmit}/>
					</div>
					<div className="col-12 col-md-8 col-lg-9">
						<Progress animated color="info" value="100" />
						<hr/>
						<Progress animated color="info" value="100" />
						<hr />
						<Progress animated color="info" value="100" />
						<hr />
						<Progress animated color="info" value="100" />
						<hr />
						<Progress animated color="info" value="100" />
						<hr />
						<Progress animated color="info" value="100" />
						<hr />						
					</div>
				</div>
			</div>
		)
	}
}

export default Home