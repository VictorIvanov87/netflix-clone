import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Movie from './Movie';

const Posters = styled.div`
	display: flex;
`;

function Row({ title, fetchUrl }) {
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

			<Posters>
				{movies.map((movie, i) => {
					return <Movie url={movie.poster_path} key={i}/>;
				})}
			</Posters>
		</div>
	);
}

export default Row;
