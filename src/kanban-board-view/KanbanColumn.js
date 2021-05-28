import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import {
  selectCardsInColumn,
  selectColumnNameByIndex,
} from "kanban-board-state/kanbanBoardSlice";
import KanbanCard from "./KanbanCard";

KanbanColumn.propTypes = { columnIndex: PropTypes.number };

export default function KanbanColumn({ columnIndex }) {
  const cards = useSelector(selectCardsInColumn(columnIndex, ["id", "title"]));
  const columnTitle = useSelector(selectColumnNameByIndex(columnIndex));

  return (
    <>
      <h2>{columnTitle}</h2>
      <ul>
        {cards.map((card) => (
          <KanbanCard
            key={card.id}
            id={card.id}
            title={card.title}
            kanbanColumn={columnIndex}
          />
        ))}
      </ul>
    </>
  );
}
