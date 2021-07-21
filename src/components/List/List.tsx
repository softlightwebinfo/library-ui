import classNames from "classnames";
import React from "react";
import {ContextList, IUseList} from "../../context/useContextList";
import {IListProps} from "../../props/IListProps";
import styles from '../../sass/modules/List.module.scss';

export const List = ({size = "md", ...props}: IListProps) => {
    const cs = classNames(styles.List, props.className, {
        [styles.Bordered]: props.bordered,
    });
    const value: IUseList = {
        list: true,
        hover: true,
        size: size,
        bordered: props.bordered,
    };
    return (
        <ContextList.Provider value={value}>
            <div className={cs} style={props.style}>
                {props.children}
            </div>
        </ContextList.Provider>
    );
};