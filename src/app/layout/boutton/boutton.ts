import { Component,EventEmitter,Input, Output } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-boutton',
  styleUrl: './boutton.css',
  templateUrl: './boutton.html',
})
export class Boutton {

  count= 0

  // faut toujour ajouter { [key: string]: string } pour pouvoir utiliser un strin pour indexer un element sinon dasn le template ([class]="Classecouleur[couleur]") donnera une erreur
@Input() title: string = '';
@Input() couleur: string ='';
@Input() textColor: string = ''
@Output() bouttonClicked = new EventEmitter<number>();

incrementer(){
  this.count++
  this.bouttonClicked.emit(this.count)
}

BtnColor: {[keys:string]:string} ={
  gray: "bg-gray-400",
  blue: "bg-blue-400",
  red: "bg-red-400",
  purple: "bg-purple-400",
  black: "bg-black",
  yellow: 'bg-yellow-400',
  green: 'bg-green-400'

}

BtnTextColor:{[keys:string]:string} ={
  white: 'text-white',
  blue: 'text-blue-500',
  red: 'text-red-500',
  purple: 'text-purple-500',
  yellow: 'text-yellow-500'
}

}


// gray: "bg-gray-500",
//     blue: "bg-blue-500",
//     rouge: "bg-red-500",
//     purple: "bg-purple-500",
//     black: "bg-black",
//     yellow: 'bg-yellow-500'
