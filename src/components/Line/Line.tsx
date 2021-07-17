import React from "react";
import classNames from "classnames";
import styles from '../../sass/modules/Line.module.scss';
import {ILineProps} from "../../props/ILineProps";
import {Icon} from "../Icon";
import {faCheck, faTimes} from "@fortawesome/free-solid-svg-icons";

export const Line = ({className, style, ...props}: ILineProps) => {
    const cs = classNames(styles.Line, className, {
        [styles.Fail]: props.status === "fail",
        [styles.Success]: props.status === "success",
    });
    return (
        <div className={cs} style={style}>
            <div className={styles.Outer}>
                <div className={styles.Inner}>
                    <div style={{
                        background: props.strokeColor,
                        width: `${props.percent}%`
                    }} className={styles.Bg}/>
                </div>
            </div>
            <div className={styles.Info}>
                {(props.status === "fail") ?
                    <Icon icon={faTimes}/> : props.percent > 99 ?
                        <Icon icon={faCheck}/> :
                        <span>{props.percent}%</span>
                }
            </div>
        </div>
    )
};