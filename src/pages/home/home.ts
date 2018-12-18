import { Component } from '@angular/core';
import { NavController, AlertController, ModalController } from 'ionic-angular';
import { CalendarModalOptions, CalendarModal, CalendarComponentOptions} from "ion2-calendar";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  options : CalendarComponentOptions = {
    color : 'secondary',
    weekStart : 1,
    weekdays : ['D','L','M','X','J','V','S'],
    monthPickerFormat : ['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic']
  }

  constructor(public navCtrl: NavController,
              public alert: AlertController,
              public modalCtrl: ModalController) {
    //this.openCalendar()
  }

  add(){

    let choice = this.alert.create({
      title : 'Añadir',
      //inputs: [],
      buttons: [{ text: 'Cancel', role: 'cancel'
      },{
        text: 'Acept',
        handler: data=>{
          console.log(data);
        }
      }]
    });

    choice.addInput({type: 'radio', label: 'Lista', value: 'list'});
    choice.addInput({type: 'radio', label: 'Notas', value: 'notes'});
    choice.addInput({type: 'radio', label: 'Contacto', value: 'contact'});

    choice.present();

  }

}
