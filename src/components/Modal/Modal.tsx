import React from "react";
import { ContextModal } from "../../context/useContextModal";
import { IModalProps } from "../../props/IModalProps";
import { Overlay } from "../Overlay/Overlay";
import { ModalDialog } from "./ModalDialog";

export const Modal = (props: IModalProps) => {
  const value = {
    onHide: props.onHide,
  };
  return (
    <ContextModal.Provider value={ value }>
      <Overlay show={ props.show }>
        <ModalDialog
          className={ props.className }
          style={ props.style }
          paddingBody={ props.paddingBody }
          size={ props.size } show={ props.show }
        >
          { props.children }
        </ModalDialog>
      </Overlay>
    </ContextModal.Provider>
  );
};
