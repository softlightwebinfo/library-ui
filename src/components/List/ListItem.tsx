import classNames from "classnames";
import React from "react";
import styles from '../../sass/modules/ListItem.module.scss';
import {useList} from "../../context/useContextList";
import {IListItemProps} from "../../props/IListItemProps";

export const ListItem = ({...props}: IListItemProps) => {
    const ctx = useList()
    const cs = classNames(styles.ListItem, props.className, {
        [styles[ctx.size ?? "md"]]: ctx.size ?? props.size,
        [styles.Bordered]: ctx.bordered ?? props.bordered,
        [styles.Hover]: ctx.hover ?? props.hover,
    });
    return (
        <div className={cs} style={props.style}>
            <div className={styles.Content}>{props.children}</div>
        </div>
    );
};