export default (state, action) => {
  switch (action.type) {
    case 'TOGGLE_PROFILE':
      return { ...state, features: { ...state.features, openProfileCard: action.payload } };

    case 'TOGGLE_PROJECTS':
      return { ...state, features: { ...state.features, openProjectsCard: action.payload } };

    default:
      return state;
  }
};
