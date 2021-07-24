import {IInputGroupButtonProps} from "../../props/IInputGroupButtonProps";
import classNames from "classnames";
import React from "react";
import styles from '../../sass/modules/InputGroupButton.module.scss';
import {Button} from "../Button";

export const InputGroupButton = (props: IInputGroupButtonProps) => {
    const cs = classNames(styles.InputGroupButton, props.className);
    return (
        <Button onClick={props.onClick} className={cs} style={props.style}>
            {props.children}
        </Button>
    )
};
