import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectCanbanCardDialogState,
  openCreateCardDialog,
  saveDialogForm,
} from "./kanbanCardModalSlice";

export default function KanbanCardModal() {
  const dispatch = useDispatch();
  const { id, title, description, status, assignedUser, dialogVisible } =
    useSelector(selectCanbanCardDialogState);

  return !dialogVisible ? (
    <></>
  ) : (
    <>
      <div>Title: {title}</div>
      <div>
        <button
          onClick={() => {
            dispatch(saveDialogForm());
          }}
        >
          Save
        </button>
      </div>
    </>
  );
}

export function useOpenCreateKanbanCardModal() {
  const dispatch = useDispatch();
  return () => dispatch(openCreateCardDialog());
}
