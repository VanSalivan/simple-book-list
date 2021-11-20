import React from 'react';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router';
import { Box, Heading, Button } from 'rebass';

import { BookForm } from '../../shared';
import { createBook } from '../../api';

const CreateBook = () => {
  const navigate = useNavigate();
  const { mutateAsync, isLoading } = useMutation(createBook);

  const goBack = () => navigate('/');
  const onFormSubmit = async (data) => {
    await mutateAsync(data);
    navigate('/');
  };
  


  return (
    <Box sx={{ py: 3 }}>
      <Heading sx={{ marginBottom: 3 }}>Create New Book</Heading>
      <BookForm onFormSubmit={onFormSubmit} isLoading={isLoading} />
      <Button
        onClick={goBack}
        sx={{ marginTop: 2, backgroundColor: 'black', width: '86px' }}
      >
        Cancel
      </Button>
    </Box>
  );
};

export { CreateBook };
