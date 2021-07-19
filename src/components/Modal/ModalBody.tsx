import classNames from "classnames";
import React from "react";
import styles from '../../sass/modules/ModalBody.module.scss';
import {IModalBodyProps} from "../../props/IModalBodyProps";

export const ModalBody = (props: IModalBodyProps) => {
    const cs = classNames(styles.ModalBody, props.className);
    return (
        <section className={cs} style={props.style}>
            {props.children}
        </section>
    );
}