import React from 'react';
import styled from 'styled-components';

const Poster = styled.img`
	width: auto;
	height: 160px;
	margin-right: 10px;
	transition: transform 0.25s;
	cursor: pointer;
	border-radius: 4px;

	&:hover {
		transform: scale(1.1);
	}

	&.large-row {
		height: 300px;
	}
`;

function Movie({ url, isLargeRow }) {
	return (
		<Poster
			className={isLargeRow && 'large-row'}
			src={`${process.env.REACT_APP_IMDB_IMAGE_URL}${url}`}
		/>
	);
}

export default Movie;
