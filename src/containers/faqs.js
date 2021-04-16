import React from 'react';
import { Accordion } from '../components';
import { OptForm } from '../components';
import faqsData from '../fixtures/faqs.json';
import * as ROUTES from '../constants/routes';

const FaqsContainer = () => {
	return (
		<Accordion>
			<Accordion.Title>Frequently Asked Questions</Accordion.Title>
			{faqsData.map((item) => (
				<Accordion.Item key={item.id}>
					<Accordion.Header>{item.header}</Accordion.Header>
					<Accordion.Body>{item.body}</Accordion.Body>
				</Accordion.Item>
			))}

			<OptForm>
				<OptForm.Button href={ROUTES.SIGN_UP}>Try Now</OptForm.Button>
				<OptForm.Break></OptForm.Break>
				<OptForm.Text>
					Ready To Watch? Enter your email to create or restart your membership.
				</OptForm.Text>
			</OptForm>
		</Accordion>
	);
};

export default FaqsContainer;
