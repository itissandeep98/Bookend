import React from 'react';

export const Ads = ({ads} ) => {
	const adlist = ads.map(ad => {
		return (
			<div className="ad">
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