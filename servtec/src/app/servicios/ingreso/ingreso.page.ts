import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { DbService } from 'src/app/services/serviceot.service';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.page.html',
  styleUrls: ['./ingreso.page.scss'],
})
export class IngresoPage implements OnInit {

  constructor(private dbService: DbService, private alertController: AlertController, private toastController: ToastController, private router: Router) { 
    console.log('Pagina Ingreso iniciada');
  }

  ngOnInit() {
  }

  async mostrarFormularioOT(){
    const alert = await this.alertController.create({
      header: 'Nuevo Usuario',
      inputs: [
        {
          name: 'marca',
          type: 'text',
          placeholder: 'Marca'
        },
        {
          name: 'modelo',
          type: 'text',
          placeholder: 'Modelo'
        },
        {
          name: 'sn',
          type: 'text',
          placeholder: 'Numero Serie'
        },
        {
          name: 'pass',
          type: 'text',
          placeholder: 'Contraseña sesion'
        },
        {
          name: 'problema',
          type: 'text',
          placeholder: 'Problema'
        },
        {
          name: 'detalle',
          type: 'text',
          placeholder: 'Detalle'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirme');
          }
        }, {
          text: 'Guardar',
          handler: (data) => {
            this.alamacenarOT(data.marca, data.modelo, data.sn, data.pass, data.problema, data.detalle);
            console.log('OK');
          }
        }
      ]
    });
    await alert.present();
  }

  alamacenarOT(marca,modelo,sn,pass,problema,detalle){    
    this.dbService.validarOT(sn).then((data) => {
      if (!data) {
        console.log('Validado');
        this.dbService.almacenarOT(marca,modelo,sn,pass,problema,detalle);
      } else {
        console.log('No Validado');
        this.presentToast();
      }
    });    
  }

  async presentToast(){
    const toast = await this.toastController.create({
      message: 'Equipo ya esta ingresado',
      duration: 2000
    });
    toast.present();
  }

}
