import { Component } from "@angular/core";
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
  }

  showPane() {
    const settings: CupertinoSettings = {
      lowerThanBottom: true,
      clickBottomOpen: false,
      initialBreak: "middle",
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