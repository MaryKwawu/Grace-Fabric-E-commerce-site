import * as React from "react";
import {
  Box,
  Stack,
  Heading,
  Input,
  Button,
  Text,
  useToast,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { registerUser } from "../services";

function Register() {
  const { register, handleSubmit, setError, formState } = useForm({
    mode: "all",
    defaultValues: {},
  });
  const [signUpLoading, setSignUpLoading] = React.useState(false);
  const toast = useToast();

  async function createNewAccount(data) {
    try {
      if (data.password !== data.confirmPassword) {
        setError("confirmPassword", {
          message: "Passwords don't match",
          shouldFocus: true,
        });
        return;
      }

      setSignUpLoading(true);

      const payload = {
        email: data.email,
        firstName: data.firstname,
        lastName: data.lastname,
        phoneNumber: data.phoneNumber,
        address: data.address,
        password: data.password,
      };

      const response = await registerUser(payload);

      console.log(response);

      toast({
        description: "Account created successfully. Please sign in",
        status: "success",
        position: "top",
      });
    } catch (error) {
      toast({
        description: "Something happened! Could not register",
        status: "error",
        position: "top",
      });
    } finally {
      setSignUpLoading(false);
    }
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
        <Heading textAlign="center">Create a new account</Heading>
        <form onSubmit={handleSubmit(createNewAccount)}>
          <Box my="1rem">
            <label htmlFor="firstname">First Name</label>
            <Input
              {...register("firstname", {
                required: {
                  value: true,
                  message: "Please enter your first name",
                },
              })}
              id="firstname"
              size="lg"
              type="text"
              aria-label="first name"
            />

            {formState.errors.firstname && (
              <Text color="red.500" fontSize="0.9rem">
                <i>{formState.errors.firstname.message}</i>
              </Text>
            )}
          </Box>
          <Box my="1rem">
            <label htmlFor="lastname">Last Name</label>
            <Input
              {...register("lastname", {
                required: {
                  value: true,
                  message: "Please enter your last name",
                },
                maxLength: {
                  value: 20,
                  message: "Your last name cannot be more than 20 characters",
                },
              })}
              size="lg"
              id="lastname"
              type="text"
              aria-label="last name"
            />
            {formState.errors.lastname && (
              <Text color="red.500" fontSize="0.9rem">
                <i>{formState.errors.lastname.message}</i>
              </Text>
            )}
          </Box>
          <Box my="1rem">
            <label htmlFor="email">Email</label>
            <Input
              {...register("email", {
                required: {
                  value: true,
                  message: "Please enter your email",
                },
              })}
              size="lg"
              id="email"
              type="email"
              aria-label="email"
            />
            {formState.errors.email && (
              <Text color="red.500" fontSize="0.9rem">
                <i>{formState.errors.email.message}</i>
              </Text>
            )}
          </Box>{" "}
          <Box my="1rem">
            <label htmlFor="email">Address</label>
            <Input
              {...register("address", {
                required: {
                  value: true,
                  message: "Please enter your address",
                },
              })}
              size="lg"
              id="address"
              type="text"
              aria-label="address"
            />
            {formState.errors.address && (
              <Text color="red.500" fontSize="0.9rem">
                <i>{formState.errors.address.message}</i>
              </Text>
            )}
          </Box>{" "}
          <Box my="1rem">
            <label htmlFor="email">Phone Number</label>
            <Input
              {...register("phoneNumber", {
                required: {
                  value: true,
                  message: "Please enter your phone number",
                },
              })}
              size="lg"
              id="phoneNumber"
              type="text"
              aria-label="Phone number"
            />
            {formState.errors.phoneNumber && (
              <Text color="red.500" fontSize="0.9rem">
                <i>{formState.errors.phoneNumber.message}</i>
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
            {formState.errors.password && (
              <Text color="red.500" fontSize="0.9rem">
                <i>{formState.errors.password.message}</i>
              </Text>
            )}
          </Box>
          <Box my="1rem">
            <label htmlFor="confirm-password">Confirm Password</label>
            <Input
              {...register("confirmPassword", {
                required: {
                  value: true,
                  message: "Please confirm your password",
                },
                minLength: {
                  value: 6,
                  message: "Password must be at least six characters long",
                },
              })}
              size="lg"
              id="confirm-password"
              type="password"
              aria-label="confirm password"
            />
            {formState.errors.confirmPassword && (
              <Text color="red.500" fontSize="0.9rem">
                <i>{formState.errors.confirmPassword.message}</i>
              </Text>
            )}
          </Box>
          <Box my="1rem">
            <Button
              type="submit"
              size="lg"
              w="100%"
              colorScheme="green"
              isLoading={signUpLoading}
              loadingText="Creating account"
              disabled={!formState.isDirty || !formState.isValid}
            >
              Create account
            </Button>
          </Box>
          <p>
            <Text fontSize="0.8rem" textAlign="center">
              Already have an account?{" "}
              <Link to="/login" color="green">
                Sign in
              </Link>
            </Text>
          </p>
        </form>
      </Stack>
    </Box>
  );
}

export default Register;
