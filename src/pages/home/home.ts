import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
// import { CalendarModalOptions, CalendarModal, CalendarComponentOptions} from "ion2-calendar";
import { CalendarComponentOptions} from "ion2-calendar";

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

  segmentBot : String;

  listas : any;
  notas : any;
  contactos : any;

  constructor(public navCtrl: NavController,
              public alert: AlertController) {
    //this.openCalendar()
    this.segmentBot = 'calendar';
    this.listas = [];
    this.notas = [];
    this.contactos = [];

  }
}
