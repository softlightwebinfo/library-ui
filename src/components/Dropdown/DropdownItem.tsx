import classNames from "classnames";
import React from "react";
import { useSidenav } from "../../context";
import { useDropdown } from "../../context/useDropdown";
import { IDropdownItemProps } from "../../props/IDropdownItemProps";
import styles from '../../sass/modules/DropdownItem.module.scss';

export const DropdownItem = ({ className, style, ...props }: IDropdownItemProps) => {
  const ctx = useDropdown();
  const ctxSidenav = useSidenav();
  const cs = classNames(styles.DropdownItem, className, {
    [styles.Active]: props.eventKey === ctx.activeKey,
    [styles.NavVertical]: ctx.vertical,
    [styles.Default]: props.default,
    [styles.NavSidebarExpanded]: ctxSidenav.sidenav && !ctxSidenav.expanded,
  });

  const onClick = (evt: any) => {
    props.onClick?.(props.eventKey, evt);
    ctx.onClick?.(props.eventKey, evt);
  };

  return (
    <li className={ cs } style={ style } onClick={ onClick }>
      <div className={ styles.Content } style={ props.styleContent }>
        { props.children }
      </div>
    </li>
  );
};
