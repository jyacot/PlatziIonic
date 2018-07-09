import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PersonasPage } from '../personas/personas';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  variable:string = "Personas"
  constructor(public navCtrl: NavController) {

  }
  navegarAPersonas(){
    this.navCtrl.push(PersonasPage);
  }

}
