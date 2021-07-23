import { faCheck } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";
import React from "react";
import { IMessageAlertProps } from "../../props/IMessageAlertProps";
import styles from '../../sass/modules/MessageAlert.module.scss';
import { Icon } from "../Icon";

export const MessageAlert = (props: IMessageAlertProps) => {
  const cs = classNames(styles.MessageContent, props.className, {
    [styles.Success]: props.success,
  });
  return (
    <div className={ cs } style={ props.style } onClick={props.onClick}>
      <div className={ styles.Content }>
        { props.success ? <Icon icon={ faCheck }/> : props.icon }
        <span className={ styles.Label }>{ props.label }</span>
      </div>
      <a href="#" className={styles.Button}>{ props.button }</a>
    </div>
  );
};
