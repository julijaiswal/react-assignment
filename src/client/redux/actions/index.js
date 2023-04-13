import {
  USER_REGISTER_IN_PROGRESS,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAILED,
  
  USER_LOGIN_IN_PROGRESS,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILED,

  CREATE_EVENT_IN_PROGRESS,
  CREATE_EVENT_SUCCESS,
  CREATE_EVENT_FAILED,

  FETCH_EVENT_IN_PROGRESS,
  FETCH_EVENT_SUCCESS,
  FETCH_EVENT_FAILED,

  DELETE_EVENT_IN_PROGRESS,
  DELETE_EVENT_SUCCESS,
  DELETE_EVENT_FAILED,

  EDIT_EVENT_IN_PROGRESS,
  EDIT_EVENT_SUCCESS,
  EDIT_EVENT_FAILED,
} from "../types";
import {
  loginUrl,
  registerUrl,
  createEventUrl,
  fetchEventUrl,
  editEventUrl,
  deleteEventUrl,
} from "../../client.config";
import axios from "axios";

export const userRegister = (payload) => async (dispatch) => {
  dispatch({ type: USER_REGISTER_IN_PROGRESS });
  try {
    const { data } = await axios.post(registerUrl, payload);
    dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
  } catch ({ response }) {
    const err = response?.data;
    dispatch({ type: USER_REGISTER_FAILED, payload: err });
  }
};

export const userLogin = (payload) => async (dispatch) => {
  dispatch({ type: USER_LOGIN_IN_PROGRESS });
  try {
    const { data } = await axios.post(loginUrl, payload);
    dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
  } catch ({ response }) {
    const err = response?.data;
    dispatch({ type: USER_LOGIN_FAILED, payload: err });
  }
};

export const createEvent = (payload) => async (dispatch) => {
  dispatch({ type: CREATE_EVENT_IN_PROGRESS });
  try {
    const { id, ...rest } = payload;
    const { data } = await axios.post(createEventUrl(id), rest);
    dispatch({ type: CREATE_EVENT_SUCCESS, payload: data });
  } catch ({ response }) {
    const err = response?.data;
    dispatch({ type: CREATE_EVENT_FAILED, payload: err });
  }
};

export const fetchEvent = (payload) => async (dispatch) => {
  dispatch({ type: FETCH_EVENT_IN_PROGRESS });
  try {
    const { data } = await axios.get(fetchEventUrl(payload));
    dispatch({ type: FETCH_EVENT_SUCCESS, payload: data });
  } catch ({ response }) {
    const err = response?.data;
    dispatch({ type: FETCH_EVENT_FAILED, payload: err });
  }
};

export const deleteEvent = (payload) => async (dispatch) => {
  dispatch({ type: DELETE_EVENT_IN_PROGRESS });
  try {
    const { data } = await axios.get(deleteEventUrl(payload));
    dispatch({ type: DELETE_EVENT_SUCCESS, payload: data });
  } catch ({ response }) {
    const err = response?.data;
    dispatch({ type: DELETE_EVENT_FAILED, payload: err });
  }
};

export const editEvent = (payload) => async (dispatch) => {
  dispatch({ type: EDIT_EVENT_IN_PROGRESS });
  try {
    const { id, ...rest } = payload;
    const { data } = await axios.post(editEventUrl(id), rest);
    dispatch({ type: EDIT_EVENT_SUCCESS, payload: data });
  } catch ({ response }) {
    const err = response?.data;
    dispatch({ type: EDIT_EVENT_FAILED, payload: err });
  }
};
