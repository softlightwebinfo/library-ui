import React from "react";
import classNames from "classnames";
import {INavProps} from "../../props/INavProps";
import styles from '../../sass/modules/Nav.module.scss';
import {ContextNav, IUseNav} from "../../context/useNav";
import {useSidenav} from "../../context/useSidenav";

export const Nav = ({className, vertical, block, appearance, style, ...props}: INavProps) => {
    const ctx = useSidenav();
    vertical = vertical ?? ctx.sidenav;
    block = block ?? ctx.sidenav;
    const cs = classNames(styles.Nav, className, {
        [styles[appearance ?? '']]: appearance,
        [styles.Vertical]: vertical,
        [styles.Block]: block,
        [styles.PullRight]: props.pullRight,
        [styles.PullLeft]: props.pullLeft
    });
    const value: IUseNav = {
        appearance,
        activeKey: props.activeKey ?? ctx.activeKey,
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