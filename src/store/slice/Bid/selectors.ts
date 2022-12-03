import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "store/store";

const selectBid = (state: RootState) => state.bid;

export const BidDataSelector = createSelector(selectBid, (bidState) => bidState.message);

export const BidStatusSelector = createSelector(selectBid, (bidState) => bidState.status);

export const BidErrSelector = createSelector(selectBid, (bidState) => bidState.error);