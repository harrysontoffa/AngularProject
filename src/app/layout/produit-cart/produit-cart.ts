import { Component, EventEmitter, Input, Output } from '@angular/core';

export interface Produit{
  id: number,
  nom: string,
  prix: number,
  quantite: number,

}


@Component({
  imports: [],
  selector: 'app-produit-cart',
  styleUrl: './produit-cart.css',
  templateUrl: './produit-cart.html',
})
export class ProduitCart {

  @Input() data!: Produit
  @Output() quantiteChanged = new EventEmitter<{id:number, quantite:number}>()
  @Output() produitSupprimer = new EventEmitter<{id:number, quantite:number}>()
  AugmenterQuantite(){
    this.data.quantite++
      this.quantiteChanged.emit({id:this.data.id, quantite:this.data.quantite})
  }

  DiminuerQuantite(){
    if(this.data.quantite>1){
      this.data.quantite--;
        this.quantiteChanged.emit({id:this.data.id, quantite:this.data.quantite})
     }
     return
  }

   SuppressionProduit(){
    return this.produitSupprimer.emit({id: this.data.id,  quantite:this.data.quantite})
   }





}




































// export interface Produit {
//   id: string;
//   nom: string;
//   prix: number;
//   quantite: number;
// }




// @Input() data!: Produit
//  @Output() quantiteChanged = new EventEmitter<{id: string, quantite:number}>()
//  @Output() produitSupprime =new EventEmitter<string>()

//  AugmenterQuantite(){
//   this.data.quantite++;
//   this.quantiteChanged.emit({quantite: this.data.quantite, id: this.data.id})

//  }

//  DiminuerQuantite(){
//   if(this.data.quantite>1){this.data.quantite--
//     this.quantiteChanged.emit({quantite: this.data.quantite, id: this.data.id})
//     ;}
//     return


//  }

//  SupprimerProduit(){
//   this.produitSupprime.emit(this.data.id)
//  }
