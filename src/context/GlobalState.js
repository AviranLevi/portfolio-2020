import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import { socialIcons, socialIconsBackgroundColors } from '../constant/icons';

const initialState = {
  user: {
    name: 'Aviran Levi',
    location: 'Tel Aviv-Yafo, Israel',
    jobTitle: 'Full-stack Web Developer',
    socialLinks: [
      { icon: socialIcons.github, name: 'github', url: '', style: socialIconsBackgroundColors.github },
      { icon: socialIcons.instagram, name: 'instagram', url: '', style: socialIconsBackgroundColors.instagram },
      { icon: socialIcons.linkedIn, name: 'linkedIn', url: '', style: socialIconsBackgroundColors.linkedIn },
    ],
  },
  projects: [
    {
      title: 'JoinUS',
      tech: ['HTML', 'CSS', 'SASS', 'JavaScript', 'React', 'Redux', 'Node.JS', 'Express.js', 'JWT', 'MongoDB'],
      url: 'https://join-us-client.herokuapp.com/',
      github: 'https://github.com/AviranLevi/join-us',
    },

    {
      title: 'Rick & Morty - Space Invaders',
      tech: ['HTML', 'CSS', 'React', 'Mobx', 'Node.JS', 'Express', 'Socket.io'],
      url: 'https://rick-and-morty-space-game.herokuapp.com/',
      github: 'https://github.com/tomeraitz/rick-morty-game',
    },
    {
      title: 'imageSearch',
      tech: ['HTML', 'CSS', 'Angular8', 'RxJS'],
      url: 'https://image--search.herokuapp.com/',
      github: 'https://github.com/AviranLevi/imageSearch',
    },
  ],

  features: {
    openProfileCard: false,
    openProjectsCard: false,
    sendMessage: false,
    openMessageToast: false,
  },

  messageForm: {
    userName: '',
    email: '',
    message: '',
  },
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, setState] = useReducer(AppReducer, initialState);

  const toggleProfileCard = (bool) => setState({ type: 'TOGGLE_PROFILE', payload: bool });

  const toggleProjectsCard = (bool) => setState({ type: 'TOGGLE_PROJECTS', payload: bool });

  const toggleMessageToast = (bool) => setState({ type: 'TOGGLE_MESSAGE_TOAST', payload: bool });

  return (
    <GlobalContext.Provider value={{ state, toggleProfileCard, toggleProjectsCard, toggleMessageToast }}>
      {children}
    </GlobalContext.Provider>
  );
};
