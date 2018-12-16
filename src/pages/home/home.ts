import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public alert: AlertController) {

  }

  add(){

    let choice = this.alert.create({
      title : 'Añadir',
      inputs: [{
        type: 'radio',
        label: 'Lista',
        value: 'list'
      },{
        type: 'radio',
        label: 'Notas',
        value: 'notes'
      },{
        type: 'radio',
        label: 'Contacto',
        value: 'contact'
      }],
      buttons: [{
        text: 'Cancel',
        role: 'cancel',
        handler: data=>{
          console.log('Cancel');
        }
      },{
        text: 'Acept',
        handler: data=>{
          console.log(data);
        }
      }]
    });

    choice.present();

  }

}
