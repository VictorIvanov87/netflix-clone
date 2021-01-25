import styled from 'styled-components';

export const Header = styled.header`
	background-size: cover;
	background-position: center center;
	color: white;
	object-fit: contain;
	height: 35vw;
	min-height: 320px;
	padding-top: 140px;
	position: relative;

	section {
		max-width: 420px;
	}
`;

export const Title = styled.h1`
	font-size: 4rem;
	font-weight: 600;
	margin-left: 30px;
	text-transform: uppercase;
`;

export const Description = styled.h2`
	padding: 2rem 0;
	margin-left: 30px;
	font-size: 1.5vw;
	font-weight: 400;
	text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
	line-height: normal;

	@media (max-width: 800px) {
		font-size: 12px;
	}
`;

export const ButtonsWrapper = styled.div`
	margin-left: 30px;

	button {
		cursor: pointer;
		outline: none;
		border: none;
		border-radius: 4px;
		padding: 0.8rem 2rem;
		margin-right: 1rem;
		font-size: 1.6rem;
		font-weight: bold;
		line-height: 2.4rem;

		&.play-btn {
			background-color: white;
			color: black;
		}

		&.more-info-btn {
			background-color: rgba(109, 109, 110, 0.7);
			color: white;
		}
	}

	button:hover {
		color: black;
		background-color: #e6e6e6;
		transition: all 0.2s;
	}
`;

export const Gradient = styled.div`
	position: absolute;
	bottom: -1px;
	width: 100%;
	height: 15rem;
	background-image: linear-gradient(
		180deg,
		transparent,
		rgba(37, 37, 37, 0.6),
		#111
	);
`;


