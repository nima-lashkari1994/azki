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
            <div className={"modal-backdrop"} onClick={handleClose}/>

            <div className="modal-content">
                <button onClick={handleClose} className="close-button">
                    x
                </button>
                {children}
            </div>
        </Styled.Wrapper>, document.getElementById("modal")!)

    );
}

export default Modal;