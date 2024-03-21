import PropTypes from "prop-types";

import modalOverlayStyles from "./modal-overlay.module.css";

const ModalOverlay = ({setIsModalWindowOpen}) => {
    return (
        <div onClick={setIsModalWindowOpen} className={modalOverlayStyles.overlay}/>
    )
}

ModalOverlay.propTypes = {
    setIsModalWindowOpen: PropTypes.func.isRequired,
};
export default ModalOverlay;