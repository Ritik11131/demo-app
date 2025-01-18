import { GenericTableComponent } from '@/app/shared/components/generic-table/generic-table.component';
import { dashboardTableConfig } from '@/app/shared/config/table-config';
import { statusCards } from '@/app/shared/constants';
import { IstatusCards } from '@/app/shared/interfaces/dashboard';
import { TableConfig } from '@/app/shared/interfaces/table';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { LeafletModule } from '@bluehalo/ngx-leaflet';
import { icon, latLng, marker, polyline, tileLayer, point, Map } from 'leaflet';
import { DashboardService } from '@/app/core/services/dashboard.service';
import { IResponseInterface } from '@/app/shared/interfaces/auth';

@Component({
  selector: 'app-dashboard',
  imports: [ButtonModule, AvatarModule, GenericTableComponent, CommonModule, LeafletModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {

  map!: Map;
  // Define our base layers so we can reference them multiple times
  streetMaps = tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    detectRetina: true,
  });
  wMaps = tileLayer('http://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png', {
    detectRetina: true,
  });

  // Marker for the top of Mt. Ranier
  summit = marker([46.8523, -121.7603], {
    icon: icon({
      iconSize: [25, 41],
      iconAnchor: [13, 41],
      iconUrl: 'marker-icon.png',
      shadowUrl: 'marker-shadow.png'
    })
  });

  // Marker for the parking lot at the base of Mt. Ranier trails
  paradise = marker([46.78465227596462, -121.74141269177198], {
    icon: icon({
      iconSize: [25, 41],
      iconAnchor: [13, 41],
      iconUrl: 'marker-icon.png',
      iconRetinaUrl: 'marker-icon-2x.png',
      shadowUrl: 'marker-shadow.png'
    })
  });

  // Path from paradise to summit - most points omitted from this example for brevity
  route = polyline([[46.78465227596462, -121.74141269177198],
  [46.80047278292477, -121.73470708541572],
  [46.815471360459924, -121.72521826811135],
  [46.8360239546746, -121.7323131300509],
  [46.844306448474526, -121.73327445052564],
  [46.84979408048093, -121.74325201660395],
  [46.853193528950214, -121.74823296256363],
  [46.85322881676257, -121.74843915738165],
  [46.85119913890958, -121.7519719619304],
  [46.85103829018772, -121.7542376741767],
  [46.85101557523012, -121.75431755371392],
  [46.85140013694763, -121.75727385096252],
  [46.8525277543813, -121.75995212048292],
  [46.85290292836726, -121.76049157977104],
  [46.8528160918504, -121.76042997278273]]);

  // Layers control object with our two base layers and the three overlay layers
  layersControl = {
    baseLayers: {
      'Street Maps': this.streetMaps,
      'Wikimedia Maps': this.wMaps
    },
    overlays: {
      'Mt. Rainier Summit': this.summit,
      'Mt. Rainier Paradise Start': this.paradise,
      'Mt. Rainier Climb Route': this.route
    }
  };

  // Set the initial set of displayed layers (we could also use the leafletLayers input binding for this)
  options = {
    layers: [this.streetMaps, this.route, this.summit, this.paradise],
    zoom: 7,
    center: latLng([46.879966, -121.726909])
  };

  tableConfig: TableConfig = dashboardTableConfig;
  statusCards: IstatusCards[] = statusCards;
  tableData: any[] = [];
  activeOnes:string = ''


  constructor(private dashboardService: DashboardService) { }

  async ngOnInit() {
    this.loadDashboardService()
  }

  createTableData = (response: any[]) => {
    let ignTrueCount = 0; // Counter for `ign` values that are true
  
    const tableData = response.map(item => {
      const ignValue = item.position.details.ign;
      if (ignValue) {
        ignTrueCount++;
      }
  
      return {
        vehicleNo: item.device.vehicleNo,
        deviceId: item.device.deviceId,
        deviceTime: item.position.deviceTime,
        ign: ignValue,
        imm: item.position.details.armed,
        extVolt: item.position.details.extVolt
      };
    });
  
    console.log('Count of ign = true:', ignTrueCount); // Log or return the count if needed
    return { tableData, ignTrueCount };
  };
  

  updateStatusCards = (data: any[], statusCards: IstatusCards[]): IstatusCards[] => {
    // Reset counts to zero for all cards
    statusCards.forEach(card => (card.count = 0));

    // Iterate through response and update status card counts
    data.forEach(({ position }) => {
      const status = position.status.status; // E.g., "Customer recharge expired"
      switch (status) {
        case 'Customer recharge expired':
          console.log('Customer recharge expired');
          statusCards.find(card => card.status === 'Offline')!.count++;
          break;
        case 'running':
          statusCards.find(card => card.status === 'running')!.count++;
          break;
        case 'stop':
          statusCards.find(card => card.status === 'Stopped')!.count++;
          break;
        case 'Offline':
          statusCards.find(card => card.status === 'Offline')!.count++;
          break;
        case 'Never Connected':
          statusCards.find(card => card.status === 'Never Connected')!.count++;
          break;
        case 'Idle':
          statusCards.find(card => card.status === 'Idle')!.count++;
      }
    });

    // Update the Total card with the sum of all other card counts
    const totalCount = statusCards
      .filter(card => card.status !== 'Total')
      .reduce((sum, card) => sum + card.count, 0);
    statusCards.find(card => card.status === 'Total')!.count = totalCount;

    return statusCards;
  };


  async loadDashboardService() {
    try {
      const response: IResponseInterface = await this.dashboardService.fetchVehicleList();
      console.log(response);

      // Update Status Cards
      this.statusCards = this.updateStatusCards(response?.data, statusCards);

      // Create Table Data
      const {tableData,ignTrueCount } = this.createTableData(response?.data);
      this.tableData = tableData;
      this.activeOnes = `${ignTrueCount} vehicles with IgnitionOn`;

      // Plot Markers on the Map
      // plotMarkers(response, map);

    } catch (error) {

    }
  }

  onMapReady(map: Map) {
    this.map = map;
    setTimeout(() => {
      this.map.fitBounds(this.route.getBounds(), {
        padding: point(24, 24),
        maxZoom: 12,
        animate: true
      });
      this.map.invalidateSize();
    }, 100);
  }

}
