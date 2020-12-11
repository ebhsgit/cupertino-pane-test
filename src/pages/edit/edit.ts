import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Item } from '../home/home';

/**
 * Generated class for the EditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit',
  templateUrl: 'edit.html',
})
export class EditPage {


  data: Item[] = [];
  item: Item = { name: "" }

  constructor(public navCtrl: NavController, public navParm: NavParams) { }

  ionViewDidLoad() {
    this.data = this.navParm.get("item");
    this.item = { name: this.data[2].name };
  }

  ionViewWillUnload() {
    this.data[2] = this.item;
  }
}
