import * as React from "react";
import { Box, Input, Stack, Button, Heading, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { loginUser, getSignedInUser } from "../services";

const LoginPage = () => {
  const { register, handleSubmit, formState } = useForm({ mode: "all" });

  async function login(formData) {
    const { data } = await loginUser(formData);

    const { token } = data;

    const { data: userData } = await getSignedInUser(token);
    const { user } = userData;

    const loggedInUser = JSON.stringify({
      token,
      user,
    });

    window.localStorage.setItem("loggedInUser", loggedInUser);
  }

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
        <form onSubmit={handleSubmit(login)}>
          <Box my="1rem">
            <label htmlFor="email">Email</label>
            <Input
              {...register("email", {
                required: { value: true, message: "Please enter your email" },
              })}
              size="lg"
              id="email"
              type="email"
              aria-label="email"
            />
            {formState.errors.password && (
              <Text color="red.500" fontSize="0.9rem">
                <i>{formState.errors.password.message}</i>
              </Text>
            )}
          </Box>

          <Box my="1rem">
            <label htmlFor="password">Password</label>
            <Input
              {...register("password", {
                required: { value: true, message: "Please enter a password" },
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters long",
                },
              })}
              size="lg"
              id="password"
              type="password"
              aria-label="password"
            />
            {formState.errors.email && (
              <Text color="red.500" fontSize="0.9rem">
                <i>{formState.errors.email.message}</i>
              </Text>
            )}
          </Box>

          <Box my="1rem">
            <Button
              type="submit"
              size="lg"
              w="100%"
              colorScheme="green"
              disabled={!formState.isDirty || !formState.isValid}
            >
              Sign in
            </Button>
          </Box>

          <p>
            <Text fontSize="0.8rem" textAlign="center">
              Don't have an account?{" "}
              <Link to="/register" color="green">
                Sign up for free
              </Link>
            </Text>
          </p>
        </form>
      </Stack>
    </Box>
  );
};
export default LoginPage;
