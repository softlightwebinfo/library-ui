import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Datatable } from "../components/Datatable/Datatable";

export default {
  title: 'Base/Datatable/Default',
  component: Datatable,
  argTypes: {},
  args: {},
} as ComponentMeta<typeof Datatable>;

const Template: ComponentStory<typeof Datatable> = (args) => <Datatable { ...args } />;

export const Default = Template.bind({});
Default.args = {
  rows: [],
  columns: [
    {
      id: "checkbox",
      visible: true,
      pinned: true,
      width: "54px",
    },
    {
      id: "2",
      field: "username",
      label: "Username",
      visible: true,
      searchable: true,
      editable: true,
      sortable: true,
      resizable: true,
      // cellRenderer: UsernameCell,
      // editorCellRenderer: UsernameEditorCell,
    },
    {
      id: "3",
      field: "first_name",
      label: "First Name",
      visible: true,
      searchable: true,
      editable: true,
      sortable: true,
      resizable: true,
    },
    {
      id: "4",
      field: "last_name",
      label: "Last Name",
      visible: true,
      searchable: true,
      editable: true,
      sortable: true,
      resizable: true,
    },
    {
      id: "5",
      field: "email",
      label: "Email",
      visible: true,
      searchable: true,
      editable: true,
      sortable: true,
      resizable: true,
    },
    {
      id: "6",
      field: "gender",
      label: "Gender",
      visible: true,
      searchable: true,
      editable: true,
      sortable: true,
      resizable: true,
      // editorCellRenderer: GenderEditorCell,
    },
    {
      id: "7",
      field: "ip_address",
      label: "IP Address",
      visible: true,
      searchable: true,
      editable: true,
      sortable: true,
      resizable: true,
    },
    {
      id: "8",
      field: "last_visited",
      label: "Last Visited",
      visible: true,
      searchable: true,
      editable: true,
      sortable: true,
      resizable: true,
      sort: ({ a, b, isAscending }) => {
        let aa = a.split("/").reverse().join(),
          bb = b.split("/").reverse().join();
        return aa < bb
          ? isAscending
            ? -1
            : 1
          : aa > bb
            ? isAscending
              ? 1
              : -1
            : 0;
      },
    },
    {
      id: "buttons",
      width: "max-content",
      visible: true,
      pinned: true,
      sortable: false,
      resizable: false,
      // cellRenderer: ButtonsCell,
      // editorCellRenderer: ButtonsEditorCell,
    },
  ],
};
