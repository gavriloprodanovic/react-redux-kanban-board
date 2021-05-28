import { KanbanBoard } from "kanban-board-bom";

export default function createInitialKanbanBoard() {
  const INITIAL_COLUMNS = ["TO-DO", "IN PROGRESS", "DONE"];

  const kanbanBoard = new KanbanBoard();

  const columns = INITIAL_COLUMNS.map((column) =>
    kanbanBoard.createColumn(column)
  );

  const INITIAL_TASK_DATA = {
    title: "Init Task",
    description: "Initial task when app start.",
    assignedUser: -1,
  };

  columns[0].createCard(INITIAL_TASK_DATA);

  return kanbanBoard;
}
