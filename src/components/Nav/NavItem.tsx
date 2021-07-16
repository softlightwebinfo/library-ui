import React, {useCallback} from "react";
import {INavItemProps} from "../../props/INavItemProps";
import classNames from "classnames";
import styles from '../../sass/modules/NavItem.module.scss';
import {useNav} from "../../context/useNav";

export const NavItem = ({className, eventKey = "", style, ...props}: INavItemProps) => {
    const ctx = useNav();
    const cs = classNames(styles.NavItem, className, {
        [styles.Active]: props.active ?? ctx.activeKey === eventKey,
        [styles[ctx.appearance ?? ""]]: !!ctx.appearance,
        [styles.Reversed]: ctx.reversed,
        [styles.Vertical]: ctx.vertical,
    });
    const onChange = useCallback((evt) => {
        props.onSelect?.(eventKey, evt);
        ctx?.onSelect?.(eventKey, evt);
    }, [props.onSelect, ctx.activeKey]);
    return (
        <li className={cs} style={style} onClick={onChange}>
            <div className={styles.Content}>
                {props.icon && <span className={styles.Icon}>{props.icon}</span>}
                {props.children}
            </div>
        </li>
    )
};