import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Movie from './Movie';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

const Posters = styled.div`
	display: flex;
	overflow-y: hidden;
	overflow-x: scroll;
	padding: 20px;

	&::-webkit-scrollbar {
		display: none;
	}
`;

const RowTitle = styled.h2`
	color: white;
	margin-left: 20px;
`;

function Row({ title, fetchUrl, isLargeRow }) {
	const [movies, setMovies] = useState([]);
	const [trailerUrl, setTrailerUrl] = useState('');

	const youtubeOptions = {
		height: '390',
		width: '100%',
		playerVars: {
			autoplay: 1,
		},
	};

	useEffect(() => {
		async function fetchMovies() {
			const result = await axios(fetchUrl);
			setMovies(result.data.results);
			return result;
		}
		fetchMovies();
	}, [fetchUrl]);

	const playTrailer = (movie) => {
		if(trailerUrl) {
			setTrailerUrl('')
		} else {
			movieTrailer(movie?.name || '').then(url => {
				const urlParams = new URLSearchParams( new URL(url).search);
				setTrailerUrl(urlParams.get('v'));
			}).catch(err => console.log(err))
		}
	};

	return (
		<div>
			<RowTitle>{title}</RowTitle>
			<Posters>
				{movies.map((movie) => {
					return (
						<div onClick={() => playTrailer(movie)} key={movie.id}>
							<Movie
								url={movie.poster_path}
								isLargeRow={isLargeRow}
							/>
						</div>
					);
				})}
			</Posters>

			{trailerUrl && <YouTube videoId={trailerUrl} opts={youtubeOptions} />}
		</div>
	);
}

export default Row;
