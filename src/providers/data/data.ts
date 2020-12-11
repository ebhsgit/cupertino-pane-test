import { Injectable } from '@angular/core';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {

  data: Item[];

  constructor() {
  }

  async initData() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/");
    const json = await response.json();
    console.log(json);

    this.data = json;
  }
}

export interface Item {
  name;
}
