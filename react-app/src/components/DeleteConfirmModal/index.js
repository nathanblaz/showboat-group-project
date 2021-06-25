import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import DeleteConfirm from './DeleteConfirm';

function DeleteConfirmModal() {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button onClick={() => setShowModal(true)}>Delete</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <DeleteConfirm />
                </Modal>
            )}
        </>
    )
}

export default DeleteConfirmModal;
