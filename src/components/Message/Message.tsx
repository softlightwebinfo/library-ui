import { useToggle } from "@codeunic/library-hooks";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import React, { useCallback, useEffect } from "react";
import { messageIcon } from "../../functions";
import { IMessageProps } from "../../props/IMessageProps";
import styles from '../../sass/modules/Message.module.scss';

export const Message = ({ style, type, show = true, closable, isAlert, className, ...props }: IMessageProps) => {
  const [open, { toggle, off, on }] = useToggle(show);
  const cs = classNames(styles.Message, className, {
    [styles[type ?? 'info']]: type,
    [styles.ShowIcon]: props.showIcon,
    [styles.Full]: props.full,
    [styles.NotTitle]: !props.title && props.showIcon,
    [styles.IsAlert]: isAlert,
    [styles.Separate]: props.separate,
    [styles.Hover]: props.hover,
    [styles.Dark]: props.dark,
  });

  const onClick = useCallback((evt) => {
    toggle();
    props.onClose?.(evt);
  }, [show, closable]);
  useEffect(() => {
    show && on();
    !show && off();
  }, [show]);
  if (!open) return null;

  return (
    <div className={ cs } style={ style }>
      <div className={ styles.Container }>
        { closable && (
          <button onClick={ onClick } type="button" className={ styles.Close }>
            <FontAwesomeIcon icon={ faTimes }/>
          </button>
        ) }
        { props.showIcon && (
          <div className={ styles.IconWrapper }>
            <FontAwesomeIcon icon={ messageIcon(type ?? "info") }/>
          </div>
        ) }
        <div className={ styles.Content }>
          { props.title && <h5 className={ styles.Header }>{ props.title }</h5> }
          <div className={ styles.Body }>{ props.description }</div>
        </div>
      </div>
    </div>
  );
};
