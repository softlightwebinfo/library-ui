import React from "react";
import classNames from "classnames";
import styles from '../../sass/modules/Content.module.scss';
import {IContentProps} from "../../props/IContentProps";

export const Content = ({className, style, ...props}: IContentProps) => {
    const cs = classNames(styles.Content, className, {
        [styles.Preview]: props.preview,
    });
    return (
        <div className={cs} style={style}>
            {props.children}
        </div>
    )
};