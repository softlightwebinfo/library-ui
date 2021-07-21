import React from "react"
import {IDrawerHeaderProps} from "../../props/IDrawerHeaderProps";
import classNames from "classnames";
import styles from '../../sass/modules/DrawerHeader.module.scss';

export const DrawerHeader = (props: IDrawerHeaderProps) => {
    const cs = classNames(styles.DrawerHeader, props.className, {});
    return (
        <header className={cs} style={props.style}>

        </header>
    )
}