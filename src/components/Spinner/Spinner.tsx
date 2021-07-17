import classNames from "classnames";
import React from "react";
import {ISpinnerProps} from "../../props/ISpinnerProps";
import styles from '../../sass/modules/Spinner.module.scss';

export const Spinner = (props: ISpinnerProps) => {
    const classes = classNames(styles.Spinner, props.className);
    return (
        <span style={props.style} className={classes}/>
    );
}