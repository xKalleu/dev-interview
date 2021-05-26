import { Flex } from '@chakra-ui/react';

import { Logo } from './Logo';

export function Header() {
	return (
		<Flex
			as="header"
			w="100%"
			mx="auto"
			p="27px 0"
			align="center"
			justify="center"
			bg="blue.500">
			<Logo />
		</Flex>
	);
}
