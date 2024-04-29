import React, { useState, useEffect } from "react";
import { Box, Button, Container, FormControl, FormLabel, Input, VStack, Heading, Text, List, ListItem, IconButton, useToast } from "@chakra-ui/react";
import { FaPlus, FaTrash } from "react-icons/fa";
// Removed import of client from non-existent ../lib/crud module

const Index = () => {
  const [customers, setCustomers] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const toast = useToast();

  useEffect(() => {
    fetchCustomers();
  }, []);

  const fetchCustomers = async () => {
    // Simulated fetching data
    const data = [
      { id: "customer:1", name: "John Doe", email: "john@example.com" },
      { id: "customer:2", name: "Jane Doe", email: "jane@example.com" },
    ];
    setCustomers(data);
  };

  const addCustomer = async () => {
    if (!name || !email) {
      toast({
        title: "Error",
        description: "Name and email cannot be empty",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
      return;
    }
    const key = `customer:${Date.now()}`;
    // Simulated adding customer
    fetchCustomers();
    setName("");
    setEmail("");
    toast({
      title: "Customer Added",
      description: "You have successfully added a new customer.",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

  const deleteCustomer = async (id) => {
    // Simulated deletion of customer
    fetchCustomers();
    toast({
      title: "Customer Deleted",
      description: "The customer has been successfully deleted.",
      status: "info",
      duration: 2000,
      isClosable: true,
    });
  };

  return (
    <Container maxW="container.md" py={5}>
      <VStack spacing={4} align="stretch">
        <Heading>Customer Management System</Heading>
        <FormControl>
          <FormLabel>Name</FormLabel>
          <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter customer name" />
        </FormControl>
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter customer email" />
        </FormControl>
        <Button leftIcon={<FaPlus />} colorScheme="blue" onClick={addCustomer}>
          Add Customer
        </Button>
        <Heading size="md">Customers List</Heading>
        <List spacing={3}>
          {customers.map((customer) => (
            <ListItem key={customer.id} d="flex" justifyContent="space-between" alignItems="center">
              <Box>
                <Text fontWeight="bold">{customer.name}</Text>
                <Text fontSize="sm">{customer.email}</Text>
              </Box>
              <IconButton aria-label="Delete customer" icon={<FaTrash />} onClick={() => deleteCustomer(customer.id)} />
            </ListItem>
          ))}
        </List>
      </VStack>
    </Container>
  );
};

export default Index;
