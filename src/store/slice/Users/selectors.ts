import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "store/store";

const selectUsers = (state: RootState) => state.users;

export const UsersDataSelector = createSelector(selectUsers, (usersState) => usersState.data);

export const UsersStatusSelector = createSelector(selectUsers, (usersState) => usersState.status);

export const UsersErrSelector = createSelector(selectUsers, (usersState) => usersState.error);