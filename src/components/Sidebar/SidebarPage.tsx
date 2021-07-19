import React from "react";
import classNames from "classnames";
import styles from '../../sass/modules/SidebarPage.module.scss';
import {ISidebarPageProps} from "../../props/ISidebarPageProps";
import {ContextSidebarPage} from "../../context/useContextSidebarPage";

export const SidebarPage = ({className, style, ...props}: ISidebarPageProps) => {
    const cs = classNames(styles.SidebarPage, className);
    const value = {
        sidebarPage: true
    };
    return (
        <ContextSidebarPage.Provider value={value}>
            <div className={cs} style={style}>
                {props.children}
            </div>
        </ContextSidebarPage.Provider>
    )
};