import React, { createContext, useReducer } from 'react';
import validator from 'validator';
import AppReducer from './AppReducer';
import * as actionType from './types';
import { socialIcons, socialIconsBackgroundColors } from '../constant/icons';
import techIcons from '../config/techIcons';
import * as api from '../api';

const initialState = {
  user: {
    name: 'Aviran Levi',
    location: 'Tel Aviv-Yafo, Israel',
    jobTitle: 'Full-stack Web Developer',
    socialLinks: [
      {
        icon: socialIcons.github,
        name: 'github',
        url: 'https://github.com/AviranLevi',
        style: socialIconsBackgroundColors.github,
      },
      { icon: socialIcons.instagram, name: 'instagram', url: '', style: socialIconsBackgroundColors.instagram },
      {
        icon: socialIcons.linkedIn,
        name: 'linkedIn',
        url: 'https://www.linkedin.com/in/aviran-levi-looking-for-my-next-challenge-29660911b/',
        style: socialIconsBackgroundColors.linkedIn,
      },
    ],
  },
  projects: [
    {
      title: 'JoinUS',
      tech: [
        techIcons.html,
        techIcons.css,
        techIcons.sass,
        techIcons.javascript,
        techIcons.react,
        techIcons.redux,
        techIcons.node,
        techIcons.express,
        techIcons.jwt,
        techIcons.mongo,
      ],
      displayTech: false,
      url: 'https://join-us-client.herokuapp.com/',
      github: 'https://github.com/AviranLevi/join-us',
    },

    {
      title: 'Rick & Morty - Space Invaders',
      tech: [
        techIcons.html,
        techIcons.css,
        techIcons.javascript,
        techIcons.react,
        techIcons.mobx,
        techIcons.node,
        techIcons.express,
        techIcons.socket,
      ],
      displayTech: false,
      url: 'https://rick-and-morty-space-game.herokuapp.com/',
      github: 'https://github.com/tomeraitz/rick-morty-game',
    },
    {
      title: 'imageSearch',
      tech: [
        techIcons.html,
        techIcons.css,
        techIcons.typescript,
        techIcons.angular,
        techIcons.rxjs,
        techIcons.express,
        techIcons.node,
      ],
      displayTech: false,
      url: 'https://image--search.herokuapp.com/',
      github: 'https://github.com/AviranLevi/imageSearch',
    },
  ],

  features: {
    openProfileCard: false,
    openProjectsCard: false,
    sendMessage: false,
    openMessageToast: false,
    thanksToast: false,
    isLoading: false,
  },

  errors: {
    messageError: false,
    nameError: false,
    emailError: false,
    textError: false,
    errorToast: false,
  },
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, setState] = useReducer(AppReducer, initialState);

  const toggleProfileCard = (bool) => setState({ type: actionType.TOGGLE_PROFILE, payload: bool });

  const toggleProjectsCard = (bool) => setState({ type: actionType.TOGGLE_PROJECTS, payload: bool });

  const toggleMessageToast = (bool) => setState({ type: actionType.TOGGLE_MESSAGE_TOAST, payload: bool });

  const displayProjectTech = (projectIndex, displayTech = false) =>
    setState({ type: actionType.DISPLAY_TECH, payload: { projectIndex, displayTech } });

  const sendMessage = async ({ name = '', email = '', text = '' }) => {
    const nameIsValid = name.length > 0;
    const emailIsValid = validator.isEmail(email);
    const textIsValid = text.length > 0;

    if (nameIsValid) {
      setState({ type: actionType.FORM_NAME_ERROR, payload: false });
    } else {
      setState({ type: actionType.FORM_NAME_ERROR, payload: true });
    }

    if (emailIsValid) {
      setState({ type: actionType.FORM_EMAIL_ERROR, payload: false });
    } else {
      setState({ type: actionType.FORM_EMAIL_ERROR, payload: true });
    }

    if (textIsValid) {
      setState({ type: actionType.FORM_TEXT_ERROR, payload: false });
    } else {
      setState({ type: actionType.FORM_TEXT_ERROR, payload: true });
    }

    if (nameIsValid && emailIsValid && textIsValid) {
      isLoading(true);
      toggleMessageToast(false);
      const response = await api.sendEmail({ name, email, text });
      if (response.success) {
        isLoading(false);
        toggleThanksToast(true);
      } else {
        toggleErrorToast(true);
      }
    }
  };

  const toggleThanksToast = (bool) => {
    setState({ type: actionType.THANKS_TOAST, payload: bool });
    if (bool) {
      setTimeout(() => setState({ type: actionType.THANKS_TOAST, payload: false }), 3000);
    }
  };

  const toggleErrorToast = (bool) => {
    setState({ type: actionType.ERROR_TOAST, payload: bool });
    if (bool) {
      setTimeout(() => setState({ type: actionType.THANKS_TOAST, payload: false }), 3000);
    }
  };

  const isLoading = (bool) => setState({ type: actionType.IS_LOADING, payload: bool });

  const isMessageError = (bool) => setState({ type: actionType.MESSAGE_ERROR, payload: bool });

  return (
    <GlobalContext.Provider
      value={{
        state,
        toggleProfileCard,
        toggleProjectsCard,
        toggleMessageToast,
        displayProjectTech,
        toggleThanksToast,
        isLoading,
        sendMessage,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
