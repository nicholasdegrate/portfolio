import { useState, Fragment } from 'react';
import { Box, Flex, HStack, useMediaQuery, VStack, Text, Heading } from '@chakra-ui/react';
import { Drawer, Button } from 'antd';

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
		<Box>
			<Flex padding="1em" alignItems="center" justifyContent="space-between">
				<Text>Nicholas Degrate</Text>
				{mobile ? (
					<Fragment />
				) : (
					<Fragment>
						<HStack spacing="25px">
							<Text>Work</Text>
							<Text>About</Text>
							<Text>Skills</Text>
							<Text>Contact</Text>
							<Text>Resume</Text>
						</HStack>
					</Fragment>
				)}
				{mobile && (
					<Fragment>
						<VStack onClick={showDrawer} cursor="pointer">
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
			</Flex>
			<Flex padding="1em" flexDirection="column" h="500px" justifyContent="center" alignItems="left">
				<Heading mb=".5em" as="h2">
					Building full stack web application<br /> for the user in mind.
				</Heading>
				<Button type="primary" className="cta-btn">
					Connect With Me
				</Button>
			</Flex>
		</Box>
	);
}

export default App;
