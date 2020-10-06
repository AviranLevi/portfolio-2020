import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import ProfilePic from '../../assets/images/ELD06141.jpg';
import Title from '../../components/title';
import Button from '../../components/button/Button';
import { featuresIcons } from '../../constant/icons';

const Profile = () => {
  const { state, toggleProfileCard, toggleMessageToast } = useContext(GlobalContext);
  const { profile, features } = state;
  const { openProfileCard } = features;

  return (
    <div className={`profile center-items ${openProfileCard ? 'expend' : ''}`}>
      <div
        onClick={() => toggleProfileCard(!openProfileCard)}
        className={`open-card-btn ${openProfileCard ? 'open-card-btn-expend' : ''}`}
        style={{ backgroundImage: `url(${ProfilePic})` }}
      ></div>

      <div className={`card center-items ${openProfileCard ? 'expend-card' : ''} `}>
        <div
          onClick={() => toggleProfileCard(false)}
          className={`close-card ${openProfileCard ? 'close-card-expend' : ''}`}
        >
          {featuresIcons.close}
        </div>

        <div className={`card-titles center-items ${openProfileCard ? 'expend-titles' : ''}`}>
          <Title className='card-title' text={profile.name} />

          <h3 className='card-job-title'>
            {profile.jobTitle} from <span>{profile.location}</span>
          </h3>
        </div>

        <div className={`cards-links center-items ${openProfileCard ? 'expend-card-links' : ''}`}>
          {profile.socialLinks.length
            ? profile.socialLinks.map((link, index) => (
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
