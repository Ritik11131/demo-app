import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

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


import { MenuItem, SelectItem } from 'primeng/api';
import { BadgeModule } from 'primeng/badge';
import { CalendarModule } from 'primeng/calendar';
import { ChartModule } from 'primeng/chart';
import { Chip } from 'primeng/chip';
import { DrawerModule } from 'primeng/drawer';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumber } from 'primeng/inputnumber';
import { InputSwitchModule } from 'primeng/inputswitch';
import { KnobModule } from 'primeng/knob';
import { OverlayBadgeModule } from 'primeng/overlaybadge';
import { RadioButton } from 'primeng/radiobutton';
import { SelectButton } from 'primeng/selectbutton';
import { Slider } from 'primeng/slider';
import { TabMenuModule } from 'primeng/tabmenu';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { TooltipModule } from 'primeng/tooltip';
import { Subscription } from 'rxjs';


import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  imports: [CommonModule, ButtonModule, InputTextModule, CardModule, ToastModule, DividerModule, SelectModule, MultiSelectModule, AvatarModule, RouterModule, FormsModule, SelectButton, TooltipModule, OverlayBadgeModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [MessageService]
})
export class AppComponent {
  title = 'demo-app';



  sampleOptions: any[];
  selectedSampleOption: any;

  sampleAppsSidebarNavs: any;

  sampleAppsSidebarNavsMore: any;

  selectedSampleAppsSidebarNav: any;

  isSlimMenu: boolean = true;

  dashboardSidebarVisible: boolean = false;

  constructor() {

    this.sampleOptions = [
      {
        icon: 'pi pi-home',
        title: 'Overview',
        src: 'https://www.primefaces.org/cdn/primevue/images/landing/apps/sampleshots/overview'
      },
      {
        icon: 'pi pi-comment',
        title: 'Chat',
        src: 'https://www.primefaces.org/cdn/primevue/images/landing/apps/sampleshots/chat'
      },
      {
        icon: 'pi pi-inbox',
        title: 'Inbox',
        src: 'https://www.primefaces.org/cdn/primevue/images/landing/apps/sampleshots/mail'
      },
      {
        icon: 'pi pi-th-large',
        title: 'Cards',
        src: 'https://www.primefaces.org/cdn/primevue/images/landing/apps/sampleshots/cards'
      },
      {
        icon: 'pi pi-user',
        title: 'Customers',
        src: 'https://www.primefaces.org/cdn/primevue/images/landing/apps/sampleshots/customers'
      },
      {
        icon: 'pi pi-video',
        title: 'Movies',
        src: 'https://www.primefaces.org/cdn/primevue/images/landing/apps/sampleshots/movies'
      }
    ];
    this.selectedSampleOption = this.sampleOptions[0];

    this.sampleAppsSidebarNavs = [
      { icon: 'pi pi-home', title: 'Overview' },
      { icon: 'pi pi-comment', title: 'Chat' },
      { icon: 'pi pi-inbox', title: 'Inbox' },
      { icon: 'pi pi-th-large', title: 'Cards' },
      { icon: 'pi pi-user', title: 'Customers' },
      { icon: 'pi pi-video', title: 'Movies' }
    ];
    this.sampleAppsSidebarNavsMore = [{ icon: 'pi pi-cog', title: 'Settings' }];

    this.selectedSampleAppsSidebarNav = 'Overview';
  }

  setSelectedSampleAppsSidebarNav(title: any) {
    this.selectedSampleAppsSidebarNav = title;
  }
}
