import React from "react"
import {IDrawerHeaderProps} from "../../props/IDrawerHeaderProps";
import classNames from "classnames";
import styles from '../../sass/modules/DrawerHeader.module.scss';
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import {Icon} from "../Icon";
import {useDrawer} from "../../context/useDrawer";

export const DrawerHeader = (props: IDrawerHeaderProps) => {
    const ctx = useDrawer();
    const cs = classNames(styles.DrawerHeader, props.className, {});
    return (
        <header className={cs} style={props.style}>
            {props.children}
            <button className={styles.Close} onClick={ctx.onHide}>
                <Icon icon={faTimes}/>
            </button>
        </header>
    )
}