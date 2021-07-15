import React from "react";
import styles from '../../sass/modules/Message.module.scss';
import {IMessageProps} from "../../props/IMessageProps";
import classNames from "classnames";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {messageIcon} from "../../functions";

export const Message = ({style, type, className, ...props}: IMessageProps) => {
    const cs = classNames(styles.Message, className, {
        [styles[type ?? '']]: type,
        [styles.ShowIcon]: props.showIcon,
    });
    return (
        <div className={cs} style={style}>
            <div className={styles.Container}>
                {props.showIcon && (
                    <div className={styles.IconWrapper}>
                        <FontAwesomeIcon icon={messageIcon(type ?? "info")}/>
                    </div>
                )}
                <div className={styles.Content}>
                    {props.title && <h5 className={styles.Header}>{props.title}</h5>}
                    <div className={styles.Body}>{props.description}</div>
                </div>
            </div>
        </div>
    )
};