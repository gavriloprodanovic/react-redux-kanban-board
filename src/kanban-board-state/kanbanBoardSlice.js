import { immerable } from "immer";
import { createSlice } from "@reduxjs/toolkit";
import { KanbanBoard } from "kanban-board-bom";
import createInitialKanbanBoard from "./createInitialKanbanBoard";

KanbanBoard[immerable] = true;

const initialState = createInitialKanbanBoard();

export const kanbanBoardSlice = createSlice({
  name: "kanban-board",
  initialState,
  reducers: {},
});

export const selectColumnsAsIndexArray = (state) => {
  return state.kanbanBoard.getAllColumns().map((column, index) => index);
};

export const selectColumnByIndex = (columnIndex) => (state) => {
  return state.kanbanBoard.getAllColumns()[columnIndex];
};

export const selectColumnNameByIndex = (columnIndex) => (state) => {
  const selectedColumn = state.kanbanBoard.getAllColumns()[columnIndex];
  return selectedColumn.columnName;
};

export const selectCardsInColumn =
  (
    columnIndex,
    cardProperties = ["id", "title", "description", "assignedUser"]
  ) =>
  (state) => {
    const selectedColumn = state.kanbanBoard.getAllColumns()[columnIndex];
    const mappedCards = selectedColumn.cards.map((card) =>
      cardProperties.reduce((mappedCard, property) => {
        mappedCard[property] = card[property];
        return mappedCard;
      }, {})
    );

    return mappedCards;
  };

export default kanbanBoardSlice.reducer;
