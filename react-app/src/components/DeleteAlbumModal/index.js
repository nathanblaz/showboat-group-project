import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import DeleteAlbum from './DeleteAlbumModal';

function DeleteAlbumModal() {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button onClick={() => setShowModal(true)}>Delete Album</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <DeleteAlbum />
                </Modal>
            )}
        </>
    )
}

export default DeleteAlbumModal;
