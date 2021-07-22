import React from "react";
import {IModalHeaderProps} from "../../props/IModalHeaderProps";
import classNames from "classnames";
import styles from '../../sass/modules/ModalHeader.module.scss';
import {Button} from "../Button";
import {Icon} from "../Icon";
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import {useModal} from "../../context";

export const ModalHeader = (props: IModalHeaderProps) => {
    const cx = useModal();
    const cs = classNames(styles.ModalHeader, props.className);
    return (
        <header className={cs} style={props.style}>
            {props.children}
            <Button type={"button"} onClick={cx.onHide} className={styles.Close} icon={<Icon icon={faTimes}/>}/>
        </header>
    );
}