import React from "react";
import classNames from "classnames";
import {ITagGroupProps} from "../../props/ITagGroupProps";
import styles from '../../sass/modules/TagGroup.module.scss';
export const TagGroup = (
    {
        children,
        style,
        className,
        ...props
    }: ITagGroupProps
) => {
    const cs = classNames(styles.TagGroup, className);
    return (
        <div className={cs} style={style}>
            {children}
        </div>
    );
};