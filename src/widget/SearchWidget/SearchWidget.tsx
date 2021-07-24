import { faSearch } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";
import React from "react";
import {
  Description
, Icon
, Input
, InputGroup
, InputGroupButton
, Modal
, Panel
, PanelGroup
, Title
,
} from "../../components";
import { ISearchWidgetProps } from "../../props/ISearchWidgetProps";
import styles from '../../sass/modules/SearchWidget.module.scss';

export const SearchWidget = ({ results = [], ...props }: ISearchWidgetProps) => {
  const cs = classNames(styles.SearchWidget, props.className, {});
  return (
    <Modal { ...props } className={ cs } style={ props.style } paddingBody={ false }>
      <InputGroup className={styles.Input} >
        <Input { ...props.input }/>
        <InputGroupButton onClick={props.onClick}>
          <Icon icon={ faSearch }/>
        </InputGroupButton>
      </InputGroup>
      <PanelGroup className={styles.Over}>
        { results.map((item, index) => (
          <Panel className={styles.Panel} card key={ index }>
            <Title>{ item.title }</Title>
            <Description>{ item.description }</Description>
          </Panel>
        )) }
      </PanelGroup>
    </Modal>
  );
};
