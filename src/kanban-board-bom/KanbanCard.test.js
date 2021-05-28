import KanbanCard from "./KanbanCard";

const CARD_ID = 30;

describe("KanbanCard id behaviour tests", () => {
  it("ID is readonly", () => {
    const kanbanCard = new KanbanCard({}, CARD_ID, {});
    const setId = () => (kanbanCard.id = CARD_ID + 1);
    expect(setId).toThrow(TypeError);
  });
});
