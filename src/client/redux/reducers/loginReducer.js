const initialState = {
  isFetching: false,
  response: {},
  isLoggedIn: false,
};

export const loginReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "USER_LOGIN_IN_PROGRESS": {
      return { ...state, isFetching: true };
    }
    case "USER_LOGIN_SUCCESS": {
      return {
        ...state,
        isFetching: false,
        response: payload,
        isLoggedIn: true,
      };
    }
    case "USER_LOGIN_FAILED": {
      return { ...state, isFetching: false, response: payload };
    }
    default:
      return state;
  }
};
