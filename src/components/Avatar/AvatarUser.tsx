import classNames from "classnames";
import React from "react";
import { IAvatarUserProps } from "../../props/IAvatarUserProps";
import styles from '../../sass/modules/AvatarUser.module.scss';
import { TitleDescription } from "../TitleDescription";
import { Avatar } from "./Avatar";

export const AvatarUser = ({ align = "left", size = "sm", circle = true, ...props }: IAvatarUserProps) => {
  const cs = classNames(styles.AvatarUser, props.className, {
    [styles[align]]: align,
  });
  return (
    <div className={ cs } style={ props.style }>
      <Avatar
        size={ size }
        title={ props.title }
        circle={ circle }
        alt={ props.title }
        src={ props.avatar }
      >
        { props.name }
      </Avatar>
      <TitleDescription className={styles.TitleDescription} title={ props.title } description={ props.subTitle }/>
    </div>
  );
};
