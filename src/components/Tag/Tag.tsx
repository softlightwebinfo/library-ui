import React from "react";
import {ITagProps} from "../../props/ITagProps";
import classNames from "classnames";
import styles from '../../sass/modules/Tag.module.scss';
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import {Icon} from "../Icon/Icon";

export const Tag = ({className, style, closeable, color, ...props}: ITagProps) => {
    const cls = classNames(styles.Tag, className, {
        [styles.TagCloseable]: closeable,
        [styles[color ?? '']]: color
    });
    return (
        <div className={cls} style={style}>
            <span>{props.children}</span>
            {closeable && <Icon onClick={props.onClose} icon={faTimes}/>}
        </div>
    );
}