import React from 'react';
import { Link } from 'react-router-dom';
import { useMutation, useQueryClient } from 'react-query';
import { Flex, Text, Button } from 'rebass';
import Loader from 'react-loader-spinner';

import { removeBook } from '../../api';

export const BookItem = ({ author, title, id }) => {
  const queryClient = useQueryClient();
  const { mutateAsync, isLoading } = useMutation(removeBook);

  const remove = async () => {
    await mutateAsync(id);
    console.log(queryClient);
    queryClient.invalidateQueries('books');
    console.log(queryClient);
  };

  return (
    <Flex p={3} width='100%' alignItems='center'>
      <Link className='book__title' to={`/update-book/${id}`}>
        {title}
      </Link>
      <Text>{author}</Text>
      <Button className='book__btn' ml={5} onClick={remove}>
        {isLoading ? (
          <Loader type='ThreeDots' color='#fff' height={10} />
        ) : (
          'Remove'
        )}
      </Button>
    </Flex>
  );
};
