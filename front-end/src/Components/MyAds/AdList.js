import React from 'react';

export const AdList = ({ ads }) => {
	const adlist = ads.map(ad => {
		return (
			<div className="ad" key={ ad.id }>
				<p className="name">Name: { ad.book_name }</p>
				<p className="name">Author: { ad.author }</p>
				<hr/>
			</div>
		)
	})

	return (
		<div className="container">
			{ adlist }

		</div>
	)
}