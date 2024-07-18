
import {
    Flex,
    Avatar,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    Stack,
    useColorMode,
    Center,
} from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { handleSignOut } from '@/app/api/auth/actions/signOut';
import Link from 'next/link';


const handleLogout = async () => {
    await handleSignOut();

};

export default function Badge({ userImg, firstName, lastName }: { userImg: string, firstName: string, lastName: string }) {
    const { colorMode, toggleColorMode } = useColorMode()
    return (

        <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
                <Button onClick={toggleColorMode}>
                    {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                </Button>

                <Menu>
                    <MenuButton
                        as={Button}
                        rounded={'full'}
                        variant={'link'}
                        cursor={'pointer'}
                        minW={0}>
                        <Avatar
                            size={'sm'}
                            src={userImg}
                        />
                    </MenuButton>
                    <MenuList alignItems={'center'}>
                        <br />
                        <Center>
                            <Avatar
                                size={'2xl'}
                                src={userImg}
                            />
                        </Center>
                        <br />
                        <Center>
                            <p>{firstName}{' '}{lastName}</p>
                        </Center>
                        <br />
                        <MenuDivider />
                        <MenuItem as={Link} href={'/dashboard'}>Dashboard</MenuItem>
                        <MenuItem>Account Settings</MenuItem>

                        <MenuItem onClick={handleLogout}>Logout</MenuItem>

                    </MenuList>
                </Menu>
            </Stack>
        </Flex>

    )
}