import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { ToastModule } from 'primeng/toast';
import { Ripple } from 'primeng/ripple';
import { MessageService } from 'primeng/api';
import { SelectModule } from 'primeng/select';
import { MultiSelectModule } from 'primeng/multiselect';
import { DividerModule } from 'primeng/divider';
import { AvatarModule } from 'primeng/avatar';
@Component({
  selector: 'app-root',
  imports: [ButtonModule,InputTextModule,CardModule,ToastModule,DividerModule,SelectModule,MultiSelectModule,AvatarModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [MessageService]
})
export class AppComponent {
  title = 'demo-app';
  selectedCity:any;
  cities = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
];
  constructor(private messageService: MessageService) {}
  showSuccess() {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Message Content' });
}

showInfo() {
    this.messageService.add({ severity: 'info', summary: 'Info', detail: 'Message Content' });
}

showWarn() {
    this.messageService.add({ severity: 'warn', summary: 'Warn', detail: 'Message Content' });
}

showError() {
    this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Message Content' });
}

showContrast() {
    this.messageService.add({ severity: 'contrast', summary: 'Error', detail: 'Message Content' });
}

showSecondary() {
    this.messageService.add({ severity: 'secondary', summary: 'Secondary', detail: 'Message Content' });
}
}
