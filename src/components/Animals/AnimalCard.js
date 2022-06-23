import React from 'react';

export default function AnimalCard({
	name,
	scientificName,
	showAdditional,
	additional,
	size,
}) {
	return (
		<div>
			<h2>{name}</h2>
			<div>{scientificName}</div>
			<div>{size}</div>
			{additional && (
				<button onClick={() => showAdditional(additional)}>More info</button>
			)}
		</div>
	);
}
