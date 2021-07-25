import { faEllipsisV, faSearch } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";
import React from "react";
import { useDatatable } from "../../context/useDatatable";
import { IDatatableHeaderProps } from "../../props/IDatatableHeaderProps";
import styles from '../../sass/modules/DatatableHeader.module.scss';
import { Checkbox, CheckboxGroup } from "../Checkbox";
import { Dropdown, DropdownItem } from "../Dropdown";
import { Icon } from "../Icon";
import { Input, InputGroup, InputGroupAddon } from "../Input";

export const DatatableHeader = (props: IDatatableHeaderProps) => {
  const cx = useDatatable();
  const cs = classNames(styles.DatatableHeader, props.className, {});
  return (
    <header className={ cs } style={ props.style }>
      <InputGroup>
        <InputGroupAddon>
          <Icon icon={ faSearch }/>
          <span className={ styles.IconLabel }>Search:</span>
        </InputGroupAddon>
        <Input
          value={ cx.searchValue }
          onChange={ cx.changeSearch }
          placeholder={ "Search" }
        />
        <CheckboxGroup name={ "as" } onChange={ cx.toggleColumnVisibility }>
          <Dropdown
            styleMenu={ { width: 200 } }
            noArrow
            icon={ <Icon icon={ faEllipsisV }/> }
            placementMenu={ "left-bottom" }
          >
            { cx.columns.map((col) => {
              if (!col.label) return null;
              return (
                <DropdownItem default key={ col.id }>
                  <Checkbox
                    value={ col.id }
                    size={ "sm" }
                    checked={ col.visible }
                    id={ col.id }
                  >
                    { col.label }
                  </Checkbox>
                </DropdownItem>
              );
            }) }
          </Dropdown>
        </CheckboxGroup>
      </InputGroup>
    </header>
  );
};
