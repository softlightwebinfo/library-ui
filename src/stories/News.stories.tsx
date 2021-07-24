import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { NewWidget } from "../widget/NewWidget/NewWidget";

export default {
  title: 'Widgets/NewWidget/Default',
  component: NewWidget,
  argTypes: {},
  args: {},
} as ComponentMeta<typeof NewWidget>;

const Template: ComponentStory<typeof NewWidget> = (args) => (
  <NewWidget { ...args }>

  </NewWidget>
);
export const Default = Template.bind({});
Default.args = {
  show: true,
  title: "Novedades del ERP",
  data: [
    {
      date: "Julio 13, 2021"
    , title: "Tus proyectos más agiles que nunca!"
    , description: "Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto final. Wikipedia"
    , badge: "Proyectos",
    }, {
      date: "Julio 13, 2021"
    , title: "Tus proyectos más agiles que nunca!"
    , description: "Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto final. Wikipedia"
    , badge: "Proyectos",
      image: "https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=5",
    }, {
      date: "Julio 13, 2021"
    , title: "Tus proyectos más agiles que nunca!"
    , description: "Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto final. Wikipedia"
    , badge: "Proyectos",
    }, {
      date: "Julio 13, 2021"
    , title: "Tus proyectos más agiles que nunca!"
    , description: "Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto final. Wikipedia"
    , badge: "Proyectos",
    }, {
      date: "Julio 13, 2021"
    , title: "Tus proyectos más agiles que nunca!"
    , description: "Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto final. Wikipedia"
    , badge: "Proyectos",
    }, {
      date: "Julio 13, 2021"
    , title: "Tus proyectos más agiles que nunca!"
    , description: "Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto final. Wikipedia"
    , badge: "Proyectos",
    },
  ],
};
