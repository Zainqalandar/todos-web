import {
  Flex,
  Stack,
  Heading,
  Text,
  Avatar,
  AvatarGroup,
  useBreakpointValue,
} from '@chakra-ui/react'
import avatars from '../utils';


const AuthBanner = () => {
	return (
		<Stack spacing={{ base: 10, md: 20 }}>
			<Heading
				lineHeight={1.1}
				fontSize={{ base: '3xl', sm: '4xl', md: '5xl', lg: '6xl' }}
			>
				Senior web designers{' '}
				<Text
					as={'span'}
					bgGradient="linear(to-r, red.400,pink.400)"
					bgClip="text"
				>
					&
				</Text>{' '}
				Full-Stack Developers
			</Heading>
			<Stack direction={'row'} spacing={4} align={'center'}>
				<AvatarGroup>
					{avatars.map((avatar) => (
						<Avatar
							key={avatar.name}
							name={avatar.name}
							src={avatar.url}
							// eslint-disable-next-line react-hooks/rules-of-hooks
							size={useBreakpointValue({ base: 'md', md: 'lg' })}
							position={'relative'}
							zIndex={2}
							_before={{
								content: '""',
								width: 'full',
								height: 'full',
								rounded: 'full',
								transform: 'scale(1.125)',
								bgGradient: 'linear(to-bl, red.400,pink.400)',
								position: 'absolute',
								zIndex: -1,
								top: 0,
								left: 0,
							}}
						/>
					))}
				</AvatarGroup>
				<Text
					fontFamily={'heading'}
					fontSize={{ base: '4xl', md: '6xl' }}
				>
					+
				</Text>
				<Flex
					align={'center'}
					justify={'center'}
					fontFamily={'heading'}
					fontSize={{ base: 'sm', md: 'lg' }}
					bg={'gray.800'}
					color={'white'}
					rounded={'full'}
					minWidth={useBreakpointValue({ base: '44px', md: '60px' })}
					minHeight={useBreakpointValue({ base: '44px', md: '60px' })}
					position={'relative'}
					_before={{
						content: '""',
						width: 'full',
						height: 'full',
						rounded: 'full',
						transform: 'scale(1.125)',
						bgGradient: 'linear(to-bl, orange.400,yellow.400)',
						position: 'absolute',
						zIndex: -1,
						top: 0,
						left: 0,
					}}
				>
					YOU
				</Flex>
			</Stack>
		</Stack>
	);
};

export default AuthBanner;
