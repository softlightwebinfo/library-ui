import React from "react";
import classNames from "classnames";
import styles from '../../sass/modules/StepsItem.module.scss';
import {IStepsItemProps} from "../../props/IStepsItemProps";
import {Icon} from "../Icon";
import {faCheck} from "@fortawesome/free-solid-svg-icons";

export const StepsItem = ({className, isBorder = true, style, ...props}: IStepsItemProps) => {
    const cs = classNames(styles.StepsItem, className, {
        [styles.Finish]: props.finish,
        [styles.FinishNext]: props.finishNext,
        [styles.IsBorder]: isBorder,
    });

    return (
        <div className={cs} style={style}>
            <div className={styles.Tail}/>
            <div className={styles.IconWrapper}>
                <span>
                    {props.finish ? <Icon className={styles.Icon} icon={faCheck}/> : props.index ?? 1}
                </span>
            </div>
            <div className={styles.Content}>
                <div className={styles.Title}>
                    {props.title}
                </div>
                {props.description && <div className={styles.Description}>{props.description}</div>}
            </div>
        </div>
    );
};