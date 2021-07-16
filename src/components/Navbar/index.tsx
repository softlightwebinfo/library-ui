import React from "react";
import {INavbarProps} from "../../interfaces/INavbarProps";
import classNames from "classnames";
import styles from '../../sass/modules/Navbar.module.scss';
import {ContextNavbar} from "../../context/useNavbar";

export const Navbar = ({className, style, children, ...props}: INavbarProps) => {
    const cs = classNames(styles.Navbar, className, {
        [styles.Default]: props.default ?? true,
    });
    const value = {
        navbar: true
    };
    return (
        <ContextNavbar.Provider value={value}>
            <header className={cs} style={style}>
                {children}
            </header>
        </ContextNavbar.Provider>
    );
};