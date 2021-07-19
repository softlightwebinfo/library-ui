import classNames from "classnames";
import React from "react";
import {IModalTitleProps} from "../../props/IModalTitleProps";
import styles from '../../sass/modules/ModalTitle.module.scss';

export const ModalTitle = (props: IModalTitleProps) => {
    const cs = classNames(styles.ModalTitle, props.className);
    return (
        <h4 className={cs} style={props.style}>{props.children}</h4>
    );
}