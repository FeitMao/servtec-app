import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { DbService } from 'src/app/services/clientes/natural.service';

@Component({
  selector: 'app-natural',
  templateUrl: './natural.page.html',
  styleUrls: ['./natural.page.scss'],
})
export class NaturalPage implements OnInit {

  constructor(private dbService: DbService, private alertController: AlertController, private toastController: ToastController, private router: Router) { 
    console.log('Pagina Ingreso iniciada');
  }

  ngOnInit() {
  }

  async mostrarFormularioCN(){
    const alert = await this.alertController.create({
      header: 'Nuevo Cliente',
      inputs: [
        {
          name: 'nombre',
          type: 'text',
          placeholder: 'Nombre'
        },
        {
          name: 'apellido',
          type: 'text',
          placeholder: 'Apellido'
        },
        {
          name: 'rut',
          type: 'text',
          placeholder: 'Rut'
        },
        {
          name: 'numero',
          type: 'text',
          placeholder: 'Numero'
        },
        {
          name: 'direccion',
          type: 'text',
          placeholder: 'Direccion'
        },
        {
          name: 'comuna',
          type: 'text',
          placeholder: 'Comuna'
        },
        {
          name: 'ciudad',
          type: 'text',
          placeholder: 'Ciudad'
        },
        {
          name: 'pago',
          type: 'text',
          placeholder: 'Metodo de pago'
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
            this.alamacenarCN(data.nombre,data.apellido,data.rut,data.numero,data.direccion,data.comuna,data.ciudad,data.pago);
            console.log('OK');
          }
        }
      ]
    });
    await alert.present();
  }

  alamacenarCN(nombre,apellido,rut,numero,direccion,comuna,ciudad,pago){    
    this.dbService.validarCN(rut).then((data) => {
      if (!data) {
        console.log('Validado');
        this.dbService.almacenarCN(nombre,apellido,rut,numero,direccion,comuna,ciudad,pago);
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
