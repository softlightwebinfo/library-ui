import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { SearchWidget } from "../widget/SearchWidget/SearchWidget";

export default {
  title: 'Widgets/Search/Default',
  component: SearchWidget,
  argTypes: {},
  args: {},
} as ComponentMeta<typeof SearchWidget>;

const Template: ComponentStory<typeof SearchWidget> = (args) => <SearchWidget { ...args } />;

export const Default = Template.bind({});
Default.args = {
  show: true,
  input: {
    placeholder: "Buscar",
  },
  results: [
    {
      title: "Ejemplo de busqueda"
    ,
      description: "Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto final. Wikipedia"
    ,
    },  {
      title: "Ejemplo de busqueda"
    ,
      description: "Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto final. Wikipedia"
    ,
    },  {
      title: "Ejemplo de busqueda"
    ,
      description: "Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto final. Wikipedia"
    ,
    },  {
      title: "Ejemplo de busqueda"
    ,
      description: "Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto final. Wikipedia"
    ,
    },  {
      title: "Ejemplo de busqueda"
    ,
      description: "Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto final. Wikipedia"
    ,
    },  {
      title: "Ejemplo de busqueda"
    ,
      description: "Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto final. Wikipedia"
    ,
    },  {
      title: "Ejemplo de busqueda"
    ,
      description: "Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto final. Wikipedia"
    ,
    },  {
      title: "Ejemplo de busqueda"
    ,
      description: "Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto final. Wikipedia"
    ,
    },  {
      title: "Ejemplo de busqueda"
    ,
      description: "Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto final. Wikipedia"
    ,
    },  {
      title: "Ejemplo de busqueda"
    ,
      description: "Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto final. Wikipedia"
    ,
    },
  ],
};
