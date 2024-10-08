import authService from '@/appwrite/auth';
import { useNotification } from '@/lib/provider/context/NotificationProvider';
import { getColorFromId, getNameFromEmail } from '@/lib/utils/resuseableFunctions';
import { getUserDetail } from '@/store/feature-user';
import nookies from 'nookies';
import {
	IconButton,
	Avatar,
	Box,
	Flex,
	HStack,
	VStack,
	useColorModeValue,
	Text,
	Menu,
	MenuButton,
	MenuDivider,
	MenuItem,
	MenuList,
	Image,
} from '@chakra-ui/react';
import { FiMenu, FiBell, FiChevronDown } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';

const MobileNav = ({ onOpen, ...rest }) => {
	const notify = useNotification();
	const dispatch = useDispatch();
	const router = useRouter();
	const user = useSelector((state) => state.user.userData);

	const handleLogout = async () => {
		try {
			const isLogout = await authService.logout();
			nookies.destroy(null, 'userId', { path: '/' });
			notify('Logout successfully', 'success', 3000);
			await router.push('/sign-in');
			if (isLogout) {
				dispatch(getUserDetail({}));
				console.log('Logout successfully');
			}
		} catch (error) {
			console.error(error);
			notify(`${error.message}`, 'error', 3000);
		} 
	};
	

	return (
		<Flex
			ml={{ base: 0, md: 60 }}
			px={{ base: 4, md: 4 }}
			height="20"
			alignItems="center"
			bg={useColorModeValue('white', 'gray.900')}
			borderBottomWidth="1px"
			borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
			justifyContent={{ base: 'space-between', md: 'flex-end' }}
			{...rest}
		>
			<IconButton
				display={{ base: 'flex', md: 'none' }}
				onClick={onOpen}
				variant="outline"
				aria-label="open menu"
				icon={<FiMenu />}
			/>

			<Image
				display={{ base: 'flex', md: 'none' }}
				src="/google-keep.png"
				alt="Logo"
				boxSize="40px"
			/>

			<HStack spacing={{ base: '0', md: '6' }}>
				<IconButton
					size="lg"
					variant="ghost"
					aria-label="open menu"
					icon={<FiBell />}
				/>
				<Flex alignItems={'center'}>
					<Menu>
						<MenuButton
							py={2}
							transition="all 0.3s"
							_focus={{ boxShadow: 'none' }}
						>
							<HStack>
								<Avatar
									src="/zain.qalandar.jpg"
									name={getNameFromEmail(user?.name)}
									size="md"
									bg={getColorFromId(user?.$id)}
								/>
								<VStack
									display={{ base: 'none', md: 'flex' }}
									alignItems="flex-start"
									spacing="1px"
									ml="2"
								>
									<Text fontSize="sm">
										{getNameFromEmail(user?.name)}
									</Text>
									<Text fontSize="xs" color="gray.600">
										Admin
									</Text>
								</VStack>
								<Box display={{ base: 'none', md: 'flex' }}>
									<FiChevronDown />
								</Box>
							</HStack>
						</MenuButton>
						<MenuList
							bg={useColorModeValue('white', 'gray.900')}
							borderColor={useColorModeValue(
								'gray.200',
								'gray.700'
							)}
						>
							<MenuItem>Profile</MenuItem>
							<MenuItem>Settings</MenuItem>
							<MenuItem>Billing</MenuItem>
							<MenuDivider />
							<MenuItem onClick={handleLogout}>Sign out</MenuItem>
						</MenuList>
					</Menu>
				</Flex>
			</HStack>
		</Flex>
	);
};

export default MobileNav;
