import KanbanBoard from "./KanbanBoard";
import KanbanColumn from "./KanbanColumn";

const COLUMN_NAMES = ["TODO", "Doing", "Done"];

describe("KanbanBoard - KanbanColumn interaction tests", () => {
  it("Is created column KanbanColumn", () => {
    const kanbanBoard = new KanbanBoard();
    const kanbanColumn = kanbanBoard.createColumn("col name");
    expect(kanbanColumn instanceof KanbanColumn).toBeTruthy();
  });

  describe("Creating and getting columns", () => {
    const kanbanBoard = new KanbanBoard();

    COLUMN_NAMES.forEach((column) => kanbanBoard.createColumn(column));

    it("Test getAllColumns not allow internal column array mutations", () => {
      const columns = kanbanBoard.getAllColumns();
      columns.push(new KanbanColumn(kanbanBoard, "NOT_WANTED"));

      const columnsAfterMutation = kanbanBoard.getAllColumns();
      expect(columnsAfterMutation.length).not.toBe(columns.length);
    });
  });
});

describe("task ID behaviours tests", () => {
  it("First task id is 1(one)", () => {
    const kanbanBoard = new KanbanBoard();
    const taskId = kanbanBoard._nextTaskId();
    expect(taskId).toBe(1);
  });

  const EXPECTED_SEQUENCE = [1, 2, 3, 4];

  const kanbanBoards = [new KanbanBoard(), new KanbanBoard()];

  describe.each(kanbanBoards)(
    "Task id independence test for kanban board %#",
    (board) => {
      it.each(EXPECTED_SEQUENCE)("Next task id sequence test", (expectedId) => {
        const taskId = board._nextTaskId();
        expect(taskId).toBe(expectedId);
      });
    }
  );
});
