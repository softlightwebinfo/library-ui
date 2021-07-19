import React from "react";
import classNames from "classnames";
import styles from '../../sass/modules/Container.module.scss';
import {IContainerProps} from "../../props/IContainerProps";

export const Container = ({className, style, ...props}: IContainerProps) => {
    const cs = classNames(styles.Container, className, {
        [styles.HasSidebar]: props.hasSidebar,
    });
    return (
        <div className={cs} style={style}>
            {props.children}
        </div>
    )
};