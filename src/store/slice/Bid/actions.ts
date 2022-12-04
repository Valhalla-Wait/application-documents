import { ReducerType } from "./types";

export const removeServerMessagesAction = (state: ReducerType) => {
  return { ...state, message: '', error: ''};
};