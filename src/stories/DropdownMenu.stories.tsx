import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { ButtonToolbar, Divider, Dropdown, DropdownItem, DropdownMenu, TitleDescription } from '../components';
import { AvatarUser } from "../components/Avatar/AvatarUser";

export default {
  title: 'Base/Dropdown/Menu',
  component: Dropdown,
  argTypes: {},
  args: {},
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => (
  <ButtonToolbar>
    <Dropdown
      styleMenu={ { width: 250 } }
      activeKey="e-1"
      title={ <AvatarUser align={ "right" } title={ "Rafa" } subTitle={ "Perfil de empresa" } name={ "RG" }/> }
      { ...args }
    >
      <DropdownItem
        eventKey="a"
        styleContent={ { display: "flex", alignItems: "center", justifyContent: "space-between" } }
      >
        <AvatarUser title={ "Rafa" } subTitle={ "Perfil de empresa" } name={ "RG" }/>
        <a href="">Editar</a>
      </DropdownItem>
      <Divider zero component={ "li" }/>
      <DropdownMenu title={ (
        <TitleDescription title={ "Softlightweb" } description={ "Cambia o gestiona tus cuentas" }/>
      ) } placement={ "top-right" }>
        <DropdownItem eventKey="e-1">Softligthweb</DropdownItem>
        <DropdownItem eventKey="e-2">Codeunic</DropdownItem>
        <DropdownItem eventKey="e-3">Emprendimos</DropdownItem>
      </DropdownMenu>
      <Divider zero component={ "li" }/>
      <DropdownItem eventKey="a">Configuración</DropdownItem>
      <DropdownItem eventKey="b">Usuarios</DropdownItem>
      <DropdownItem eventKey="c">Subscripcion</DropdownItem>
      <DropdownItem eventKey="d">Afiliados</DropdownItem>
      <Divider zero component={ "li" }/>
      <DropdownItem eventKey="d">Calendario</DropdownItem>
      <DropdownItem eventKey="d">Importar</DropdownItem>
      <DropdownItem eventKey="d">Holded store</DropdownItem>
      <DropdownItem eventKey="d">Mejoras de producto</DropdownItem>
      <DropdownItem eventKey="d">Ayuda</DropdownItem>
      <Divider zero component={ "li" }/>
      <DropdownItem eventKey="d">Desconectar</DropdownItem>
    </Dropdown>
  </ButtonToolbar>
);

export const Default = Template.bind({});
Default.args = {};
