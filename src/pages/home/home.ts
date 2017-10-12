import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

declare var WifiWizard: any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  errorHandler(err: any) {
    alert(`Problem: ${err}`);
  }

  getSsidName() {
    WifiWizard.getCurrentSSID((ssid: string) => alert(`Your SSID: ${ssid}`), this.errorHandler);
  }

  isWifiEnabled() {
    WifiWizard.isWifiEnabled(truthy => alert(`Wifi Enabled: ${truthy}`), this.errorHandler);
  }

  listNetworks() {
    WifiWizard.listNetworks(networks => alert(`Networks: ${networks}`), this.errorHandler);
  }


}
