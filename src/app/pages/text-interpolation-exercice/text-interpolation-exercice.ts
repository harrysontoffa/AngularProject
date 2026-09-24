import { Component } from '@angular/core';
import { Profil } from '../../layout/profil/profil';
import { EventBiding } from '../../layout/event-biding/event-biding';
import { Boutton } from '../../layout/boutton/boutton';

// interface Student {
//   firstName: string;
//   lastName: string;
//   role: string;
//   isActive: boolean;
// }


@Component({
  imports: [Profil, EventBiding, Boutton],
  selector: 'app-text-interpolation-exercice',
  styleUrl: './text-interpolation-exercice.css',
  templateUrl: './text-interpolation-exercice.html',
})



export class TextInterpolationExercice {


  //  currentStudent: Student = {
  //   firstName: 'Alexandre',
  //   lastName: 'Dupont',
  //   role: 'Dev',
  //   isActive: false,
  // };
message1=0
  onBouttonClicked(count: number){
     this.message1= count

  }

   noteMax = "20/20";
   scoreActuel = "15/20";
   pourcentage = "76%";


   role = {
    travail: 'Dev',
    NomComplet(){return 'Alexandre DUPONT'},
    isActif: false
   };
    skills = ['angular 22','Nust vue','javascript','nestjs'];
}
