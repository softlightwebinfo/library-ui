import React from "react";
import classNames from "classnames";
import styles from '../../sass/modules/Content.module.scss';
import {IContentProps} from "../../props/IContentProps";
import {useSidebarPage} from "../../context/useContextSidebarPage";

export const Content = ({className, style, ...props}: IContentProps) => {
    const ctxPage = useSidebarPage();
    const cs = classNames(styles.Content, className, {
        [styles.Preview]: props.preview,
        [styles.SidebarPage]: ctxPage.sidebarPage
    });
    return (
        <div className={cs} style={style}>
            <div className={styles.Container}>
                {props.children}
            </div>
        </div>
    )
};