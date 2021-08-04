import React from "react";
import classNames from "classnames";
import styles from '../../sass/modules/Sidebar.module.scss';
import {ISidebarProps} from "../../props/ISidebarProps";
import {useSidebarPage} from "../../context/useContextSidebarPage";

export const Sidebar = ({className, style, ...props}: ISidebarProps) => {
    const ctx = useSidebarPage();
    const cs = classNames(styles.Sidebar, className, {
        [styles.Preview]: props.preview,
        [styles.Collapsible]: props.collapsible,
        [styles.SidebarPage]: ctx.sidebarPage,
        [styles.Default]: props.default,
    });
    return (
        <div className={cs} style={{
            ...style,
            flex: props.width && (`0 0 ${props.width}`),
            width: props.width,
        }}>
            {props.children}
        </div>
    )
};
