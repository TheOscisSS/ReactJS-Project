export const signUp = credentials => {
  return (dispatch, getState, {
    getFirebase
  }) => {
    const firebase = getFirebase();

    return firebase
      .auth()
      .createUserWithEmailAndPassword(credentials.email, credentials.password)
      .then(user => {
        console.log(user);
        dispatch({
          type: "SIGN_UP_SUCCESS"
        });
      })
      .catch(err => {
        dispatch({
          type: "SIGN_UP_ERROR",
          err
        });
      });
  };
};

export const signIn = credentials => {
  return (dispatch, getState, {
    getFirebase
  }) => {
    const firebase = getFirebase();

    return firebase
      .auth()
      .signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(() => {
        dispatch({
          type: "SIGN_IN_SUCCESS"
        });
      })
      .catch(err => {
        dispatch({
          type: "SIGN_IN_ERROR",
          err
        });
      });
  };
};

export const signOut = () => {
  return (dispatch, getState, {
    getFirebase
  }) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({
          type: "SIGN_OUT_SUCCESS"
        });
      });
  };
};