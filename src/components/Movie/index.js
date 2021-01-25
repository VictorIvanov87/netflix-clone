import React from 'react';
import { Poster } from './styles/Movie';

function Movie({ url, isLargeRow }) {
	return (
		<Poster
			className={isLargeRow && 'large-row'}
			src={`${process.env.REACT_APP_IMDB_IMAGE_URL}${url}`}
		/>
	);
}

export default Movie;
