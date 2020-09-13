import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import Card from '../../components/card';
import ProfilePic from '../../assets/images/profile.jpg';
import CardButton from '../../components/card-button';

const Profile = () => {
  const { data } = useContext(GlobalContext);
  const { user } = data;
  return (
    <div className='profile center-items'>
      <CardButton imgSrc={ProfilePic} />
      <Card title={user.name} jobTitle={user.jobTitle} location={user.location} links={user.socialLinks} />
    </div>
  );
};
export default Profile;
