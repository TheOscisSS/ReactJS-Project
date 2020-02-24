const initState = {
  isAuth: false
};

export default (state = initState, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        isAuth: true
      };
    default:
      return state;
  }
};
