import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Modal } from "../../context/Modal";
import { useDispatch, useSelector } from "react-redux";
import { editPhoto, renderOnePhoto } from "../../store/photo";

function EditPhotoModal() {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const photo = useSelector((state) => state.photoReducer);
  const { id } = useParams();

  const [title, setTitle] = useState("");
  const [caption, setCaption] = useState("");
  const [dateTaken, setDateTaken] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("caption", caption);
    formData.append("date_taken", dateTaken);

    // aws uploads can be a bit slow—displaying
    // some sort of loading message is a good idea

    await dispatch(editPhoto(formData, photo.id));
    setShowModal(false);
    // history.push(`/`);
    // history.goBack();
  };

  useEffect(() => {
    dispatch(renderOnePhoto(photo.id)); //this
  }, [dispatch]);

  return (
    <>
      <button onClick={() => setShowModal(true)}>Edit</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <div className="card">
            <h2>Edit Photo Details</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-input-container">
                <input
                  type="text"
                  className="form-input"
                  name="title"
                  placeholder={photo?.title}
                  onChange={(e) => setTitle(e.target.value)}
                  value={title}
                />
                <textarea
                  name="caption"
                  className="form-input"
                  placeholder={photo?.caption}
                  onChange={(e) => setCaption(e.target.value)}
                  value={caption}
                />
                <input
                  type="date"
                  name="date_taken"
                  className="form-input"
                  placeholder={photo?.date_taken}
                  onChange={(e) => setDateTaken(e.target.value)}
                  value={dateTaken}
                />
              </div>
              <button type="submit" id="loginBtn">
                Submit
              </button>
            </form>
          </div>
        </Modal>
      )}
    </>
  );
}

export default EditPhotoModal;
