import React from 'react';
import * as Styled from './styles';
import {createPortal} from "react-dom";

type ModalProps = {
    children: React.ReactNode,
    isOpen: boolean,
    handleClose: () => void
}
const Modal = ({children, isOpen, handleClose}: ModalProps) => {

    if (!isOpen)
        return null;

    return (
        createPortal(<Styled.Wrapper>
            <div className={"modal__backdrop"} onClick={handleClose}/>
            <div className="modal__content">
                <button onClick={handleClose} className="modal__close-button">
                    x
                </button>
                {children}
            </div>
        </Styled.Wrapper>, document.getElementById("modal")!)

    );
}

export default Modal;