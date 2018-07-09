import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
/**
 * Generated class for the PersonasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-personas',
  templateUrl: 'personas.html',
})
export class PersonasPage {
  personas = []
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // this.personas = Personas.getUsers()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PersonasPage');
  }

}
