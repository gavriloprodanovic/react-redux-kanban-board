import KanbanBoard from "./KanbanBoard";
import KanbanColumn from "./KanbanColumn";

const DEFAULT_COLUMN_NAME = "def column";
const COLUMN_NAMES = ["TODO", "Doing", "Done"];

describe("KanbanColumn columnName tests", () => {
  test("columnName undefined on default constructor", () => {
    const kanbanColumn = new KanbanColumn();
    expect(kanbanColumn.columnName).toBeUndefined();
  });

  describe("columnName set with constructor", () => {
    it.each(COLUMN_NAMES)(`creating KanbanColumn with name`, (columnName) => {
      const kanbanColumn = new KanbanColumn({}, columnName);
      expect(kanbanColumn.columnName).toBe(columnName);
    });
  });

  describe("columnName set/get", () => {
    const kanbanColumn = new KanbanColumn();

    it.each(COLUMN_NAMES)("set/get kanbanColumn name", (columnName) => {
      kanbanColumn.columnName = columnName;
      expect(kanbanColumn.columnName).toBe(columnName);
    });
  });
});

describe("Column Belongings to the Board", () => {
  const parentKanbanBoard = new KanbanBoard();
  const otherKanbanBoard = new KanbanBoard();

  const column = parentKanbanBoard.createColumn(DEFAULT_COLUMN_NAME);

  it.each([
    [parentKanbanBoard, true],
    [otherKanbanBoard, false],
  ])("Belongs to parent board", (board, doesBelongs) => {
    expect(column.belongsToBoard(board)).toBe(doesBelongs);
  });
});

describe("KanbanColumn - KanbanCard interactions", () => {
  describe("Creating and moving cards on columns", () => {
    const kanbanBoard = new KanbanBoard();
    const [todoColumn, doingColumn, doneColumn] = COLUMN_NAMES.map((column) =>
      kanbanBoard.createColumn(column)
    );

    const cards = [];
    const createCard = (column, cardName) => {
      const card = column.createCard(cardName);
      cards.push(card);
      const expectedId = cards.length;

      it("Is expected id correct after creating card", () => {
        expect(card.id).toBe(expectedId);
      });

      return card;
    };

    createCard(todoColumn, "Task 1");
    const cardToMove = createCard(todoColumn, "Task 2");
    createCard(doingColumn, "Task 3");
    createCard(doingColumn, "Task 4");
    createCard(doneColumn, "Task 5");
    createCard(todoColumn, "Task 6");

    it("Moving card 'Task 2' from todo to doing column", () => {
      expect(todoColumn.cards.indexOf(cardToMove)).not.toBe(-1);
      expect(doingColumn.cards.indexOf(cardToMove)).toBe(-1);
      doingColumn.moveCard(cardToMove);
      expect(todoColumn.cards.indexOf(cardToMove)).toBe(-1);
      expect(doingColumn.cards.indexOf(cardToMove)).not.toBe(-1);

      expect(cardToMove._parentColumn === doingColumn).toBe(true);
    });
  });
});
