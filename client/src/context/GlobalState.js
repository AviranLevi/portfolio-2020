import React, { createContext, useReducer } from 'react';
import validator from 'validator';
import AppReducer from './AppReducer';
import projects from '../constant/projects';
import profile from '../constant/profile';
import * as actionType from './types';
import * as api from '../api';

const initialState = {
  profile,
  projects,
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
