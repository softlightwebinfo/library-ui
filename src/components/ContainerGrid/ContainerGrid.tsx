import React from "react";
import {IContainerGridProps} from "../../props/IContainerGridProps";
import classNames from "classnames";
import styles from '../../sass/modules/ContainerGrid.module.scss';

export const ContainerGrid = (props: IContainerGridProps) => {
    const cs = classNames(styles.ContainerGrid, props.className);
    return (
        <div className={cs} style={props.style}>
            {props.children}
        </div>
    )
}