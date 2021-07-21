import React from "react";
import {IAvatarGroupProps} from "../../props/IAvatarGroupProps";
import classNames from "classnames";
import styles from '../../sass/modules/AvatarGroup.module.scss';

export const AvatarGroup = (props: IAvatarGroupProps) => {
    const cs = classNames(styles.AvatarGroup, props.className);
    return (
        <div className={cs} style={props.style}>
            {props.children}
        </div>
    )
}