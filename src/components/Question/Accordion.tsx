import {
	Accordion,
	AccordionItem,
	AccordionButton,
	AccordionPanel,
	AccordionIcon,
	Box
} from '@chakra-ui/react';

export function AccordionBox() {
	return (
		<Accordion defaultIndex={[0]} allowMultiple w="100%">
			<AccordionItem>
				<h2>
					<AccordionButton>
						<Box flex="1" fontSize="18px" textAlign="left">
							Explique a diferença entre classes e IDs?
						</Box>
						<AccordionIcon />
					</AccordionButton>
				</h2>
				<AccordionPanel pl={50} pb={4}>
					Classes e seletores de ID, ambos são utilizados como ganchos para
					estilos CSS. Os IDs são comumente usados ​​para definir o estilo de
					elementos que aparecem apenas uma vez em uma página, como uma
					instância de um menu de navegação. As classes são utilizadas para
					estilizar diferentes elementos da mesma maneira, como a presença de
					links, botões, formulários, texto, etc.
				</AccordionPanel>
			</AccordionItem>

			<AccordionItem>
				<h2>
					<AccordionButton>
						<Box flex="1" fontSize="18px" textAlign="left">
							Como você pode aumentar o desempenho da página?
						</Box>
						<AccordionIcon />
					</AccordionButton>
				</h2>
				<AccordionPanel pl={50} pb={4}>
					Limpe o documento HTML
					<br />
					Reduza solicitações de HTTP externas e scripts externos <br />
					Use imagens compactadas e menores
					<br /> Adie o JavaScript para o final da página
					<br /> Use as versões mais recentes de código, como PHP
					<br /> Reduza CSS, JavaScript, HTML
					<br /> Use CDN e Cache
					<br /> Conteúdo GZip ou Brotli Compress
					<br /> Alavancagem cache do navegador
				</AccordionPanel>
			</AccordionItem>

			<AccordionItem>
				<h2>
					<AccordionButton>
						<Box flex="1" fontSize="18px" textAlign="left">
							Como você explicaria as APIs para as partes interessadas não
							técnicas?
						</Box>
						<AccordionIcon />
					</AccordionButton>
				</h2>
				<AccordionPanel pl={50} pb={4}>
					É o mensageiro entre produtos de software. Ele permite que os sistemas
					de software se comuniquem e sincronizem. Por exemplo, você pode usar,
					por exemplo, a API do Facebook para exibir suas postagens no Facebook
					em seu site. E permita que as pessoas compartilhem ou comentem suas
					postagens diretamente do seu site sem mudar para o Facebook.
				</AccordionPanel>
			</AccordionItem>

			<AccordionItem>
				<h2>
					<AccordionButton>
						<Box flex="1" fontSize="18px" textAlign="left">
							O que é uma função recursiva?
						</Box>
						<AccordionIcon />
					</AccordionButton>
				</h2>
				<AccordionPanel pl={50} pb={4}>
					Uma função que se chama direta ou indiretamente. A recursão continua
					até atingir um conjunto de parâmetros que retornam um valor em vez de
					chamar a função recursivamente. Uma função recursiva pode resolver
					problemas específicos rapidamente.
				</AccordionPanel>
			</AccordionItem>
		</Accordion>
	);
}
