import React from "react";
import {Overlay} from "../Overlay/Overlay";
import {IModalProps} from "../../props/IModalProps";
import {ModalDialog} from "./ModalDialog";
import {ContextModal} from "../../context/useContextModal";

export const Modal = (props: IModalProps) => {
    const value = {
        onHide: props.onHide,
    }
    return (
        <ContextModal.Provider value={value}>
            <Overlay show={props.show}>
                <ModalDialog size={props.size} show={props.show}>
                    {props.children}
                </ModalDialog>
            </Overlay>
        </ContextModal.Provider>
    );
}