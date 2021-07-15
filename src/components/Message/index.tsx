import React, {useCallback, useEffect} from "react";
import styles from '../../sass/modules/Message.module.scss';
import {IMessageProps} from "../../props/IMessageProps";
import classNames from "classnames";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {messageIcon} from "../../functions";
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import {useToggle} from "@codeunic/library-hooks";

export const Message = ({style, type, show = true, closable, className, ...props}: IMessageProps) => {
    const [open, {toggle, off, on}] = useToggle(show)
    const cs = classNames(styles.Message, className, {
        [styles[type ?? 'info']]: type,
        [styles.ShowIcon]: props.showIcon,
        [styles.Full]: props.full,
        [styles.NotTitle]: !props.title && props.showIcon,
    });

    const onClick = useCallback((evt) => {
        toggle();
        props.onClose?.(evt);
    }, [show, closable]);
    useEffect(() => {
        show && on();
        !show && off();
    }, [show])
    if (!open) return null;

    return (
        <div className={cs} style={style}>
            <div className={styles.Container}>
                {closable && (
                    <button onClick={onClick} type="button" className={styles.Close}>
                        <FontAwesomeIcon icon={faTimes}/>
                    </button>
                )}
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