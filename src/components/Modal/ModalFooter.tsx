import React from "react";
import classNames from "classnames";
import {IModalFooterProps} from "../../props/IModalFooterProps";
import styles from '../../sass/modules/ModalFooter.module.scss';

export const ModalFooter = (props: IModalFooterProps) => {
    const cs = classNames(styles.ModalFooter, props.className);
    return (
        <footer className={cs} style={props.style}>
            {props.children}
        </footer>
    );
}