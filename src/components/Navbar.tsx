'use client'
import Image from 'next/image'
import {
    Box,
    Flex,
    Button,
    Stack,
    useColorModeValue,

} from '@chakra-ui/react'

import logo from '../../public/logo.svg'
import { User } from '@workos-inc/node'
import Badge from './Badge'


export default function Nav({ user, signInUrl, signUpUrl }: { user: User | null, signInUrl: string, signUpUrl: string }) {

    const userImg = user?.profilePictureUrl ?? '';
    const firstName = user?.firstName ?? '';
    const lastName = user?.lastName ?? '';
    return (
        <Box pos={'sticky'} top={0}>
            <Flex
                bg={useColorModeValue('white', 'gray.800')}
                color={useColorModeValue('gray.600', 'white')}
                minH={'60px'}
                py={{ base: 2 }}
                px={{ base: 4 }}
                borderBottom={1}
                borderStyle={'solid'}
                borderColor={useColorModeValue('gray.200', 'gray.900')}
                align={'center'}>

                <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
                    <Image src={logo} width={200} alt="logo" />
                </Flex>
                {!user ? (
                    <Stack
                        flex={{ base: 1, md: 0 }}
                        justify={'flex-end'}
                        direction={'row'}
                        spacing={6}>
                        <Button as={'a'} fontSize={'sm'} fontWeight={400} variant={'link'} href={signInUrl}>
                            Sign In
                        </Button>
                        <Button
                            as={'a'}
                            fontSize={'sm'}
                            fontWeight={600}
                            color={'white'}
                            bg={'blue.800'}
                            href={signUpUrl}
                            _hover={{
                                bg: 'blue.900',
                            }}>
                            Sign Up
                        </Button>
                    </Stack>) : <Badge firstName={firstName} lastName={lastName} userImg={userImg} />
                }
            </Flex>
        </Box>
    )
}
