import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProduitCart } from '../produit-cart/produit-cart';
import type { Produit } from '../produit-cart/produit-cart';


@Component({
  imports: [ProduitCart, CommonModule],
  selector: 'app-panier',
  styleUrl: './panier.css',
  templateUrl: './panier.html',
})
export class Panier {
  // ici japplique le type Produit pour luis duire que tout les element de ce tableau doivent etre sous cette forme Produit
  listeProduits: Produit[]= [

    {
      id: 1,
      nom: "COCO",
      prix: 12,
      quantite: 2
    },
    {
      id: 2,
      nom: "Ananas",
      prix: 4,
      quantite: 2
    },
    {
      id: 3,
      nom: "COCA COLA",
      prix: 9,
      quantite: 2
    }

  ]

  TrackById(index: number, produit: Produit){
    return produit.id
  }

// ici vu que lenfant va emit un id et un type donc deux elemnt enfermer dans une accolade
// ici nous devont passer en paramet un objet aussi contenant deux elements pareil que notre emit enfant dans productCard
//il est preferable de nomer les deux paramettre de la meme maniere que ils sont nomer dasn notre enfant pour ne pas se meller les pincaeau
// on pourrais alors acceder aux elemetn en faisant event.element1 ou event.elemnet2
// cependant si lenfant emit uniquement un seul element il nest pas neccessaire de mettre les accolade ou ecrire le nom de lelemnt attendut explicitement
// on ecris seulemnt event.  si lenfant emit(this.data.id) alors ici event est littereallemnt event = la valeur de => (this.data.id)
  handleQuantityChange(event:{id: number, quantite:number}){
    // on va chercher ensuite dans notre liste si il existe un produit avec les informations que on as recu
    // poour cela on utilise la fonction find() appliqaubles aux tableau
    // pour pouvoir manipuler et changer les valeur de cet elemnt on est obliger de crer une constante et attribuer a cet elemnt le find trouver
   // ici le p dans le find represente 1 elemnt de notre tableau

    const produit = this.listeProduits.find(p=> p.id === event.id)
    // si on trouve un produit correspondant a notre recherche mtn on va appliquer la logique de mettre a jour
    // les champs que  on veut mettre a jour
    if(produit){
      // si notre produit existe donc on va lui affecter la valeur de quantiter
      //recu de notre emit({id: number, quantite: number})
      produit.quantite = event.quantite
    }
    return

  }

  handleSuppression(event:{id:number, quantite:number}){
    const produit = this.listeProduits.find(p=> p.id === event.id)
    if(produit){
      this.listeProduits= this.listeProduits.filter(p=> p.id!==event.id)
    }
    return

  }


}

























  // trackBy est initialiser toute de cette maniere pour permetre aux ngFor de distinger tous les elements grace a leur id

//  TrackById(index: number, produit: Produit){
//       return produit.id

//     }

//     //

//     handdleChangementQuantite(event:{id: string, quantite:number}){

//       const produit = this.ListeProduit.find(p=> p.id === event.id )
//       if(produit){
//         produit.quantite = event.quantite
//       }
//       return
//     }

//     handleSuppression(event:string){
//       const produit = this.ListeProduit.find(p=> p.id === event )
//       if(produit){
//         this.ListeProduit= this.ListeProduit.filter(p=>p.id !==event)
//       }

//     }











