import { GenericTableComponent } from '@/app/shared/components/generic-table/generic-table.component';
import { dashboardTableConfig } from '@/app/shared/config/table-config';
import { statusCards } from '@/app/shared/constants';
import { IstatusCards } from '@/app/shared/interfaces/dashboard';
import { TableConfig } from '@/app/shared/interfaces/table';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-dashboard',
  imports: [ButtonModule,AvatarModule,GenericTableComponent,CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  tableConfig: TableConfig = dashboardTableConfig;
  statusCards: IstatusCards[] = statusCards;


  handleNew() {
    console.log('New product');
  }

  handleEdit(product: any) {
    console.log('Edit product', product);
  }

  handleDelete(product: any) {
    console.log('Delete product', product);
  }

  handleDeleteSelected(products: any[]) {
    console.log('Delete selected products', products);
  }

  handleImport(event: any) {
    console.log('Import', event);
  }

  handleExport() {
    console.log('Export');
  }

}
