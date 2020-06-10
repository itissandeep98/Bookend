import React from 'react';

export const AdList = ({ ads }) => {
	const adlist = ads.map(ad => {
		return (
			<div className="ad" key={ ad.id }>
				<p>{ ad.book_name }</p>
			</div>
		)
	})

	return (
		<div className="ad-list">
			{ adlist }
		</div>
	)
}