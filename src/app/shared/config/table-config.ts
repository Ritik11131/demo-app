import { TableConfig } from "../interfaces/table";

export const dashboardTableConfig: TableConfig = {
    columns: [
      { field: 'code', header: 'Vehice No', sortable: true },
      { field: 'name', header: 'Imei', sortable: true },
      { field: 'last_update', header: 'Last Update', sortable: true },
      {
        field: 'ign',
        header: 'Ignition',
        sortable: true,
        displayType: 'chip',
        chipSeverity: (item: any) => {
          switch (item.status) {
            case 'INSTOCK':
              return 'success';
            case 'LOWSTOCK':
              return 'warn';
            case 'OUTOFSTOCK':
              return 'danger';
            default:
              return 'info';
          }
        }
      },
      {
        field: 'imm',
        header: 'Immobilizer',
        sortable: true,
        displayType: 'chip',
        chipSeverity: (item: any) => {
          switch (item.status) {
            case 'INSTOCK':
              return 'success';
            case 'LOWSTOCK':
              return 'warn';
            case 'OUTOFSTOCK':
              return 'danger';
            default:
              return 'info';
          }
        }
      },
      { field: 'batt_status', header: 'Battery Voltage', sortable: true },

    ],
    // toolbar: {
    //   showNew: true,
    //   showDelete: true,
    //   showImport: true,
    //   showExport: true
    // },
    paginator: true,
    globalFilter: true,
    selectionMode: 'single',
    showCurrentPageReport: true,
    rowHover: true,
    responsive: true
  };