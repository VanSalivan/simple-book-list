import React from 'react';
import { useMutation, useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router';
import { Box, Flex, Heading } from 'rebass';
import Loader from 'react-loader-spinner';

import { BookForm } from '../../shared/BookForm';
import { getBook, updateBook } from '../../api';

const UpdateBook = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data, error, isLoading, isError } = useQuery(
    ['book', { id }],
    getBook
  );
  const { mutateAsync, isLoading: isMutating } = useMutation(updateBook);

  const onFormSubmit = async (data) => {
    await mutateAsync({ ...data, id });
    navigate('/');
  };

  if (isLoading) {
    return (
      <Flex py={5} justifyContent='center'>
        <Loader type='ThreeDots' color='#ccc' height={30} />
      </Flex>
    );
  }

  if (isError) {
    return (
      <Flex py={5} justifyContent='center'>
        Error: {error.message}
      </Flex>
    );
  }

  return (
    <Box sx={{ py: 3 }}>
      <Heading sx={{ marginBottom: 3 }}>Update Book</Heading>
      <BookForm
        defaultValues={data}
        onFormSubmit={onFormSubmit}
        isLoading={isMutating}
      />
    </Box>
  );
};

export { UpdateBook };
