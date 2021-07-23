import classNames from "classnames";
import React from "react";
import { Button, ContainerGrid } from "../../components";
import { Description } from "../../components/Description/Description";
import { Title } from "../../components/Title/Title";
import { IPrivacyPolicyProps } from "../../props/IPrivacyPolicyProps";
import styles from '../../sass/modules/PrivacyPolicy.module.scss';

export const PrivacyPolicy = ({ ...props }: IPrivacyPolicyProps) => {
  const cs = classNames(styles.PrivacyPolicy, props.className);

  return (
    <div className={ cs } style={ props.style }>
      <ContainerGrid className={ styles.Container }>
        <Title white={ props.white }>{ props.title }</Title>
        <Description white={ props.white }>{ props.description }</Description>
        <Button { ...props.button }>{ props.buttonText }</Button>
        <a className={ styles.Link } href={ props.link }>{ props.linkText }</a>
      </ContainerGrid>
    </div>
  );
};
