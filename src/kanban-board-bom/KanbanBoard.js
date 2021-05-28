import KanbanColumn from "./KanbanColumn";

class KanbanBoard {
  _columns = [];
  _taskId = 0;

  createColumn = (columnName) => {
    const column = new KanbanColumn(this, columnName);
    this._columns.push(column);
    return column;
  };

  getAllColumns = () => {
    return [...this._columns];
  };

  getColumn = (index) => {
    return this._columns[index];
  };

  columnCount = () => {
    return this._columns.length;
  };

  _nextTaskId = () => ++this._taskId;
}

export default KanbanBoard;
