import { Component, Input } from '@angular/core';
interface Userdata{
  nom: string,
  age: number
}
@Component({
  imports: [],
  selector: 'app-active-user',
  styleUrl: './active-user.css',
  templateUrl: './active-user.html',
})
export class ActiveUser {
  @Input() data!: Userdata




}
