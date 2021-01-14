import React from 'react';
import styled from 'styled-components';

const Poster = styled.img`
	object-fit: contain;
	width: 100%;
	max-height: 100px;
	margin-right: 10px;
	transition: transform 0.25s;

	&:hover {
		transform: scale(1.1);
	}

	&.large-row {
		max-height: 250px;
	}
`;

function Movie({ url, isLargeRow }) {
	return (
			<Poster className={isLargeRow && 'large-row'} src={`${process.env.REACT_APP_IMDB_IMAGE_URL}${url}`} />
	);
}

export default Movie;
