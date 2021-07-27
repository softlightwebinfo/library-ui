import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Datatable } from "../components/Datatable/Datatable";
import { ITableColumnManager } from "../interfaces/ITableColumn";
import rows from '../mockdata/MOCK_DATA.json';

const Username = ({ row, value }: ITableColumnManager) => {
  return (
    <div className="rgt-cell-inner" style={ { display: 'flex', alignItems: 'center', overflow: 'hidden' } }>
      <img src={ row.avatar } alt="user avatar"/>
      <span className="rgt-text-truncate" style={ { marginLeft: 10 } }>{ value }</span>
    </div>
  );
};
export default {
  title: 'Base/Datatable/Default',
  component: Datatable,
  argTypes: {},
  args: {
    rows: rows,
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
        cellRenderer: Username,
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
      }, {
        id: "7-8",
        field: "first_name",
        label: "Name complete",
        visible: true,
        searchable: true,
        editable: true,
        sortable: true,
        resizable: true,
        getValue: ({ value, column, row }: any) => `${ row.first_name } ${ row.last_name }`,
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
        sort: ({ a, b, isAscending }: any) => {
          let aa = a.split("/").reverse().join(), bb = b.split("/").reverse().join();
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
  },
} as unknown as ComponentMeta<typeof Datatable>;

const Template: ComponentStory<typeof Datatable> = (args) => <Datatable { ...args } />;

export const Default = Template.bind({});
Default.args = {};
export const NoSearch = Template.bind({});
NoSearch.args = {
  showSearch: false,
};
