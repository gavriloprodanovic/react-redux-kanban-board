import React from "react";
import { useSelector } from "react-redux";
import { selectColumnsAsIndexArray } from "kanban-board-state/kanbanBoardSlice";
import KanbanColumn from "./KanbanColumn";

export default function KanbanBoard() {
  const columnIndexes = useSelector(selectColumnsAsIndexArray);

  return (
    <>
      {columnIndexes.map((columnIndex) => (
        <KanbanColumn key={columnIndex} columnIndex={columnIndex} />
      ))}
    </>
  );
}
