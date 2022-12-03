import { ReducerType } from "./types";

export const removeMessageAction = (state: ReducerType) => {
  return { ...state, message: null };
};