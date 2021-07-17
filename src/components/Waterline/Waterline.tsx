import React from "react";
import {IWaterlineProps} from "../../props/IWaterlineProps";
import styles from '../../sass/modules/Waterline.module.scss';

export const Waterline = ({style, className, ...props}: IWaterlineProps) => {
    return (
        <div
            className={styles.Waterline}
            style={style}
        />
    )
};