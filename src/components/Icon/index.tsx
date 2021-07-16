import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";
import {IIconProps} from "../../props/IIconProps";
import classNames from "classnames";
import styles from '../../sass/modules/Icon.module.scss';

export const Icon = ({className, style, icon, ...props}: IIconProps) => {
    const cs = classNames(styles.Icon, className);
    return (
        <FontAwesomeIcon {...props} className={cs} style={style} icon={icon}/>
    )
};