import { Container, Box, Heading, Flex } from "@chakra-ui/react";
import { SupabaseAuthUI } from "../integrations/supabase/auth.jsx";

const Login = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Flex as="nav" bg="blue.500" color="white" p={4} borderRadius="md" mb={6}>
        <Heading size="md">MyApp</Heading>
      </Flex>
      <Box textAlign="center" py={10} px={6}>
        <Heading as="h2" size="xl" mt={6} mb={2}>
          Login
        </Heading>
        <SupabaseAuthUI />
      </Box>
    </Container>
  );
};

export default Login;