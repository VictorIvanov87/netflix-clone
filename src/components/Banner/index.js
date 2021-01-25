import React, { useEffect, useState } from 'react';
import axios from 'axios';
import endpoints from '../../endpoints';
import {
	Header,
	Title,
	Description,
	ButtonsWrapper,
	Gradient,
} from './styles/Banner';

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
			<section>
				<Title>{movie?.name || movie?.original_name}</Title>
				<Description>{movie?.overview}</Description>
				<ButtonsWrapper>
					<button className="play-btn">Play</button>
					<button className="more-info-btn">More Info</button>
				</ButtonsWrapper>
			</section>
			<Gradient></Gradient>
		</Header>
	);
}

export default Banner;
