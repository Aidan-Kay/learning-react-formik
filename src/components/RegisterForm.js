import {
  Button,
  Checkbox,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Select,
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import React from "react";
import * as yup from "yup";

const validationSchema = yup.object({
  emailAddress: yup
    .string()
    .email("Invalid email address")
    .required("Email address is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(3, "Must be greater than 3 characters"),
  firstName: yup
    .string()
    .required("First name is required")
    .min(3, "Must be greater than 3 characters"),
  lastName: yup
    .string()
    .required("Last name is required")
    .min(3, "Must be greater than 3 characters"),
  country: yup.string().required("Country is required"),
});

const ChakraInput = ({ name, label, inputProps, ...rest }) => (
  <Field name={name}>
    {({ field, form }) => (
      <FormControl
        isInvalid={form.errors[name] && form.touched[name]}
        {...rest}
      >
        <FormLabel htmlFor={name}>{label}</FormLabel>
        <Input id={name} {...field} {...inputProps} />
        <FormErrorMessage>{form.errors[name]}</FormErrorMessage>
      </FormControl>
    )}
  </Field>
);

const ChakraSelect = ({ name, label, selectProps, ...rest }) => (
  <Field name={name}>
    {({ field, form }) => (
      <FormControl
        isInvalid={form.errors[name] && form.touched[name]}
        {...rest}
      >
        <FormLabel htmlFor={name}>{label}</FormLabel>
        <Select id={name} {...field} {...selectProps}>
          <option value="UK">United Kingdom</option>
          <option value="US">United States</option>
        </Select>
        <FormErrorMessage>{form.errors[name]}</FormErrorMessage>
      </FormControl>
    )}
  </Field>
);

const ChakraCheckbox = ({ name, label, checkboxProps, ...rest }) => (
  <Field name={name}>
    {({ field, form }) => (
      <FormControl
        isInvalid={form.errors[name] && form.touched[name]}
        {...rest}
      >
        <Checkbox id={name} {...field} {...checkboxProps}>
          {label}
        </Checkbox>
        <FormErrorMessage>{form.errors[name]}</FormErrorMessage>
      </FormControl>
    )}
  </Field>
);

export class RegisterForm extends React.Component {
  render() {
    return (
      <div>
        <Formik
          validateOnChange={true}
          initialValues={{
            emailAddress: "",
            password: "",
            firstName: "",
            lastName: "",
            country: "",
            newsletterSignUp: false,
          }}
          validationSchema={validationSchema}
          onSubmit={(data, { setSubmitting }) => {
            setSubmitting(true);
            setTimeout(() => {
              console.log("submit: ", data);
              setSubmitting(false);
            }, 1000);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <Field name="emailAddress">
                {() => (
                  <>
                    <ChakraInput
                      name="emailAddress"
                      label="Email Address"
                      isRequired
                    />
                    <ChakraInput
                      name="password"
                      label="Password"
                      mt={5}
                      isRequired
                      inputProps={{ type: "password" }}
                    />
                    <ChakraInput
                      name="firstName"
                      label="First Name"
                      mt={5}
                      isRequired
                    />
                    <ChakraInput
                      name="lastName"
                      label="Last Name"
                      mt={5}
                      isRequired
                    />
                    <ChakraSelect
                      name="country"
                      label="Country"
                      mt={5}
                      isRequired
                      selectProps={{ placeholder: "Select country" }}
                    />
                    <ChakraCheckbox
                      name="newsletterSignUp"
                      label="Sign up to our newsletter"
                      mt={5}
                      checkboxProps={{ colorScheme: "teal" }}
                    />
                  </>
                )}
              </Field>
              <Button
                type="submit"
                isLoading={isSubmitting}
                colorScheme="teal"
                width="full"
                mt={5}
              >
                Register
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    );
  }
}
