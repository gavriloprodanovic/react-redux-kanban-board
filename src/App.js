import React from "react";
import "./App.css";
import KanbanBoard from "kanban-board-view/KanbanBoard";
import KanbanCardModal, {
  useOpenCreateKanbanCardModal,
} from "kanban-card-modal/KanbanCardModal";

function App() {
  const openCreateKanbanCardModal = useOpenCreateKanbanCardModal();

  return (
    <div>
      <div>
        <button
          onClick={() => {
            openCreateKanbanCardModal();
          }}
        >
          Create Issue
        </button>
        <KanbanCardModal />
      </div>
      <div>
        <KanbanBoard />
      </div>
    </div>
  );
}

export default App;
