import classNames from "classnames";
import React, { useMemo } from "react";
import { Description, Line, Message, Title } from "../../components";
import { MessageAlert } from "../../components/Message/MessageAlert";
import { IStatProcessProps } from "../../props/IStatProcessProps";
import styles from '../../sass/modules/StatProcess.module.scss';

export const StatProcess = (props: IStatProcessProps) => {
  const cs = classNames(styles.StatProcess, props.className, {});

  const percent = useMemo(() => {
    const list = props.list.filter(item => item.success);
    return Number(((list.length / props.list.length) * 100).toFixed(0));
  }, [props.list]);
  return (
    <div className={ cs } style={ props.style }>
      <Title>{ props.title }</Title>
      <Description>{ props.subTitle }</Description>
      <Line className={ styles.Line } percent={ percent }/>
      <div className={ styles.Content }>
        { props.list.map((item, index) => (
          <Message
            hover
            isAlert
            description={
              <MessageAlert
                onClick={ (evt) => props.onClick?.(index, item, evt) }
                success={ item.success }
                key={ index }
                icon={ item.icon }
                label={ item.label }
                button={ item.button }
              />
            }
          />
        )) }
      </div>
    </div>
  );
};
