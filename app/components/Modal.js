import React from 'react';
import styles from './Modal.module.css';

const Modal = ({ show, onClose, children }) => {
    if (!show) {
        return null;
    }

    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modal}>
                <button className={styles.closeButton} onClick={onClose}>
                    &times;
                </button>
                <div className={styles.content}>{children}</div>
            </div>
        </div>
    );
};

export default Modal;
