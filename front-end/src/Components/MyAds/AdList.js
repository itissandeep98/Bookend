import React from 'react';

const Ads = ({ ads }) => {
	const adlist = ads.map(ad => {
		return (
			<div className="ad">
				<p>{ ad.book_name }</p>
			</div>
		)
	})

	return (
		<div class="ad-list">
			{ adlist }
		</div>
	)
}