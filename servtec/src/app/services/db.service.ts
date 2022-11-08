import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  constructor(private router: Router, private sqlite: SQLite) { 
    this.sqlite.create({
      name: 'datos.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
      console.log('base de datos OK');
      db.executeSql('CREATE TABLE IF NOT EXISTS USUARIO(ID INTERGER PRIMARY KEY AUTOINCREMENT, MAIL VARCHAR(75), CONTRASEÑA VARCHAR(30))', []).then(() =>{
        console.log('tabla creada OK');
      }).catch(e =>{
        console.log('tabla no creada');
      })
    }).catch(e =>{
      console.log('Base datos no ok');
    });
  }

  //Almacenar usuarios en SSCC
  almacenarUsuarios(correo, contrasena){
    this.sqlite.create({
      name: 'datos.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
      console.log('base de datos OK');
      db.executeSql('INSERT INTO USUARIO VALUES(?, ?)', [correo, contrasena]).then(() =>{
        console.log('MG: User OK');
      }).catch(e =>{
        console.log('MG: User not OK');
      })
    }).catch(e =>{
      console.log('Base datos no ok');
    });
  }

  validarUsuarios(correo){
    return this.sqlite.create({
      name: 'datos.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
      console.log('base de datos OK');
      return db.executeSql('SELECT COUNT(MAIL) AS CANTIDAD FROM USUARIO WHERE MAIL = ?', [correo]).then((data) =>{

        if (data.rows.item(0).CANTIDAD === 0){
          return false; //Correo ya existe
        }
        return true;

      }).catch(e =>{
        return true;
      })
    }).catch(e =>{
      return true;
    });
  }

  validarIngreso(correo,contrasena){
    return this.sqlite.create({
      name: 'datos.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
      console.log('base de datos OK');
      return db.executeSql('SELECT COUNT(MAIL) AS US, COUNT(CONTRASEÑA) AS PASS  FROM USUARIO WHERE MAIL = ?, CONTRASEÑA = ?', [correo,contrasena]).then((data) =>{
        if (data.rows.item(0).US < 1 && data.rows.item(0).PASS > 1 ){
          return false; 
        }
        return true;
      }).catch(e =>{
        return true;
      })
    }).catch(e =>{
      return true;
    });
  }

  
  canActivate(){
    this.router.navigate(['login']);
    return false;
  }
}
