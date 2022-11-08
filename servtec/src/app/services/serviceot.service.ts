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
      db.executeSql('CREATE TABLE IF NOT EXISTS OT(MARCA VARCHAR(30), MODELO VARCHAR(30), SN VARCHAR(30), PASS VARCHAR(30), PROBLEMA VARCHAR(100), DETALLE VARCHAR(100))', []).then(() =>{
        console.log('tabla creada OK');
      }).catch(e =>{
        console.log('tabla no creada');
      })
    }).catch(e =>{
      console.log('Base datos no ok');
    });
  }

  //Almacenar OT
  almacenarOT(marca,modelo,sn,pass,problema,detalle){
    this.sqlite.create({
      name: 'datos.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
      console.log('base de datos OK');
      db.executeSql('INSERT INTO OT VALUES(?, ?, ?, ? ,? ,?)', [marca,modelo,sn,pass,problema,detalle]).then(() =>{
        console.log('MG: OT OK');
      }).catch(e =>{
        console.log('MG: OT not OK');
      })
    }).catch(e =>{
      console.log('Base datos OT no ok');
    });
  }

  validarOT(sn){
    return this.sqlite.create({
      name: 'datos.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
      console.log('base de datos OK');
      return db.executeSql('SELECT COUNT(SN) AS CANTIDAD FROM OT WHERE SN = ?', [sn]).then((data) =>{

        if (data.rows.item(0).CANTIDAD === 0){
          return false; //Equipo ya existe
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
