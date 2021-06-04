import { useState, Fragment } from 'react';
import { Box, Flex, HStack, Image, useMediaQuery, VStack, Text, Heading, Grid } from '@chakra-ui/react';
import { Drawer } from 'antd';
import { Linkedin, GitHub } from 'react-feather';
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import stock from './image/stock.jpg';
import stay from './image/airbnb.jpg';
import lrp from './image/realestate.jpg';
import evermonkey from './image/notes.jpg';
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
							<Text>Work</Text>
							<Text>About</Text>
							<Text>Skills</Text>
							<Text>Resume</Text>
						</HStack>
					</Fragment>
				)}
				{mobile && (
					<Fragment>
						<VStack mr="1em" onClick={showDrawer} cursor="pointer">
							<Box h="2px" w="20px" bg="#000" />
							<Box h="2px" w="20px" bg="#000" />
						</VStack>
						<Drawer placement="right" closable={false} onClose={onClose} visible={visible}>
							<VStack align="left">
								<Text cursor="pointer">Work</Text>
								<Text cursor="pointer">About</Text>
								<Text cursor="pointer">Skills</Text>
								<Text cursor="pointer">Contact</Text>
								<Text cursor="pointer">Resume</Text>
							</VStack>
						</Drawer>
					</Fragment>
				)}
				{mobile ? (
					<Fragment />
				) : (
					<Fragment>
						<button className="nav-cta-btn">
							Contact Nicholas -{' '}
							<Text fontWeight="300" display="inline-block" fontStyle="italic">
								he's friendly
							</Text>
						</button>
					</Fragment>
				)}
			</Flex>
			<Grid h="calc(70vh - 49px)" bg="#F5C53D" gridTemplateColumns="1fr" gridTemplateRows="1fr 10%">
				<Grid
					w="100%"
					justifyContent="center"
					alignItems="center"
					gridTemplateColumns={mobile ? '1fr' : '1fr 1fr'}
					gridTemplateRows={mobile ? '1fr 1fr' : '1fr'}
				>
					<Box ml="5em" alignSelf="center" bg="#000" w="200px" h="200px" borderRadius="100px">
						<Box />
					</Box>
					<Heading mb=".5em" as="h2">
						Building full stack web application<br /> for the user in mind.
					</Heading>
				</Grid>
				<Grid gridTemplateColumns="1fr 70%" borderTop="2px solid #E9B836">
					<Flex justifyContent="center" alignItems="center" borderRight="2px solid #E9B836">
						Hire Me
					</Flex>
					<Grid gridTemplateColumns="1fr 1fr 1fr">
						<Flex justifyContent="center" alignItems="center" borderRight="2px solid #E9B836">
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
									<Linkedin />
								</Flex>
								<Flex justifyContent="center" alignItems="center" borderRight="2px solid #E9B836">
									<GitHub />
								</Flex>
							</Grid>
						</Box>
					</Grid>
				</Grid>
			</Grid>
			<Box maxWidth="1200px" m="auto" h="100%">
				<Flex mt="5em" justifyContent="center" w="100%">
					<Box w="80%">
						<Heading pb=".5em" borderBottom="2px solid #000" as="h1" textAlign="left">
							SELECTED WORKS
						</Heading>
					</Box>
				</Flex>
				<CarouselProvider
					naturalSlideWidth={200}
					naturalSlideHeight={525}
					totalSlides={3}
					interval={5000}
					isPlaying={true}
					infinite
				>
					<Slider>
						<Slide index={1}>
							<Flex justifyContent="center" w="100%" alignItems="center">
								<Grid w="80%" h="100%" gridTemplateRows="2% 1fr">
									<Grid mt="1em" gridTemplateColumns="1fr 1fr 1fr">
										<Flex flexDirection="column">
											<Text>Type</Text>
											<Text fontSize="1.4em" fontWeight="bold">
												Full-Stack
											</Text>
										</Flex>
										<Box>
											<Heading as="h2">The Pit</Heading>
										</Box>
										<Box>
											A stock trading platform designed for the user in mind and delivering a
											friendly experience.
										</Box>
									</Grid>
									<Flex alignItems="end" h="100%" mt="6em">
										<Box>
											<Image maxWidth="500px" h="600px" objectFit="cover" src={stock} />
										</Box>
										<Flex
											display="none"
											w="100%"
											h="100%"
											justifyContent="center"
											alignItems="left"
										>
											<VStack>
												<Text>React</Text>
												<Text>HTML</Text>
												<Text>SCSS</Text>
											</VStack>
										</Flex>
									</Flex>
								</Grid>
							</Flex>
						</Slide>
						<Slide index={2}>
							{' '}
							<Flex justifyContent="center" w="100%" alignItems="center">
								<Grid w="80%" h="100%" gridTemplateRows="2% 1fr">
									<Grid mt="1em" gridTemplateColumns="1fr 1fr 1fr">
										<Flex flexDirection="column">
											<Text>Type</Text>
											<Text fontSize="1.4em" fontWeight="bold">
												Full-Stack
											</Text>
										</Flex>
										<Box>
											<Heading as="h2">Stay</Heading>
										</Box>
										<Box>
											A real estate booking app for hosts and consumers to rent apartments,
											houses, and condos.
										</Box>
									</Grid>
									<Flex alignItems="end" h="100%" mt="6em">
										<Box>
											<Image maxWidth="500px" h="600px" objectFit="cover" src={stay} />
										</Box>
										<Flex
											display="none"
											w="100%"
											h="100%"
											justifyContent="center"
											alignItems="left"
										>
											<VStack>
												<Text>React</Text>
												<Text>HTML</Text>
												<Text>SCSS</Text>
											</VStack>
										</Flex>
									</Flex>
								</Grid>
							</Flex>
						</Slide>
						<Slide index={3}>
							{' '}
							<Flex justifyContent="center" w="100%" alignItems="center">
								<Grid w="80%" h="100%" gridTemplateRows="2% 1fr">
									<Grid mt="1em" gridTemplateColumns="1fr 1fr 1fr">
										<Flex flexDirection="column">
											<Text>Type</Text>
											<Text fontSize="1.4em" fontWeight="bold">
												Full-Stack
											</Text>
										</Flex>
										<Box>
											<Heading as="h2">EverMonkey</Heading>
										</Box>
										<Box>
											EverMonkey is an elegant note taking app designed for keeping track of your
											busy work week.
										</Box>
									</Grid>
									<Flex alignItems="end" h="100%" mt="6em">
										<Box>
											<Image maxWidth="500px" h="600px" objectFit="cover" src={evermonkey} />
										</Box>
										<Flex
											display="none"
											w="100%"
											h="100%"
											justifyContent="center"
											alignItems="left"
										>
											<VStack>
												<Text>React</Text>
												<Text>HTML</Text>
												<Text>SCSS</Text>
											</VStack>
										</Flex>
									</Flex>
								</Grid>
							</Flex>
						</Slide>
					</Slider>
				</CarouselProvider>
			</Box>
		</Box>
	);
}

export default App;
