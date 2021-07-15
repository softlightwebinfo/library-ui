import React from "react";
import classNames from "classnames";
import {IDividerProps} from "../props/IDividerProps";
import styles from '../sass/modules/Divider.module.scss';
export const Divider = ({className, style, ...props}: IDividerProps) => {
    const cs = classNames(styles.Divider, className);
    return (
        <div className={cs} style={style}/>
    );
};