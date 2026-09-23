import { Component, EventEmitter, output, OnInit  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { v4 as uuidv4 } from 'uuid';



@Component({
  imports: [CommonModule, FormsModule],
  selector: 'app-event-biding',
  styleUrl: './event-biding.css',
  templateUrl: './event-biding.html',
})



export class EventBiding implements OnInit {


  ListTaches =[
    {
      id: uuidv4(),
      titre: 'Faire Exo',

      categorie: 'travail',
      dateCreation: new Date(),
      isComplete: false
    }
  ]
    ngOnInit(){
    const data = localStorage.getItem('liste');
    if(data){
      this.ListTaches = JSON.parse(data);
    } else {
      localStorage.setItem('liste', JSON.stringify(this.ListTaches));
    }
    this.listFiltre = this.ListTaches;
  }

  categorySelectionner =""
  listFiltre = this.ListTaches

  filtrerParCategori(){
    const data = localStorage.getItem('liste')

    this.ListTaches = data ? JSON.parse(data) : [];

    this.listFiltre= this.ListTaches.filter(tache =>{
      if(this.categorySelectionner != 'tout'){return tache.categorie === this.categorySelectionner}
      return this.ListTaches
    })

  }
  TrackByid(index: number, tache: any){
    return tache['id']
  }



  SupprimerTache(tacheId: string){
    const data = localStorage.getItem('liste')
    this.ListTaches = data ? JSON.parse(data) : [];


    this.listFiltre = this.listFiltre.filter(tache=> tache.id !== tacheId)
    this.ListTaches = this.ListTaches.filter(tache=>
       tache.id !== tacheId)

      localStorage.setItem('liste', JSON.stringify(this.ListTaches))
  }

  libelleTache: string=''
  categorieSelectionne: string=''

  ajoutTache(){

    const data = localStorage.getItem('liste')

    this.ListTaches = data ? JSON.parse(data) : [];

    this.ListTaches.push(
      {
      id: uuidv4(),
      titre: this.libelleTache,

      categorie: this.categorieSelectionne,
      dateCreation: new Date(),
      isComplete: false
      }
    )
    this.libelleTache=''
    this.categorieSelectionne=''

    localStorage.setItem('liste',  JSON.stringify(this.ListTaches))

  }




}





//   categorySelectionee=''

//   listeFiltrerParCategorie = this.ListTaches

//   filtrerParCategory(){
//     this.listeFiltrerParCategorie = this.ListTaches.filter(tache=>{
//       if(this.categorySelectionee !== 'tout'){return tache.categorie === this.categorySelectionee}
//       return this.ListTaches

//     })
//   }

//   trackById(index: number, tache: any){
//     return tache['id']
//   }


//   listApresSupp= this.ListTaches
//   suppElmt(idAsupp: number){
//   this.ListTaches = this.ListTaches.filter(tache => tache.id !== idAsupp);
//   this.listeFiltrerParCategorie = this.listeFiltrerParCategorie.filter(tache => tache.id !== idAsupp);
// }
