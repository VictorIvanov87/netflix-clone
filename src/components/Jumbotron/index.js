import React from 'react';
import {
	Item,
	Inner,
	Container,
	Pane,
	Title,
	SubTitle,
	Image,
} from './styles/Jumbotron';

function Jumbotron({ children, direction = 'row', ...restProps }) {
	return (
		<Item>
			<Inner direction={direction}>{children}</Inner>
		</Item>
	);
}

Jumbotron.Container = function JumbotronContainer({ children, ...restProps }) {
	return <Container {...restProps}>{children}</Container>;
};

Jumbotron.Pane = function JumbotronPane({ children, ...restProps }) {
	return <Pane {...restProps}>{children}</Pane>;
};

Jumbotron.Title = function JumbotronTitle({ children, ...restProps }) {
	return <Title {...restProps}>{children}</Title>;
};

Jumbotron.SubTitle = function JumbotronSubTitle({ children, ...restProps }) {
	return <SubTitle {...restProps}>{children}</SubTitle>;
};

Jumbotron.Image = function JumbotronImage({ children, ...restProps }) {
	return <Image {...restProps}>{children}</Image>;
};

export default Jumbotron;
