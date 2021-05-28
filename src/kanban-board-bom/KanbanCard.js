class KanbanCard {
  _parentColumn = undefined;
  _id;
  title;
  note;
  description;
  assignedUser;

  constructor(parentColumn, id, { title, description, assignedUser }) {
    this._parentColumn = parentColumn;
    this._id = id;
    this.title = title;
    this.description = description;
    this.assignedUser = assignedUser;
  }

  get id() {
    return this._id;
  }
}

export default KanbanCard;
