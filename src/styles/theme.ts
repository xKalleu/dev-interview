import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
	colors: {
		blue: {
			'700': '#032340',
			'500': '#050533',
			'400': '#0D698B'
		},
		orange: {
			'500': '#E34234'
		},
		white: {
			'500': '#F2F1E8'
		}
	},
	fonts: {
		heading: 'Poppins',
		body: 'Poppins'
	},
	styles: {
		global: {
			body: {
				bg: 'blue.700',
				color: 'white.500'
			}
		}
	}
});
