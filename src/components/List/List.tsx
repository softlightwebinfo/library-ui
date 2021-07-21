import classNames from "classnames";
import React from "react";
import {IAvatarProps} from "../../props/IListProps";
import styles from '../../sass/modules/Avatar.module.scss';
import {AvatarImage} from "./AvatarImage";

export const List = ({size = "md", ...props}: IAvatarProps) => {
    const cs = classNames(styles.Avatar, props.className, {
        [styles.Circle]: props.circle,
        [styles[size]]: size,
    });
    return (
        <div className={cs} style={props.style}>
            {props.children}
            {props.src && (
                <AvatarImage
                    src={props.src}
                    alt={props.alt}
                    title={props.title}
                />
            )}
        </div>
    );
}