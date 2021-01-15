import React, { useEffect, useState } from 'react';
import axios from 'axios';
import endpoints from '../endpoints';
import styled from 'styled-components';

const Header = styled.header`
	background-size: cover;
	background-position: center center;
	color: white;
	object-fit: contain;
	height: 448px;
	padding-top: 140px;
`;

const Title = styled.h1`
	font-size: 3rem;
	font-weight: 800;
	margin-left: 30px;
	padding-bottom: 0.3rem;
`;

const ButtonsWrapper = styled.div`
	margin-left: 30px;

	button {
		cursor: pointer;
		color: white;
		outline: none;
		border: none;
		font-weight: 700;
		border-radius: 0.2vw;
		padding: 0.5rem 2rem;
		margin-right: 1rem;
		background-color: rgba(51, 51, 51, 0.5);
	}

	button:hover {
		color: black;
		background-color: #e6e6e6;
		transition: all 0.2s;
	}
`;

const Description = styled.h2`
	width: 45rem;
	max-width: 360px;
	height: 80px;
	padding-top: 1rem;
	margin-left: 30px;
	font-size: 0.8rem;
	line-height: 1.3;
`;

const Gradient = styled.div`
	position: relative;
	top: 8.5rem;
	height: 7.5rem;
	background-image: linear-gradient(
		180deg,
		transparent,
		rgba(37, 37, 37, 0.6),
		#111
	);
`;

function Banner() {
	const [movie, setMovie] = useState({});

	useEffect(() => {
		async function fetchData() {
			const netflixOriginalsEndpoint = endpoints.find(
				(endpoint) => (endpoint.title = 'Netflix Original')
			);
			const result = await axios.get(netflixOriginalsEndpoint.fetchUrl);
			const selectedMovie =
				result.data.results[
					Math.floor(Math.random() * result.data.results.length - 1)
				];

			setMovie(selectedMovie);
		}

		fetchData();
	}, []);

	return (
		<Header
			style={{
				backgroundImage: `url(${process.env.REACT_APP_IMDB_IMAGE_URL}${movie?.backdrop_path})`,
			}}
		>
			<Title>{movie?.name || movie?.original_name}</Title>
			<ButtonsWrapper>
				<button>Play</button>
				<button>My List</button>
			</ButtonsWrapper>
			<Description>{movie?.overview}</Description>
			<Gradient></Gradient>
		</Header>
	);
}

export default Banner;
