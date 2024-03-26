import React from "react";
import { Box, Heading, Text, Flex, Spacer, VStack, HStack, Link, Container, Icon, Divider, Button } from "@chakra-ui/react";
import { FaDownload } from "react-icons/fa";

const NavBar = () => {
  return (
    <Box bg="blue.900" py={4}>
      <Container maxW="container.lg">
        <Flex align="center">
          <Heading as="h1" color="white" fontSize="2xl">
            Applied R&D Org
          </Heading>
          <Spacer />
          <HStack spacing={8}>
            <Link color="white" fontWeight="bold">
              Home
            </Link>
            <Link color="white" fontWeight="bold">
              About Us
            </Link>
            <Link color="white" fontWeight="bold">
              Research Topics
            </Link>
            <Link color="white" fontWeight="bold">
              Publications
            </Link>
            <Link color="white" fontWeight="bold">
              Contact Us
            </Link>
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
};

const Hero = () => {
  return (
    <Box bg="gray.100" py={20}>
      <Container maxW="container.lg">
        <VStack spacing={8} align="stretch">
          <Heading as="h2" size="2xl">
            Advancing Knowledge Through Research
          </Heading>
          <Text fontSize="xl">We are dedicated to pushing the boundaries of science and technology through innovative research and development.</Text>
        </VStack>
      </Container>
    </Box>
  );
};

const ResearchTopics = () => {
  return (
    <Box py={20}>
      <Container maxW="container.lg">
        <Heading as="h2" size="xl" mb={8}>
          Research Topics
        </Heading>
        <VStack spacing={8} align="stretch">
          <Box>
            <Heading as="h3" size="lg">
              Artificial Intelligence
            </Heading>
            <Text>Exploring the frontiers of AI, machine learning, and deep learning to develop intelligent systems and algorithms.</Text>
          </Box>
          <Box>
            <Heading as="h3" size="lg">
              Quantum Computing
            </Heading>
            <Text>Investigating the potential of quantum computing and its applications in various fields, such as cryptography and optimization.</Text>
          </Box>
          <Box>
            <Heading as="h3" size="lg">
              Renewable Energy
            </Heading>
            <Text>Developing innovative solutions for sustainable energy generation, storage, and distribution to combat climate change.</Text>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};

const Publications = () => {
  return (
    <Box bg="gray.100" py={20}>
      <Container maxW="container.lg">
        <Heading as="h2" size="xl" mb={8}>
          Publications
        </Heading>
        <VStack spacing={8} align="stretch">
          <Box bg="white" p={6} borderRadius="md" boxShadow="md">
            <Heading as="h3" size="lg">
              Advances in Quantum Error Correction
            </Heading>
            <Text mb={4}>John Doe, Jane Smith, et al. | Published in Quantum Journal</Text>
            <Button rightIcon={<Icon as={FaDownload} />} colorScheme="blue" variant="outline">
              Download PDF
            </Button>
          </Box>
          <Box bg="white" p={6} borderRadius="md" boxShadow="md">
            <Heading as="h3" size="lg">
              Deep Learning for Renewable Energy Forecasting
            </Heading>
            <Text mb={4}>Jane Smith, John Doe, et al. | Published in Energy Research</Text>
            <Button rightIcon={<Icon as={FaDownload} />} colorScheme="blue" variant="outline">
              Download PDF
            </Button>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};

const Footer = () => {
  return (
    <Box bg="blue.900" py={10}>
      <Container maxW="container.lg">
        <Flex align="center">
          <Text color="white">&copy; 2023 Applied R&D Org. All rights reserved.</Text>
          <Spacer />
          <HStack spacing={4}>
            <Link color="white">Privacy Policy</Link>
            <Link color="white">Terms of Service</Link>
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
};

const Index = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <ResearchTopics />
      <Publications />
      <Footer />
    </>
  );
};

export default Index;
