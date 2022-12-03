import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "store/store";

const selectDocuments = (state: RootState) => state.documents;

export const DocumentsDataSelector = createSelector(selectDocuments, (documentsState) => documentsState.data);

export const DocumentsStatusSelector = createSelector(selectDocuments, (documentsState) => documentsState.status);

export const DocumentsErrSelector = createSelector(selectDocuments, (documentsState) => documentsState.error);