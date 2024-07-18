'use client'

import { useState } from 'react'
import {
    Progress,
    Box,
    ButtonGroup,
    Button,
    Heading,
    Flex,
    FormControl,
    GridItem,
    FormLabel,
    Input,
    Select,
    SimpleGrid,
    InputLeftAddon,
    InputGroup,
    Textarea,
    FormHelperText,
    InputRightElement,
    Avatar,
} from '@chakra-ui/react'

import { useToast } from '@chakra-ui/react'
import { User } from '@workos-inc/node'

const Form1 = ({ firstName, lastName, profilePictureUrl }: { firstName: any, lastName: any, profilePictureUrl: any }) => {

    const [show, setShow] = useState(false);
    const [avatar, setAvatar] = useState<string | ArrayBuffer | null>(profilePictureUrl);
    const handleClick = () => setShow(!show);

    const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setAvatar(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };
    return (
        <>
            <Heading w="100%" textAlign={'center'} fontWeight="bold" mb="5%">
                Some info about you
            </Heading>
            <Flex justifyContent="center" mb="4%">
                <Box position="relative">
                    <Avatar size="xl" src={avatar?.toString() ?? ''} />
                    <Input
                        type="file"
                        accept="image/*"
                        onChange={handleAvatarChange}
                        position="absolute"
                        top="0"
                        left="0"
                        width="100%"
                        height="100%"
                        opacity="0"
                        cursor="pointer"
                    />
                </Box>
            </Flex>
            <Flex>
                <FormControl mr="5%">
                    <FormLabel htmlFor="first-name" fontWeight={'normal'} >
                        First name
                    </FormLabel>
                    <Input id="first-name" placeholder="First name" defaultValue={firstName} />
                </FormControl>

                <FormControl>
                    <FormLabel htmlFor="last-name" fontWeight={'normal'} >
                        Last name
                    </FormLabel>
                    <Input id="last-name" placeholder="Last name" defaultValue={lastName} />
                </FormControl>
            </Flex>
            <Flex mt={4}>
                <FormControl mr="5%">
                    <FormLabel htmlFor="gender" fontWeight={'normal'}>
                        Gender
                    </FormLabel>
                    <Select
                        id="gender"
                        name="gender"
                        placeholder="Select option"
                        focusBorderColor="brand.400"
                        w="full"
                        rounded="md">
                        <option>Male</option>
                        <option>Female</option>
                    </Select>
                </FormControl>

                <FormControl mr="5%">
                    <FormLabel htmlFor="height" fontWeight={'normal'}>
                        Height (cm)
                    </FormLabel>
                    <Input id="height" type='number' placeholder="Height in cm" />
                </FormControl>

                <FormControl mr="5%">
                    <FormLabel htmlFor="weight" fontWeight={'normal'}>
                        Weight (kg)
                    </FormLabel>
                    <Input id="weight" type='number' placeholder="Weight in kg" />
                </FormControl>

                <FormControl>
                    <FormLabel htmlFor="age" fontWeight={'normal'}>
                        Age
                    </FormLabel>
                    <Input id="age" type='number' placeholder="Age" />
                </FormControl>
            </Flex>

        </>
    )
}



const Form2 = () => {
    return (
        <>
            <Heading w="100%" textAlign={'center'} fontWeight="bold" mb="5%">
                User Details
            </Heading>
            <FormControl as={GridItem} colSpan={[6, 3]}>
                <FormLabel
                    htmlFor="country"

                    color="gray.700"
                    _dark={{
                        color: 'gray.50',
                    }}>
                    Country / Region
                </FormLabel>
                <Select
                    id="country"
                    name="country"
                    autoComplete="country"
                    placeholder="Select option"
                    focusBorderColor="brand.400"
                    w="full"
                    rounded="md">
                    <option>United States</option>
                    <option>Canada</option>
                    <option>Mexico</option>
                </Select>
            </FormControl>

            <FormControl as={GridItem} colSpan={6}>
                <FormLabel
                    htmlFor="street_address"

                    color="gray.700"
                    _dark={{
                        color: 'gray.50',
                    }}
                    mt="2%">
                    Street address
                </FormLabel>
                <Input
                    type="text"
                    name="street_address"
                    id="street_address"
                    autoComplete="street-address"
                    focusBorderColor="brand.400"

                    w="full"
                    rounded="md"
                />
            </FormControl>

            <FormControl as={GridItem} colSpan={[6, 6, null, 2]}>
                <FormLabel
                    htmlFor="city"

                    color="gray.700"
                    _dark={{
                        color: 'gray.50',
                    }}
                    mt="2%">
                    City
                </FormLabel>
                <Input
                    type="text"
                    name="city"
                    id="city"
                    autoComplete="city"
                    focusBorderColor="brand.400"
                    w="full"
                    rounded="md"
                />
            </FormControl>

            <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
                <FormLabel
                    htmlFor="state"
                    color="gray.700"
                    _dark={{
                        color: 'gray.50',
                    }}
                    mt="2%">
                    State / Province
                </FormLabel>
                <Input
                    type="text"
                    name="state"
                    id="state"
                    autoComplete="state"
                    focusBorderColor="brand.400"
                    w="full"
                    rounded="md"
                />
            </FormControl>

            <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
                <FormLabel
                    htmlFor="postal_code"
                    color="gray.700"
                    _dark={{
                        color: 'gray.50',
                    }}
                    mt="2%">
                    ZIP / Postal
                </FormLabel>
                <Input
                    type="text"
                    name="postal_code"
                    id="postal_code"
                    autoComplete="postal-code"
                    focusBorderColor="brand.400"
                    w="full"
                    rounded="md"
                />
            </FormControl>
        </>
    )
}



export default function Multistep({ user }: { user: User }) {
    const toast = useToast()
    const [step, setStep] = useState(1)
    const { firstName, lastName, profilePictureUrl } = user || { firstName: '', lastName: '', profilePictureUrl: '' }


    return (
        <>
            <Box
                maxWidth={800}
                p={6}
                m="10px auto"
                as="form">

                {step === 1 ? <Form1 firstName={firstName} lastName={lastName} profilePictureUrl={profilePictureUrl} /> : <Form2 />}
                <ButtonGroup mt="5%" w="100%">
                    <Flex w="100%" justifyContent="space-between">
                        <Flex>
                            <Button
                                onClick={() => {
                                    setStep(step - 1)
                                }}
                                isDisabled={step === 1}
                                colorScheme="teal"
                                variant="solid"
                                w="7rem"
                                mr="5%">
                                Back
                            </Button>
                            <Button
                                w="7rem"
                                isDisabled={step === 2}
                                onClick={() => {
                                    setStep(step + 1)
                                }}
                                colorScheme="teal"
                                variant="outline">
                                Next
                            </Button>
                        </Flex>
                        {step === 2 ? (
                            <Button
                                w="7rem"
                                colorScheme="red"
                                variant="solid"
                                onClick={() => {
                                    toast({
                                        title: 'Account created.',
                                        description: "We've created your account for you.",
                                        status: 'success',
                                        duration: 3000,
                                        isClosable: true,
                                    })
                                }}>
                                Submit
                            </Button>
                        ) : null}
                    </Flex>
                </ButtonGroup>
            </Box>
        </>
    )
}