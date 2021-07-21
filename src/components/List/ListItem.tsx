import classNames from "classnames";
import React from "react";
import {IListProps} from "../../props/IListProps";
import styles from '../../sass/modules/List.module.scss';

export const List = ({...props}: IListProps) => {
    const cs = classNames(styles.List, props.className, {});
    return (
        <div className={cs} style={props.style}>

        </div>
    );
};