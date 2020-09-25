import React from 'react';
import HashLoader from 'react-spinners/HashLoader';

const Spinner = () => (
  <div className='sweet-spinner center-items fade-in'>
    <HashLoader size={100} color='#f7fff7' />
  </div>
);

export default Spinner;
