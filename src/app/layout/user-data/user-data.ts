import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-user-data',
  styleUrl: './user-data.css',
  templateUrl: './user-data.html',
})
export class UserData {
  libelle = ''
  age=0

  @Output() userDataEmitUpdate = new EventEmitter<{libelle: string, age:number}>()





  handlesubmite(){
    if(!this.age || !this.libelle || this.age<0 ){
      return
    }
    this.userDataEmitUpdate.emit({libelle: this.libelle, age: this.age})
  }


}
