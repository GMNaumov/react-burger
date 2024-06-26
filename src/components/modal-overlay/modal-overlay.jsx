import styles from "./modal-overlay.module.css";
import PropTypes from "prop-types";

const ModalOverlay = ({ setIsOpenModal }) => {
    return (
        <div onClick={setIsOpenModal} className={styles.overlay}></div>
    );
}

ModalOverlay.propTypes = {
    setIsModalOpen: PropTypes.func
};

export default ModalOverlay;