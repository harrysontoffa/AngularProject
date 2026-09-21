import { Component } from '@angular/core';
import { Profil } from '../../layout/profil/profil';

// interface Student {
//   firstName: string;
//   lastName: string;
//   role: string;
//   isActive: boolean;
// }


@Component({
  imports: [Profil],
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
