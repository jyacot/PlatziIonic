import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the PersonasproviderProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PersonasproviderProvider {
  JSON_PLACEHOLDER_URL:string="'https://jsonplaceholder.typicode.com/";
  constructor(public http: HttpClient) {
    console.log('Hello PersonasproviderProvider Provider');
  }

  getUsers(){
    return this.http.get(this.JSON_PLACEHOLDER_URL+"users/")
  }

}
