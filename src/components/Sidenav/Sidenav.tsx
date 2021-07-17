import React from "react";
import classNames from "classnames";
import styles from '../../sass/modules/Sidenav.module.scss';
import {ISidenavProps} from "../../props/ISidenavProps";
import {ContextSidenav, IUseSidenav} from "../../context/useSidenav";

export const Sidenav = ({className, style, ...props}: ISidenavProps) => {
    const cs = classNames(styles.Sidenav);
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