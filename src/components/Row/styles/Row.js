import styled from 'styled-components';

export const RowWrapper = styled.div`
	margin-top: 2rem;
`;

export const Posters = styled.div`
	display: flex;
	overflow-y: hidden;
	overflow-x: scroll;
	padding: 20px 30px;

	&::-webkit-scrollbar {
		display: none;
	}
`;

export const RowTitle = styled.h2`
	color: white;
	margin-left: 30px;
	line-height: 1.25vw;
	font-size: 1.5vw;

	@media (max-width: 800px) {
		font-size: 12px;
	}
`;
