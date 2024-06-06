import { Container, Text, VStack, Box, Heading, Flex, Spacer, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Flex as="nav" bg="blue.500" color="white" p={4} borderRadius="md" mb={6}>
        <Heading size="md">MyApp</Heading>
        <Spacer />
        <Button as={Link} to="/" variant="ghost" color="white" _hover={{ bg: "blue.600" }}>
          Home
        </Button>
      </Flex>
      <Box textAlign="center" py={10} px={6}>
        <Heading as="h2" size="xl" mt={6} mb={2}>
          Welcome to MyApp
        </Heading>
        <Text color={"gray.500"}>
          This is your blank canvas. Start building something amazing!
        </Text>
      </Box>
    </Container>
  );
};

export default Index;