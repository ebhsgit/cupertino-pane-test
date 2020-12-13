import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { DataProvider, Item } from './../../providers/data/data';

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

  item: Item = { name: "" }

  constructor(public navCtrl: NavController, public dataProvider: DataProvider) { }

  ionViewDidLoad() {
    this.item = { name: this.dataProvider.data[2].name };
  }

  ionViewWillUnload() {
    this.dataProvider.data[2] = this.item;
  }
}
