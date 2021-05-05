import * as React from 'react'
import {Box, Stack, Heading, Input, Button, Text} from '@chakra-ui/react'
import {Link} from 'react-router-dom'

function Register() {
  return (
    <Box w="100%" d="flex" justifyContent="center" alignItems="center">
      <Stack
        w="30rem"
        h="fit-content"
        border="1px solid #eee"
        borderRadius="5px"
        p="3rem"
        shadow="md"
        my="10rem"
      >
        <Heading textAlign="center">Create a new account</Heading>
        <form>
          <Box my="1rem">
            <label htmlFor="firstname">First Name</label>
            <Input
              size="lg"
              id="firstname"
              type="text"
              aria-label="first name"
            />
          </Box>

          <Box my="1rem">
            <label htmlFor="lastname">Last Name</label>
            <Input size="lg" id="lastname" type="text" aria-label="last name" />
          </Box>

          <Box my="1rem">
            <label htmlFor="password">Password</label>
            <Input
              size="lg"
              id="password"
              type="password"
              aria-label="password"
            />
          </Box>

          <Box my="1rem">
            <label htmlFor="confirm-password">Confirm Password</label>
            <Input
              size="lg"
              id="confirm-password"
              type="password"
              aria-label="confirm password"
            />
          </Box>

          <Box my="1rem">
            <Button size="lg" w="100%" colorScheme="green">
              Create account
            </Button>
          </Box>

          <p>
            <Text fontSize="0.8rem" textAlign="center">
              Already have an account?{' '}
              <Link to="/login" color="green">
                Sign in
              </Link>
            </Text>
          </p>
        </form>
      </Stack>
    </Box>
  )
}

export default Register
