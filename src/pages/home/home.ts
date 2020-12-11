import { Component } from "@angular/core";
import { CupertinoPane, CupertinoSettings } from "cupertino-pane";
import { NavController } from "ionic-angular";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  btmPane: CupertinoPane;
  data: Item[];

  constructor(public navCtrl: NavController) { }

  ionViewDidLoad() {
    this.initData();
    this.showPane();
  }

  async initData() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/");
    const json = await response.json();
    console.log(json);

    this.data = json;
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
    this.navCtrl.push("EditPage", { item: this.data });
  }
}

export interface Item {
  name;
}
