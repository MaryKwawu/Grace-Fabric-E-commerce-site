import * as React from 'react'
import {Box, Input, Stack, Button, Heading, Text} from '@chakra-ui/react'
import {Link} from 'react-router-dom'

const fetchQuery = async ({uri, method = 'GET', body = null}) => {
  const response = await fetch(uri, {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: body !== null ? JSON.stringify(body) : null,
  })
  const data = await response.json()
  return data
}

const LoginPage = () => {
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
        <Heading textAlign="center">Sign into your account</Heading>
        <form>
          <Box my="1rem">
            <label htmlFor="email">Email</label>
            <Input size="lg" id="email" type="email" aria-label="email" />
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
            <Button size="lg" w="100%" colorScheme="green">
              Sign in
            </Button>
          </Box>

          <p>
            <Text fontSize="0.8rem" textAlign="center">
              Don't have an account?{' '}
              <Link to="/register" color="green">
                Sign up for free
              </Link>
            </Text>
          </p>
        </form>
      </Stack>
    </Box>
  )
}
export default LoginPage
