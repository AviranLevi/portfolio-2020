import React, { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../../context/GlobalState'
import ProfilePic from '../../assets/images/ELD06141.jpg'
import Title from '../../components/title'
import Button from '../../components/button/Button'
import { featuresIcons } from '../../constant/icons'
import imageSourceLoaded from '../../utils/imageSourceLoaded'
import FadeLoader from 'react-spinners/FadeLoader'
import SocialLink from './social-link'

const Profile = () => {
  const { state, toggleProfileCard, toggleMessageToast } = useContext(GlobalContext)
  const { profile, features } = state
  const { openProfileCard } = features
  const backgroundImageSrc = imageSourceLoaded(ProfilePic)
  const [loadingImg, setLoadingImage] = useState(true)
  const openCardStyle = {
    backgroundImage: `url(${backgroundImageSrc})`,
  }

  useEffect(() => {
    if (backgroundImageSrc) {
      setLoadingImage(false)
    }
  }, [backgroundImageSrc])

  return loadingImg ? (
    <FadeLoader size={100} color="#f7fff740" />
  ) : (
    <div className={`profile center-items fade-in ${openProfileCard && 'expend'}`}>
      <div
        onClick={() => toggleProfileCard(!openProfileCard)}
        className={`open-card-btn ${openProfileCard && 'open-card-btn-expend'}`}
        style={openCardStyle}
      ></div>

      <div className={`card center-items ${openProfileCard && 'expend-card'} `}>
        <div
          onClick={() => toggleProfileCard(false)}
          className={`close-card ${openProfileCard && 'close-card-expend'}`}
        >
          {featuresIcons.close}
        </div>

        <div className={`card-titles center-items ${openProfileCard && 'expend-titles'}`}>
          <Title className="card-title" text={profile.name} />

          <h3 className="card-job-title">
            {profile.jobTitle} from <span>{profile.location}</span>
          </h3>
        </div>

        <div className={`cards-links center-items ${openProfileCard && 'expend-card-links'}`}>
          {profile.socialLinks.length > 0 &&
            profile.socialLinks.map((link, index) => <SocialLink index={index} link={link} />)}
        </div>

        <div className={`card-btn ${openProfileCard && 'expend-card-btn'}`}>
          <Button action={() => toggleMessageToast(true)} text="Lets talk!" />
        </div>
      </div>
    </div>
  )
}

export default Profile
