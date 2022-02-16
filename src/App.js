import { Box, Flex, Heading } from "@chakra-ui/react";
import { RegisterForm } from "./components/RegisterForm";

function App() {
  return (
    <div className="App">
      <Flex
        width="full"
        pt={20}
        align="center"
        justifyContent="center"
        direction={"column"}
      >
        <Heading>Register</Heading>
        <Box
          width="500px"
          mt={10}
          p={8}
          borderWidth={1}
          borderRadius={8}
          boxShadow="md"
        >
          <RegisterForm />
        </Box>
      </Flex>
    </div>
  );
}

export default App;
