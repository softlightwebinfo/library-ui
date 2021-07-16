import React from "react";
import classNames from "classnames";
import {INavProps} from "../../props/INavProps";
import styles from '../../sass/modules/Nav.module.scss';
import {ContextNav, IUseNav} from "../../context/useNav";

export const Nav = ({className, vertical = false, block, appearance = "default", style, ...props}: INavProps) => {
    const cs = classNames(styles.Nav, className, {
        [styles[appearance]]: appearance,
        [styles.Vertical]: vertical,
        [styles.Block]: block
    });
    const value: IUseNav = {
        appearance,
        activeKey: props.activeKey,
        reversed: props.reversed,
        onSelect: props.onSelect,
        vertical,
    };
    return (
        <ContextNav.Provider value={value}>
            <nav className={cs} style={style}>
                <ul>
                    {props.children}
                </ul>
            </nav>
        </ContextNav.Provider>
    );
};