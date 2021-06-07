import { useState, Fragment } from 'react';
import {
	Box,
	Flex,
	Skeleton,
	HStack,
	Badge,
	Image,
	useMediaQuery,
	VStack,
	Text,
	Heading,
	Grid
} from '@chakra-ui/react';
import { Drawer, Button } from 'antd';
import { Linkedin, GitHub } from 'react-feather';
import stock from './image/stock.jpg';
import stay from './image/airbnb.jpg';
import lrp from './image/realestate.jpg';
import evermonkey from './image/notes.jpg';
import dog from './image/dog.svg';

function App() {
	const [ visible, setVisible ] = useState(false);
	const [ mobile ] = useMediaQuery('(min-width: 100px) and (max-width: 700px)');

	const showDrawer = (): void => {
		setVisible(true);
	};

	const onClose = (): void => {
		setVisible(false);
	};

	return (
		<Box maxWidth="1500px" margin="auto">
			<Flex
				h="50px"
				bg="#F5C53D"
				alignItems="center"
				justifyContent="space-between"
				borderBottom="2px solid #E9B836"
			>
				<Text ml="1em" fontWeight="700">
					Nicholas Degrate&#169;
				</Text>
				{mobile ? (
					<Fragment />
				) : (
					<Fragment>
						<HStack spacing="25px">
							{/* <Text>Work</Text> */}
							{/* <Text>About</Text> */}
							{/* <Text>Skills</Text> */}
							{/* <Text>Resume</Text> */}
						</HStack>
					</Fragment>
				)}
				{mobile && (
					<Fragment>
						<VStack display="none" mr="1em" onClick={showDrawer} cursor="pointer">
							<Box h="2px" w="20px" bg="#000" />
							<Box h="2px" w="20px" bg="#000" />
						</VStack>
						<Drawer placement="right" closable={false} onClose={onClose} visible={visible}>
							<VStack align="left">
								{/* <Text cursor="pointer">Work</Text> */}
								{/* <Text cursor="pointer">About</Text> */}
								{/* <Text cursor="pointer">Skills</Text> */}
								{/* <Text cursor="pointer">Contact</Text> */}
								{/* <Text cursor="pointer">Resume</Text> */}
							</VStack>
						</Drawer>
					</Fragment>
				)}
				<a href="mailto:nicholasdegrate@gmail.com">
					<button className="nav-cta-btn">
						Contact Nicholas -{' '}
						<Text fontWeight="300" display="inline-block" fontStyle="italic">
							he's friendly
						</Text>
					</button>
				</a>
			</Flex>
			<Grid h="calc(70vh - 49px)" bg="#F5C53D" gridTemplateColumns="1fr" gridTemplateRows="1fr 10%">
				<Grid
					w="100%"
					justifyContent="center"
					alignItems="center"
					gridTemplateColumns={mobile ? '1fr' : '1fr 1fr'}
					gridTemplateRows={mobile ? '1fr 1fr' : '1fr'}
				>
					<Flex
						justifyContent="center"
						alignItems="center"
						ml="5em"
						alignSelf="center"
						bg="#000"
						w="200px"
						h="200px"
						borderRadius="100px"
					>
						<Image src={dog} w="60%" />
					</Flex>
					<Heading mb=".5em" as="h2" padding=".5em">
						Building full stack web application<br /> for the user in mind.
					</Heading>
				</Grid>
				<Grid gridTemplateColumns="1fr 70%" borderTop="2px solid #E9B836">
					<Flex justifyContent="center" alignItems="center" borderRight="2px solid #E9B836">
						Hire Me
					</Flex>
					<Grid gridTemplateColumns="1fr 1fr 1fr">
						<Flex
							display={mobile ? 'none' : 'flex'}
							justifyContent="center"
							alignItems="center"
							borderRight="2px solid #E9B836"
						>
							<Text>nicholasdegrate@gmail.com</Text>
						</Flex>
						<Flex
							display={mobile ? 'none' : 'flex'}
							justifyContent="center"
							alignItems="center"
							borderRight="2px solid #E9B836"
						>
							<Text>(732)-927-0926</Text>
						</Flex>
						<Box>
							<Grid h="100%" w="100%" gridTemplateColumns="1fr 1fr">
								<Flex justifyContent="center" borderRight="2px solid #E9B836" alignItems="center">
									<a
										href="https://www.linkedin.com/in/nicholas-degrate-64193614b/"
										target="_blank"
										rel="noreferrer"
									>
										<Linkedin />
									</a>
								</Flex>
								<Flex justifyContent="center" alignItems="center" borderRight="2px solid #E9B836">
									<a href="https://github.com/nicholasdegrate" target="_blank" rel="noreferrer">
										<GitHub />
									</a>
								</Flex>
							</Grid>
						</Box>
					</Grid>
				</Grid>
			</Grid>
			<Box maxWidth="1200px" m="auto" h="100vh">
				<Flex mt="5em" justifyContent="center" w="100%">
					<Box w="80%" mb="3em">
						<Heading pb=".5em" borderBottom="2px solid #000" as="h1" textAlign="left">
							SELECTED WORKS
						</Heading>
					</Box>
				</Flex>
				<Grid
					maxWidth="958px"
					width="90%"
					gap={5}
					justifyContent="center"
					h="100%"
					gridTemplateColumns="repeat(auto-fill, 300px)"
					gridTemplateRows="repeat(auto-fill, 390px)"
					margin="auto"
				>
					{projectData.map((data) => {
						return (
							<Box>
								<Box position="relative">
									<Heading
										fontSize="1.5em"
										w="70%"
										bg="#f0f0f0"
										zIndex="10"
										position="absolute"
										top="1em"
										left="0"
										pl="1em"
									>
										{data.title}
									</Heading>
									{data.image ? (
										<Fragment>
											<Image src={data.image} maxHeight="200px" w="100%" objectFit="cover" />
										</Fragment>
									) : (
										<Skeleton />
									)}
								</Box>
								<Box padding="1em">
									<Text mb="1em">{data.paragraph}</Text>
									<Box h="50px" mb="1em">
										{data.stack.map((tech) => <Badge m=".2em">{tech}</Badge>)}
									</Box>
									<HStack spacing="2em">
										{data.live === '' ? (
											<Fragment />
										) : (
											<Fragment>
												<a href={data.live} target="_blank" rel="noreferrer">
													<Button type="primary">Live Site</Button>
												</a>
											</Fragment>
										)}
										<GitHub />
									</HStack>
								</Box>
							</Box>
						);
					})}
				</Grid>
			</Box>
		</Box>
	);
}

