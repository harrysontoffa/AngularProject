import { Component, EventEmitter, Output } from '@angular/core';
import type { Produit } from '../produit-cart/produit-cart';
import { FormsModule } from '@angular/forms';
@Component({
  imports: [FormsModule],
  selector: 'app-formulaire-panier',
  styleUrl: './formulaire-panier.css',
  templateUrl: './formulaire-panier.html',
})
export class FormulairePanier {
idProduit =1
nomProduit=''
prixProduit=0
quantiteProduit=0

produit: Produit={
  id:this.idProduit,
  nom: this.nomProduit,
  prix: this.prixProduit,
  quantite: this.quantiteProduit,

}

@Output() Onsubmit = new EventEmitter<{id:number,nom:string,prix:number,quantite:number}>()



handleOnSubmit(){
  this.Onsubmit.emit({id:this.idProduit,nom:this.nomProduit,prix:this.prixProduit,quantite:this.quantiteProduit})
  this.idProduit =0
 this.nomProduit=''
  this.prixProduit=0
  this.quantiteProduit=0

}







}
