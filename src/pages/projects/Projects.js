import React from 'react';
import Card from '../../components/card';
import ProfilePic from '../../assets/images/ELD06141.jpg';
import CardButton from '../../components/card-button';

const Projects = () => (
  <div className='projects center-items'>
    <CardButton imgSrc={ProfilePic} />
    <Card title='Projects' />
  </div>
);
export default Projects;
