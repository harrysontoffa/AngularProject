import { Component } from '@angular/core';
import { UserData } from '../user-data/user-data';
import { ActiveUser } from '../active-user/active-user';

@Component({
  imports: [UserData, ActiveUser],
  selector: 'app-conponent-commmunication',
  styleUrl: './conponent-commmunication.css',
  templateUrl: './conponent-commmunication.html',
})
export class ConponentCommmunication {
  nom = ''
  age= 0
  user = { nom: 'AZERTYUIOP', age: 45 };


  UpdateUser(event:{libelle: string, age: number}){
    this.nom= event.libelle
    this.age= event.age
    this.user = {nom: this.nom, age:this.age}

  }
}
