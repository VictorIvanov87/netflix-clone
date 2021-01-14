import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Movie from './Movie';

const Posters = styled.div`
	display: flex;
	overflow-y: hidden;
	overflow-x: scroll;
	padding: 20px;

	&::-webkit-scrollbar {
		display: none;
	}
`;

function Row({ title, fetchUrl,  isLargeRow }) {
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		async function fetchMovies() {
			const result = await axios(fetchUrl);
			setMovies(result.data.results);
			return result;
		}
		fetchMovies();
	}, [fetchUrl]);

	return (
		<div>
			<h2>{title}</h2>

			<Posters >
				{movies.map(movie => {
					return <Movie url={movie.poster_path} isLargeRow={isLargeRow} key={movie.id}/>;
				})}
			</Posters>
		</div>
	);
}

export default Row;
