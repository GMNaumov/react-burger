import React from "react";
import {createPortal} from "react-dom";
import PropTypes from "prop-types";

import {CloseIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import ModalOverlay from "../modal-overlay/modal-overlay";

import modalStyles from "./modal.module.css";

const Modal = ({onClose, title, children}) => {
    React.useEffect(() => {
        const handlePressEscape = event => {
            if (event.key === "Escape") {
                onClose();
            }
        };

        document.addEventListener("keydown", handlePressEscape);

        return () => {
            document.removeEventListener("keydown", handlePressEscape);
        };
    }, [onClose]);

    return createPortal(
        <div>
            <ModalOverlay onClose={onClose}/>
            <div className={modalStyles.window}>
                <div className={modalStyles.header}>
                    <p className={"text text_type_main-large"}>{title}</p>
                    <CloseIcon onClick={onClose} className={modalStyles.closeIcon} type={"primary"}/>
                </div>
                {children}
            </div>
        </div>, document.getElementById("app-modal")
    );
};

Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
    title: PropTypes.string,
    children: PropTypes.object.isRequired
};

export default Modal;