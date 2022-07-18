import React from "react";
import { Alert } from "@mui/material";
import { useDispatch } from "react-redux";
import { uiActions } from "../store/UI-slice";

const Notification = ({ type, message, open }) => {
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(
      uiActions.showNotification({
        open: false
      })
    );
  };

  return (
    <div>
      {open && (
        <Alert onClose={handleClose} severity={type}>
          {" "}
          {message}{" "}
        </Alert>
      )}
    </div>
  );
};

export default Notification;
