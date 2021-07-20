import React from "react";
import classNames from "classnames";
import styles from '../../sass/modules/InputGroup.module.scss';
import {IInputGroupProps} from "../../props/IInputGroupProps";

export const InputGroup = ({...props}: IInputGroupProps) => {
    const cs = classNames(styles.InputGroup, props.className, {});

    return (
        <div
            className={cs}
            style={props.style}
        >
            {props.children}
        </div>
    );
};