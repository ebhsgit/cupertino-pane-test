import { Component } from "@angular/core";
import { GoogleMapOptions, GoogleMaps, GoogleMapsEvent } from "@ionic-native/google-maps";
import { CupertinoPane, CupertinoSettings } from "cupertino-pane";
import { NavController } from "ionic-angular";
import { DataProvider } from './../../providers/data/data';

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  btmPane: CupertinoPane;

  constructor(public navCtrl: NavController, public dataProvider: DataProvider) { }

  ionViewDidLoad() {
    this.dataProvider.initData();
    this.showPane();
    this.showMap();
  }

  showMap() {
    return new Promise<void>(res => {
      const mapOptions: GoogleMapOptions = {
        camera: {
          target: {
            lat: 43.0741904,
            lng: -89.3809802
          },
          zoom: 18,
          tilt: 30
        }
      };

      const map = GoogleMaps.create('map_canvas', mapOptions);
      map.one(GoogleMapsEvent.MAP_READY).then(() => {
        res();
      })
    })
  }

  showPane() {
    const settings: CupertinoSettings = {
      lowerThanBottom: true,
      clickBottomOpen: false,
      initialBreak: "bottom",
      buttonClose: false,
      bottomClose: false,
      breaks: {
        top: { enabled: false },
        bottom: { enabled: true, height: 100 }
      },
      draggableOver: false
    };
    this.btmPane = new CupertinoPane(".cupertino-pane", settings);
    this.btmPane.present();
  }

  changeData() {
    this.navCtrl.push("AnotherPage");
  }
}