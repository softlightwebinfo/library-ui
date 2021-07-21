import React from "react"
import classNames from "classnames";
import styles from '../../sass/modules/DrawerFooter.module.scss';
import {IDrawerFooterProps} from "../../props/IDrawerFooterProps";

export const DrawerFooter = (props: IDrawerFooterProps) => {
    const cs = classNames(styles.DrawerFooter, props.className, {});
    return (
        <footer className={cs} style={props.style}>
            {props.children}
        </footer>
    )
}