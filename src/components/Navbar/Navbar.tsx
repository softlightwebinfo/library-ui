import React from "react";
import {INavbarProps} from "../../interfaces/INavbarProps";
import classNames from "classnames";
import styles from '../../sass/modules/Navbar.module.scss';
import {ContextNavbar} from "../../context/useNavbar";
import {useSidebarPage} from "../../context/useContextSidebarPage";

export const Navbar = ({className, style, children, ...props}: INavbarProps) => {
    const ctx = useSidebarPage();
    const cs = classNames(styles.Navbar, className, {
        [styles.Default]: props.default ?? true,
        [styles.SidebarPage]: ctx.sidebarPage,
        [styles[props.appearance ?? '']]: props.appearance,
    });
    const value = {
        navbar: true,
        appearance: props.appearance,
    };
    return (
        <ContextNavbar.Provider value={value}>
            <header className={cs} style={style}>
                {children}
            </header>
        </ContextNavbar.Provider>
    );
};