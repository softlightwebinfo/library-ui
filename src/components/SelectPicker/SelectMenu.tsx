import { faSearch } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";
import React from "react";
import { useSelectPicker } from "../../context/useSelectPicker";
import { ISelectMenuProps } from "../../props/ISelectMenuProps";
import styles from '../../sass/modules/SelectMenu.module.scss';
import { Icon } from "../Icon";
import { Input, InputGroup, InputGroupAddon } from "../Input";

export const SelectMenu = (props: ISelectMenuProps) => {
  const cx = useSelectPicker();
  const onChange = (evt: any) => {
    cx?.setSearch?.(evt.target.value);
  };
  const cs = classNames(styles.SelectMenu, props.className, {
    [styles.Block]: cx.block,
  });
  return (
    <div className={ cs } style={ props.style }>
      { cx.showSearch && (
        <div className={ styles.Input }>
          <InputGroup dark>
            <Input onChangeEvent={ onChange } value={ cx.search } placeholder={ "Search" }/>
            <InputGroupAddon transparent>
              <Icon icon={ faSearch }/>
            </InputGroupAddon>
          </InputGroup>
        </div>
      ) }
      <div className={ styles.Content }>
        { props.children }
      </div>
    </div>
  );
};
