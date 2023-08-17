import React from 'react';
import Intro from '../Intro/Intro';
import NewCards from '../NewCards'
import Revelant from '../Revelant'

const index = () => {
  return (
    <div className='container mx-auto'>
      <Intro/>
      <NewCards/>
      <Revelant/>
    </div>
  );
};

export default index;