import { createReducer } from "../../app/common/util/reducerUtil";

import {
  INCREMENT_COUNTER,
  DECREMENT_COUNTER,
  COUNTER_ACTION_STARTED,
  COUNTER_ACTION_FINISHED
} from "./testConstants";
const initialState = {
  data: 44,
  loading: false
};

export const incrementCounter = (state, payload) => {
  return { ...state, data: state.data + 1 };
};
export const decrementCounter = (state, payload) => {
  return { ...state, data: state.data - 1 };
};

export const counterActionsStarted = (state, payload) => {
  return { ...state, loading: true };
};
export const counterActionsFinish = (state, payload) => {
  return { ...state, loading: false };
};

export default createReducer(initialState, {
  [INCREMENT_COUNTER]: incrementCounter,
  [DECREMENT_COUNTER]: decrementCounter,
  [COUNTER_ACTION_STARTED]: counterActionsStarted,
  [COUNTER_ACTION_FINISHED]: counterActionsFinish
});
