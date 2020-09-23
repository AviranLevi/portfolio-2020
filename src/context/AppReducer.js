import * as actionType from './types';

export default (state, action) => {
  switch (action.type) {
    case actionType.TOGGLE_PROFILE:
      return { ...state, features: { ...state.features, openProfileCard: action.payload } };

    case actionType.TOGGLE_PROJECTS:
      return { ...state, features: { ...state.features, openProjectsCard: action.payload } };

    case actionType.TOGGLE_MESSAGE_TOAST: {
      return { ...state, features: { ...state.features, openMessageToast: action.payload } };
    }

    case actionType.DISPLAY_TECH:
      return {
        ...state,
        projects: state.projects.map((project, index) =>
          index === action.payload.projectIndex ? { ...project, displayTech: action.payload.displayTech } : project
        ),
      };

    default:
      return state;
  }
};
