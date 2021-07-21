import React from "react"
import styles from '../../sass/modules/AvatarImage.module.scss';
import classNames from "classnames";
import {IAvatarImageProps} from "../../props/IAvatarImageProps";

export const AvatarImage = (props: IAvatarImageProps) => {
    const cs = classNames(styles.AvatarImage, props.className);
    return (
        <img
            className={cs}
            style={props.style}
            src={props.src}
            alt={props.alt}
            title={props.title}
        />
    )
}