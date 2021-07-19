import React from "react";
import classNames from "classnames";
import {IPlaceholderProps} from "../../props/IPlaceholderProps";
import styles from '../../sass/modules/Placeholder.module.scss';
import {randomNum} from "@codeunic/library-hooks";

export const Placeholder = (props: IPlaceholderProps) => {
    const cs = classNames(styles.Placeholder, props.className);
    const data = [...new Array(4)].map(() => randomNum(20, 100));
    return (
        <div className={cs} style={props.style}>
            <div className={styles.Paragraph}>
                <div className={styles.Rows}>
                    {data.map((num, index) => (
                        <p key={index} style={{width: `${num}%`}}/>
                    ))}
                </div>
            </div>
        </div>
    );
};