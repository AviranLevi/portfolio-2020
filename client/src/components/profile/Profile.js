import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import ProfilePic from '../../assets/images/ELD06141.jpg';
import Title from '../../components/title';
import Button from '../../components/button/Button';

const Profile = () => {
  const { state, toggleProfileCard, toggleMessageToast } = useContext(GlobalContext);
  const { user, features } = state;
  const { openProfileCard } = features;

  return (
    <div className={`profile center-items ${openProfileCard ? 'expend' : ''}`}>
      <div
        onClick={() => toggleProfileCard(!openProfileCard)}
        className={`open-card-btn ${openProfileCard ? 'open-card-btn-expend' : ''}`}
        style={{ backgroundImage: `url(${ProfilePic})` }}
      ></div>

      <div className={`card center-items ${openProfileCard ? 'expend-card' : ''} `}>
        <div className={`card-titles center-items ${openProfileCard ? 'expend-titles' : ''}`}>
          <Title className='card-title' text={user.name} />

          <h3 className='card-job-title'>
            {user.jobTitle} from <span>{user.location}</span>
          </h3>
        </div>

        <div className={`cards-links center-items ${openProfileCard ? 'expend-card-links' : ''}`}>
          {user.socialLinks.length
            ? user.socialLinks.map((link, index) => (
                <a
                  key={index + '-' + link}
                  className='link center-items'
                  href={link.url}
                  style={link.style}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  {link.icon}
                </a>
              ))
            : null}
        </div>

        <div className={`card-btn ${openProfileCard ? 'expend-card-btn' : ''}`}>
          <Button action={() => toggleMessageToast(true)} text='Lets talk!' />
        </div>
      </div>
    </div>
  );
};

export default Profile;