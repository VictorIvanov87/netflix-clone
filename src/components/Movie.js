import React from 'react';
import styled from 'styled-components';

const Poster = styled.div`
	max-width: 100px;
	padding: 20px;
`;

const Image = styled.img`
	width: 100%;
	height: auto;
`;

function Movie({ url }) {
	return (
		<Poster>
			<Image src={`${process.env.REACT_APP_IMDB_IMAGE_URL}${url}`} />
		</Poster>
	);
}

export default Movie;
