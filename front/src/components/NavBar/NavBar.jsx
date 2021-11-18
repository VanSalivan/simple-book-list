import React from 'react';
import { Flex, Box, Image } from 'rebass/styled-components';
import { Link } from 'react-router-dom';

import logo from '../../shared/logo.svg';

const NavBar = () => {
  return (
    <Flex bg='black' justifyContent='center'>
      <div className='container'>
        <Flex px={2} width='100%' alignItems='center'>
          <Image size={50} src={logo } />
          <Link className='nav-link' to='/'>React Query</Link>
          <Box mx='auto' />
          <Link className='nav-link' to='/create-book'>+ Add new book</Link>
        </Flex>
      </div>
    </Flex>
  );
};

export { NavBar };
