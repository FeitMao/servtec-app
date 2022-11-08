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
      db.executeSql('CREATE TABLE IF NOT EXISTS CNATURAL(NOMBRE VARCHAR(30), APELLIDO VARCHAR(30), RUT VARCHAR(30), NUMERO VARCHAR(30), DIRECCION VARCHAR(100), COMUNA VARCHAR(30), CIUDAD VARCHAR (30), PAGO VARCHAR(20))', []).then(() =>{
        console.log('tabla creada OK');
      }).catch(e =>{
        console.log('tabla no creada');
      })
    }).catch(e =>{
      console.log('Base datos no ok');
    });
  }

  //Almacenar Clientes Naturales
  almacenarCN(nombre,apellido,rut,numero,direccion,comuna,ciudad,pago){
    this.sqlite.create({
      name: 'datos.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
      console.log('base de datos OK');
      db.executeSql('INSERT INTO CNATURAL VALUES(?, ?, ?, ? ,? ,? ,? ,?)', [nombre,apellido,rut,numero,direccion,comuna,ciudad,pago]).then(() =>{
        console.log('MG: CLIENTE OK');
      }).catch(e =>{
        console.log('MG: CLIENTE not OK');
      })
    }).catch(e =>{
      console.log('Base datos CNATURAL no ok');
    });
  }

  validarCN(rut){
    return this.sqlite.create({
      name: 'datos.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
      console.log('base de datos OK');
      return db.executeSql('SELECT COUNT(RUT) AS CANTIDAD FROM CNATURAL WHERE RUT = ?', [rut]).then((data) =>{

        if (data.rows.item(0).CANTIDAD === 0){
          return false; //cliente ya existe
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

