import React from "react";
import classNames from "classnames";
import styles from '../../sass/modules/Footer.module.scss';
import {IFooterProps} from "../../props/IFooterProps";

export const Footer = ({className, style, ...props}: IFooterProps) => {
    const cs = classNames(styles.Footer, className, {
        [styles.Preview]: props.preview,
        [styles.Page]: props.page,
    });
    return (
        <div className={cs} style={style} onClick={props.onClick}>
            {props.children}
        </div>
    )
};
