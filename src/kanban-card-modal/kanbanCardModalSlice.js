import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: -1,
  title: "",
  description: "",
  status: 0,
  assignedUser: -1,
  dialogVisible: false,
};

export const kanbanCardDialogSlice = createSlice({
  name: "kanban-card-modal-data",
  initialState,
  reducers: {
    openCreateCardDialog: () => ({ ...initialState, dialogVisible: true }),
    openEditCardDialog: (state, action) => ({
      ...action.payload,
      dialogVisible: true,
    }),
    updateDialogForm: (state, action) => ({ ...state, ...action.payload }),
    saveDialogForm: () => ({ ...initialState }),
  },
});

export const {
  openCreateCardDialog,
  openEditCardDialog,
  updateDialogForm,
  saveDialogForm,
} = kanbanCardDialogSlice.actions;

export const selectCanbanCardDialogState = (state) => state.kanbanCardDialog;

export default kanbanCardDialogSlice.reducer;
