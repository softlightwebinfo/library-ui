import classNames from "classnames";
import React from "react";
import { IToolbarSectionProps } from "../../props/IToolbarSectionProps";
import styles from '../../sass/modules/ToolbarSection.module.scss';

export const ToolbarSection = ({ ...props }: IToolbarSectionProps) => {
  const cs = classNames(styles.ToolbarSection, props.className, {});

  return (
    <div className={ cs } style={ props.style }>
      { props.children }
    </div>
  );
};
