import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deletePhoto } from "../../store/photo";
import "./DeleteConfirm.css";

const DeleteConfirm = () => {
  const dispatch = useDispatch();
  const photo = useSelector((state) => state.photoReducer);
  const user = useSelector((state) => state.session.user);
  const history = useHistory();

  const handleSubmit = async (e) => {
    console.log("here I am in the handleSubmit");
    e.preventDefault();
    await dispatch(deletePhoto(photo.id));
    console.log("Deleted event!");
    history.push(`/users/${user.id}/photos`);
  };

  return (
    <div className="modal--delete-confirm">
      Are you sure you want to delete this photo?
      <button className="modal--button-div" onClick={handleSubmit}>
        Delete
      </button>
    </div>
  );
};

export default DeleteConfirm;
