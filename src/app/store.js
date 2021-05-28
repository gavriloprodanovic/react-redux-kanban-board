import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import kanbanBoardReducer from "kanban-board-state/kanbanBoardSlice";
import kanbanCardDialogReducer from "kanban-card-modal/kanbanCardModalSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    kanbanBoard: kanbanBoardReducer,
    kanbanCardDialog: kanbanCardDialogReducer,
  },
});
