import { faSearch } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";
import React from "react";
import { IPickerMenuProps } from "../../props/IPickerMenuProps";
import styles from '../../sass/modules/PickerMenu.module.scss';
import { Icon } from "../Icon";
import { Input, InputGroup, InputGroupAddon } from "../Input";

export const PickerMenu = (props: IPickerMenuProps) => {
  const cs = classNames(styles.PickerMenu, props.className, {
    [styles.Block]: props.block,
  });

  return (
    <div className={ cs } style={ props.style }>
      { props.showSearch && (
        <div className={ styles.Input }>
          <InputGroup dark>
            <Input onChange={ props.onSearch } value={ props.searchValue } placeholder={ "Search" }/>
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
