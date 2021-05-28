import KanbanCard from "./KanbanCard";

class KanbanColumn {
  _parentBoard;
  columnName = undefined;
  cards = [];

  constructor(parentBoard, columnName) {
    this._parentBoard = parentBoard;
    this.columnName = columnName;
  }

  belongsToBoard = (kanbanBoard) => {
    return this._parentBoard === kanbanBoard;
  };

  createCard = ({ title, description, assignedUser }) => {
    const cardId = this._parentBoard._nextTaskId();
    const card = new KanbanCard(this, cardId, {
      title,
      description,
      assignedUser,
    });
    this.cards.push(card);
    return card;
  };

  moveCard = (kanbanCard) => {
    const oldColumnCards = kanbanCard._parentColumn.cards;
    const indexOfCard = oldColumnCards.indexOf(kanbanCard);
    if (indexOfCard > -1) {
      oldColumnCards.splice(indexOfCard, 1);
    }

    this.cards.push(kanbanCard);
    kanbanCard._parentColumn = this;
  };
}

export default KanbanColumn;
