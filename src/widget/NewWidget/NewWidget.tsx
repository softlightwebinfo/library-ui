import classNames from "classnames";
import React, { useCallback } from "react";
import {
  Badge
, ButtonToolbar
, Description
, Drawer
, DrawerBody
, DrawerHeader
, DrawerTitle
, Panel
, PanelGroup
, Title
,
} from "../../components";
import { INewWidgetData, INewWidgetProps } from "../../props/INewWidgetProps";
import styles from '../../sass/modules/NewWidget.module.scss';

export const NewWidget = ({ data = [], size = "xs", ...props }: INewWidgetProps) => {
  const cs = classNames(styles.NewWidget, props.className, {});
  const onClick = useCallback((item: INewWidgetData, index: number) => (evt: any) => props?.onClick?.(item, index, evt), [data]);
  return (
    <Drawer gray={ true } size={ size } { ...props } className={ cs } style={ props.style }>
      <DrawerHeader dark>
        <DrawerTitle white>{ props.title }</DrawerTitle>
      </DrawerHeader>
      <DrawerBody default>
        <PanelGroup>
          { data.map((item, index) => (
            <Panel
              { ...item.panel }
              card
              key={ index }
              className={ styles.Panel }
              onClick={ onClick(item, index) }
            >
              <ButtonToolbar>
                <Badge content={ item.badge }/>
                <span>{ item.date }</span>
              </ButtonToolbar>
              <Title className={ styles.Title }>{ item.title }</Title>
              { item.image && (
                <img className={ styles.Image } src={ item.image } alt={ item.title } title={ item.title }/>) }
              <Description>{ item.description }</Description>
            </Panel>
          )) }
        </PanelGroup>
        { props.children }
      </DrawerBody>
    </Drawer>
  );
};
