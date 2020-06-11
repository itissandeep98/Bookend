import React from 'react';
import './AdList.css'

export const AdList = ({ ads }) => {
	const adlist = ads.map(ad => {
		return (
			<div className="ad" key={ ad.id }>
				<p className="name">{ ad.book_name }</p>
			</div>
		)
	})

	return (
		<div className="ad-list">
			{ adlist }
		</div>
	)
}