import React from 'react';
import Loader from 'react-loader-spinner';
import { useQuery } from 'react-query';
import { Flex } from 'rebass';

import { BookItem } from './BookItem';
import { getAllBooks } from '../../api';

const BookList = () => {
  const { data, error, isLoading, isError } = useQuery('books', getAllBooks);

  if (isLoading) {
    return (
      <Flex py={5} justifyContent='center'>
        <Loader type='ThreeDots' color='#ccc' height={30} />
      </Flex>
    );
  }

  if (isError) {
    return <span>Error: {error} </span>;
  }

  return (
    <Flex flexDirection='column' alignItems='center'>
      {data.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}
    </Flex>
  );
};

export { BookList };
