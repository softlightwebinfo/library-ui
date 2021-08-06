import { useToggle } from "@codeunic/library-hooks";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";
import React, { useCallback } from "react";
import { IPanelProps } from "../../props/IPanelProps";
import styles from '../../sass/modules/Panel.module.scss';
import { Icon } from "../Icon";

export const Panel = (props: IPanelProps) => {
  const [show, { toggle }] = useToggle(props.initialOpen);
  const cs = classNames(styles.Panel, props.className, {
    [styles.Bordered]: props.bordered,
    [styles.Shaded]: props.shaded,
    [styles.NoHeader]: !props.header,
    [styles.BodyFill]: props.bodyFill,
    [styles.Show]: show && props.collapsible,
    [styles.Hide]: !show && props.collapsible,
    [styles.Collapsible]: props.collapsible,
    [styles.Card]: props.card,
    [styles.SpacingTop]: props.spacingTop,
  });

  const onClick = useCallback(() => {
    props.collapsible && toggle();
  }, [props.collapsible]);

  return (
    <div className={ cs } style={ props.style } onClick={ props.onClick }>
      { props.header && (<header onClick={ onClick } className={ styles.Header }>
        <span>{ props.header }</span>
        { props.collapsible && <Icon icon={ show ? faChevronUp : faChevronDown }/> }
      </header>) }
      <div className={ classNames(styles.Body, props.classNameBody) }>
        { props.children }
      </div>
    </div>
  );
};
