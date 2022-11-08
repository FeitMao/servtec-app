import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-register-ss',
  templateUrl: './register-ss.page.html',
  styleUrls: ['./register-ss.page.scss'],
})
export class RegisterSSPage implements OnInit {

  
  constructor(private dbService: DbService, private alertController: AlertController, private toastController: ToastController, private router: Router) { 
    console.log('Pagina Login iniciada');
  }

  ngOnInit() {
  }





  //Formulario de creacion de users de servicio al cliente
  async mostrarFormularioSSCC(){
    const alert = await this.alertController.create({
      header: 'Nuevo Usuario',
      inputs: [
        {
          name: 'correo',
          type: 'text',
          placeholder: 'Correo Electronico'
        },
        {
          name: 'contrasena',
          type: 'password',
          placeholder: 'Password'
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
            this.alamacenarUsuarios(data.correo, data.contrasena);
            console.log('OK');
          }
        }
      ]
    });
    await alert.present();
  }

  alamacenarUsuarios(correo, contrasena){
    this.dbService.validarUsuarios(correo).then((data) => {
      if (!data) {
        console.log('Validado');
        this.dbService.almacenarUsuarios(correo, contrasena);
      } else {
        console.log('No Validado');
        this.presentToast();
      }
    });
    
  }
  

  async presentToast(){
    const toast = await this.toastController.create({
      message: 'Usuario ya existe',
      duration: 2000
    });
    toast.present();
  }

}
