import React from "react";
import {INavbarProps} from "../../interfaces/INavbarProps";
import classNames from "classnames";
import styles from '../../sass/modules/Navbar.module.scss';

export const Navbar = (props: INavbarProps) => {
    const cs = classNames(styles.Navbar, props.className);
    return (
        <header className={cs} style={props.style}>
            {props.children}
        </header>
    );
};