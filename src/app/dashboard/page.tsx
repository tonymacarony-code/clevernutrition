import Multistep from '@/components/MultiStepForm'
import Sidebar from '@/components/Sidebar'
import { Flex, Heading } from '@chakra-ui/react'
import { getUser } from '@workos-inc/authkit-nextjs'
import React from 'react'

const Dashboard = () => {

    return (
        <Flex>
            <Sidebar />
            <Heading minHeight={1213}>Dashboard</Heading>
            {/* <Multistep user={user} /> */}
        </Flex >
    )
}

export default Dashboard