import React from "react"
import classNames from "classnames";
import styles from '../../sass/modules/ModalDialog.module.scss';
import {IModalDialogProps} from "../../props/IModalDialogProps";

export const ModalDialog = ({size = "sm", ...props}: IModalDialogProps) => {
    const cs = classNames(styles.ModalDialog, props.className, {
        [styles.Show]: props.show,
        [styles[size]]: !!size,
    });
    return (
        <div className={cs} style={props.style}>
            <div className={styles.Content}>
                {props.children}
            </div>
        </div>
    )
}