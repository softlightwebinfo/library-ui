import React, {useCallback} from "react";
import {INavItemProps} from "../../props/INavItemProps";
import classNames from "classnames";
import styles from '../../sass/modules/NavItem.module.scss';
import {useNav} from "../../context/useNav";
import {useNavbar} from "../../context/useNavbar";
import {useSidenav} from "../../context";

export const NavItem = ({className, eventKey = "", style, ...props}: INavItemProps) => {
    const ctx = useNav();
    const ctxNavbar = useNavbar()
    const ctxSidenav = useSidenav();
    const cs = classNames(styles.NavItem, className, {
        [styles.Active]: props.active ?? ctx.activeKey === eventKey,
        [styles[ctx.appearance ?? ""]]: !!ctx.appearance,
        [styles.Reversed]: ctx.reversed,
        [styles.Vertical]: ctx.vertical,
        [styles.Navbar]: ctxNavbar.navbar,
        [styles.Sidenav]: ctxSidenav.sidenav,
        [styles.NoExpanded]: ctxSidenav.expanded === false,
    });

    const onChange = useCallback((evt) => {
        props.onSelect?.(eventKey, evt);
        ctx?.onSelect?.(eventKey, evt);
    }, [props.onSelect, ctx.activeKey]);

    const component = (
        <div className={styles.Content}>
            {props.icon && <span className={styles.Icon}>{props.icon}</span>}
            {ctxSidenav.expanded != false && props.children}
        </div>
    );

    return (
        <li className={cs} style={style} onClick={onChange}>
            {props.renderItem?.(component) ?? component}
        </li>
    )
};