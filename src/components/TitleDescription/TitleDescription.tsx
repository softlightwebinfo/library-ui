import classNames from "classnames";
import React from "react";
import { ITitleDescriptionProps } from "../../props/ITitleDescriptionProps";
import styles from '../../sass/modules/TitleDescription.module.scss';
import { Description } from "../Description";
import { Dot } from "../Dot";
import { Title } from "../Title";

export const TitleDescription = (props: ITitleDescriptionProps) => {
  const cs = classNames(styles.TitleDescription, props.className, {
    [styles.Center]: props.center,
  });
  return (
    <div className={ cs }>
      <Title className={ styles.Title }>
        { props.dot && (<Dot default/>) }
        <span>{ props.title }</span>
      </Title>
      <Description className={ styles.Description }>{ props.description }</Description>
    </div>
  );
};
