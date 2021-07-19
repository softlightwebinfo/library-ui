import React from "react";
import classNames from "classnames";
import styles from '../../sass/modules/Header.module.scss';
import {IHeaderProps} from "../../props/IHeaderProps";

export const Header = ({className, style, ...props}: IHeaderProps) => {
    const cs = classNames(styles.Header, className, {
        [styles.Preview]: props.preview,
    });
    return (
        <div className={cs} style={style}>
            {props.children}
        </div>
    )
};