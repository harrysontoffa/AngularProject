import { Component, OnInit, signal, Signal } from '@angular/core';
import { MeteoService } from '../../services/meteo.service';

@Component({
  imports: [ ],
  selector: 'app-affichage-api',
  styleUrl: './affichage-api.css',
  templateUrl: './affichage-api.html'
})
export class AffichageApi {
  title: string='apiData'
  newData= signal<any>(null);
  constructor(private apiService: MeteoService){}

  ngOnInit(){
    this.apiService.getData().subscribe((responseApi)=>{
      this.newData.set(responseApi)


    })
  }




}




// title: string='apiData'
//   newData: any;
//   //on donne le service au constructor pour que il utilise le composant puisse lutiliser et interroger lapi
//   constructor(private apiService: MeteoService){}

//   //on met la logique dans onInit pour que le composznt interroge lapi une fois a la creation du composant seulement
//   // vu que on as definis la methde getData dans le fhicier .service on peut lappeller dirrectment pour recuperer les donnes de lapi
//   ngOnInit(){
//     this.apiService.getData().subscribe((responseApi)=>{
//       // on va affecter la reponse de lapi a notre constant que on as defnins a lexterieux de ctte fonction
//       this.newData= responseApi;

//     })
//   }
