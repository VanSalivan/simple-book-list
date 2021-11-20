import React from 'react';
import { Box, Button } from 'rebass/styled-components';
import { Label, Input } from '@rebass/forms';
import { useForm } from 'react-hook-form';
import Loader from 'react-loader-spinner';

export const BookForm = ({ defaultValues, onFormSubmit, isLoading }) => {
  const { register, handleSubmit } = useForm({ defaultValues });

  const onSubmit = handleSubmit((data) => {
    onFormSubmit(data);
  });

  return (
    <form onSubmit={onSubmit}>
      <Box sx={{ mb: 3 }}>
        <Label htmlfor='title'>Title</Label>
        <Input {...register('title')} name='title' id='title' type='text' />
      </Box>
      <Box sx={{ mb: 3 }}>
        <Label htmlfor='author'>Author</Label>
        <Input {...register('author')} name='author' id='author' type='text' />
      </Box>
      <Button>
        {isLoading ? (
          <Loader type='ThreeDots' color='#fff' height={10} />
        ) : (
          'Submit'
        )}
      </Button>
    </form>
  );
};
