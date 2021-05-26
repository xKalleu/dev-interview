import { Flex } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import { Header } from '../components/Header';
import { Question } from '../components/Question';
import api from '../services/api';

export default function Home() {
	const [continent, setContinent] = useState();

	console.log(continent);

	useEffect(() => {
		api.get('continents').then((response) => {
			setContinent(response.data);
		});
	}, []);

	return (
		<Flex align="center" direction="column" overflow="hidden">
			<Header />
			<Question />
		</Flex>
	);
}
