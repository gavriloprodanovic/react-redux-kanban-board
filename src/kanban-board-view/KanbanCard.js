import React from "react";
import PropTypes from "prop-types";

KanbanCard.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  kanbanColumn: PropTypes.number,
};

export default function KanbanCard({ id, title }) {
  return (
    <>
      <li>
        TASK {id}: {title}
      </li>
    </>
  );
}
