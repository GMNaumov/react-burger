import PropTypes from "prop-types";

import modalOverlayStyles from "./modal-overlay.module.css";

const ModalOverlay = ({onClose}) => {
    return (
        <div onClick={onClose} className={modalOverlayStyles.overlay}/>
    );
};

ModalOverlay.propTypes = {
    onClose: PropTypes.func.isRequired,
};
export default ModalOverlay;