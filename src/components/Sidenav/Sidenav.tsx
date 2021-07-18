import React from "react";
import classNames from "classnames";
import styles from '../../sass/modules/Sidenav.module.scss';
import {ISidenavProps} from "../../props/ISidenavProps";
import {ContextSidenav, IUseSidenav} from "../../context/useSidenav";
import {useSidebarPage} from "../../context/useContextSidebarPage";

export const Sidenav = ({className, style, ...props}: ISidenavProps) => {
    const ctx = useSidebarPage();
    const cs = classNames(styles.Sidenav, {
        [styles.Expanded]: props.expanded,
        [styles[props.appearance ?? '']]: !!props.appearance,
        [styles.In]: props.collapse,
        [styles.Out]: !props.collapse,
        [styles.SidebarPage]: ctx.sidebarPage,
    });
    const value: IUseSidenav = {
        sidenav: true,
        activeKey: props.activeKey,
        defaultOpenKeys: props.defaultOpenKeys,
    }
    return (
        <ContextSidenav.Provider value={value}>
            <div className={cs} style={style}>
                {props.children}
            </div>
        </ContextSidenav.Provider>
    )
};