const projectData = [
	{
		title: 'The Pit',
		image: stock,
		paragraph: 'A stock trading platform designed for the user in mind and delivering a friendly experience.',
		live: '',
		stack: [ 'React', 'Redux', 'Chakra', 'WebSocket', 'Nodejs', 'Mongodb', 'PostgreSQL', '' ],
		repo: 'https://github.com/nicholasdegrate/The-Pit-frontend'
	},
	{
		title: 'Stay',
		image: stay,
		paragraph: 'A real estate booking app for hosts and consumers to rent apartments, houses, and condos.',
		live: '',
		stack: [ 'React', 'Redux', 'Chakra', 'Rails', 'JWT TOKEN' ],
		repo: 'https://github.com/nicholasdegrate/stay-frontend'
	},
	{
		title: 'LRP',
		image: lrp,
		paragraph: 'A real estate landing page built in react for generating leads and traffic.',
		live: 'https://legacyrebuildproperties.com/',
		stack: [ 'TypeScript', 'Emailjs-com', 'Chakra', 'React' ],
		repo: 'https://github.com/nicholasdegrate/real-estate'
	},
	{
		title: 'EverMonkey',
		image: evermonkey,
		paragraph: 'EverMonkey is an elegant note taking app designed for keeping track of your busy work week.',
		live: '',
		stack: [ 'JavaScript', 'Rails', 'Bulma' ],
		repo: 'https://github.com/nicholasdegrate/EverMonkey-frontend'
	}
];

export default App;
