import * as actionType from './types'

export default (state, action) => {
  switch (action.type) {
    case actionType.TOGGLE_PROFILE:
      return { ...state, features: { ...state.features, openProfileCard: action.payload } }

    case actionType.TOGGLE_PROJECTS:
      return { ...state, features: { ...state.features, openProjectsCard: action.payload } }

    case actionType.TOGGLE_MESSAGE_TOAST: {
      return { ...state, features: { ...state.features, openMessagePopup: action.payload } }
    }

    case actionType.DISPLAY_TECH:
      return {
        ...state,
        projects: state.projects.map((project, index) =>
          index === action.payload.projectIndex ? { ...project, displayTech: action.payload.displayTech } : project
        ),
      }

    case actionType.NO_TECH_TO_DISPLAY:
      return {
        ...state,
        features: { ...state.features, noTechToDisplay: action.payload },
      }

    case actionType.THANKS_TOAST:
      return {
        ...state,
        features: { ...state.features, thanksToast: action.payload },
      }

    case actionType.IS_LOADING:
      return {
        ...state,
        features: { ...state.features, isLoading: action.payload },
      }

    case actionType.MESSAGE_ERROR:
      return {
        ...state,
        errors: { ...state.errors, messageError: action.payload },
      }

    case actionType.FORM_NAME_ERROR:
      return {
        ...state,
        errors: { ...state.errors, nameError: action.payload },
      }
    case actionType.FORM_EMAIL_ERROR:
      return {
        ...state,
        errors: { ...state.errors, emailError: action.payload },
      }

    case actionType.FORM_TEXT_ERROR:
      return {
        ...state,
        errors: { ...state.errors, textError: action.payload },
      }

    default:
      return state
  }
}
