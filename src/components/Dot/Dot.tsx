import React from "react";
import classNames from "classnames";
import styles from '../../sass/modules/Dot.module.scss';
import {IDotProps} from "../../props/IDotProps";

export const Dot = ({className, style, ...props}: IDotProps) => {
    const cs = classNames(styles.Dot, className, {});
    return (
        <div className={cs} style={style}/>
    )
};