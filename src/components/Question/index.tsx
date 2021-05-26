import { Flex } from '@chakra-ui/react';
import { AccordionBox } from './Accordion';

export function Question() {
	return (
		<Flex
			as="header"
			w="100%"
			maxWidth={1240}
			mx="auto"
			p="27px 0"
			align="center"
			justify="center">
			<AccordionBox />
		</Flex>
	);
}
