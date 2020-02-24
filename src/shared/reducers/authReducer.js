const initState = {
  authError: null
};

export default (state = initState, action) => {
  switch (action.type) {
    case "SIGN_UP_ERROR":
      return {
        ...state,
        authError: action.err.message
      };
    case "SIGN_UP_SUCCESS":
      return {
        ...state,
        authError: null
      };
    case "SIGN_IN_ERROR":
      return {
        ...state,
        authError: "The email or password you entered is invalid"
      };
    case "SIGN_IN_SUCCESS":
      return {
        ...state,
        authError: null
      };
    case "SIGN_OUT_SUCCESS":
      return {
        ...state,
        authError: null
      };
    default:
      return state;
  }
};
