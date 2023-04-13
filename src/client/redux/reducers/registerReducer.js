const initialState = {
  isFetching: false,
  response: {},
};

export const registerReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "USER_REGISTER_IN_PROGRESS": {
      return { ...state, isFetching: true };
    }
    case "USER_REGISTER_SUCCESS": {
      return { ...state, isFetching: false, response: payload };
    }
    case "USER_REGISTER_FAILED": {
      return { ...state, isFetching: false, response: payload};
    }
    default:
      return state;
  }
};
