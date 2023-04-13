const initialState = {
  isFetching: false,
  eventData: [],
};

export const eventReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "FETCH_EVENT_IN_PROGRESS": {
      return { ...state, isFetching: true };
    }
    case "FETCH_EVENT_SUCCESS": {
      return { ...state, isFetching: false, eventData: payload.data  };
    }
    case "FETCH_EVENT_FAILED": {
      return { ...state, isFetching: false };
    }
    default:
      return state;
  }
};
