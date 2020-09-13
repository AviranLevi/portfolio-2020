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
      tech: ['React', 'Redux', 'Node.JS', 'Express.js'],
    },
  ],

  features: {
    openProfileCard: false,
    openProjectsCard: false,
    sendMessage: false,
  },
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, setState] = useReducer(AppReducer, initialState);

  return <GlobalContext.Provider value={{ data: state }}>{children}</GlobalContext.Provider>;
};
