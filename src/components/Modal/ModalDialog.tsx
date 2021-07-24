import classNames from "classnames";
import React from "react";
import { IModalDialogProps } from "../../props/IModalDialogProps";
import styles from '../../sass/modules/ModalDialog.module.scss';

export const ModalDialog = ({ paddingBody = true, size = "sm", ...props }: IModalDialogProps) => {
  const cs = classNames(styles.ModalDialog, props.className, {
    [styles.Show]: props.show,
    [styles[size]]: !!size,
    [styles.NoPadding]: !paddingBody,
  });
  return (
    <div className={ cs } style={ props.style }>
      <div className={ styles.Content }>
        { props.children }
      </div>
    </div>
  );
};
