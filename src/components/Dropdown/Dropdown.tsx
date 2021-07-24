import { useOnClickOutside, useToggle } from "@codeunic/library-hooks";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";
import React, { useCallback, useRef } from "react";
import { useNav, useSidenav } from "../../context";
import { ContextDropdown, IUseDropdown } from "../../context/useDropdown";
import { IDropdownProps } from "../../props/IDropdownProps";
import styles from '../../sass/modules/Dropdown.module.scss';
import { Button } from "../Button/Button";
import { Icon } from "../Icon/Icon";
import { DropdownMenu } from "./DropdownMenu";

export const Dropdown = ({ className, trigger = "click", appearance = "subtle", style, ...props }: IDropdownProps) => {
  const ctxNav = useNav();
  const ctx = useSidenav();
  const ref = useRef(null);
  const [show, { toggle, off, on }] = useToggle(ctx?.defaultOpenKeys?.includes(props?.eventKey ?? ''));
  const noExpanded = ctx.sidenav && ctx.expanded === false;
  useOnClickOutside(ref, () => {
    if (ctx.sidenav && ctx.expanded) return;
    off();
  });
  const cs = classNames(styles.Dropdown, className, {
    [styles.Disabled]: props.isDisabled,
    [styles.NavVertical]: ctxNav.vertical,
    [styles.Navbar]: ctxNav.navbar && !ctxNav.vertical,
    [styles.NoExpanded]: noExpanded,
  });

  const onClick = useCallback(() => {
    if (props.isDisabled || trigger !== "click" || !trigger?.includes("click")) return;
    toggle();
  }, [trigger]);

  const setIsShown = useCallback((show: boolean) => {
    if (props.isDisabled || trigger != "hover" || !trigger?.includes("hover")) return;
    show && on();
    !show && off();
  }, [trigger]);

  const value: IUseDropdown = {
    activeKey: props.activeKey,
    vertical: ctxNav.vertical,
  };
  const Component = props.isItem ? "li" : "div";
  const childrenComponentTitle = (
    <>
      { props.icon }
      <span>{ props.title }</span>
      <Icon className={ styles.Icon } icon={ show ? faChevronUp : faChevronDown }/>
    </>
  );
  return (
    <ContextDropdown.Provider value={ value }>
      <Component className={ cs } style={ style }>
        <div
          onMouseEnter={ () => setIsShown(true) }
          onMouseLeave={ () => setIsShown(false) }
          ref={ ref } className={ styles.Content }
        >
          <Button
            title={ typeof props.title === "string" ? props.title : "" }
            className={ styles.Button }
            appearance={ appearance } onClick={ onClick }
          >
            { props?.renderTitle?.(childrenComponentTitle, props) }
            { !props.renderTitle && childrenComponentTitle }
          </Button>
          <DropdownMenu
            style={ props.styleMenu }
            placement={ props.placementMenu }
            className={ classNames({ [styles.Show]: show }, props.classNameMenu) }
            isMenu
            expandedMobile={ noExpanded }
          >
            { props.children }
          </DropdownMenu>
        </div>
      </Component>
    </ContextDropdown.Provider>
  );
};
