export default (state, action) => {
  switch (action.type) {
    case 'TOGGLE_PROFILE':
      return { ...state, features: { ...state.features, openProfileCard: action.payload } };

    case 'TOGGLE_PROJECTS':
      return { ...state, features: { ...state.features, openProjectsCard: action.payload } };

    case 'TOGGLE_MESSAGE_TOAST': {
      return { ...state, features: { ...state.features, openMessageToast: action.payload } };
    }

    default:
      return state;
  }
};
