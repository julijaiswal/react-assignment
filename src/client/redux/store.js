import { configureStore } from "@reduxjs/toolkit";
import { registerReducer, loginReducer, eventReducer } from "./reducers";

export default configureStore({
  reducer: {
    login: loginReducer,
    register: registerReducer,
    event: eventReducer
  },
});
