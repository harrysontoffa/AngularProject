import { Component } from '@angular/core';

interface User{
  name: string,
  imageUrl: string,
  github: string,
  status: string,
  age: number,
  bio: string,
  reputation: string
}

@Component({
  imports: [],
  selector: 'app-profil',
  styleUrl: './profil.css',
  templateUrl: './profil.html',
})
export class Profil {

  user1: User={
    name: 'Steven Cigale',
    imageUrl: 'https://cdn.pixabay.com/photo/2026/01/30/23/52/zebra-10096754_1280.jpg',
    github: 'https://github.com/stevencigale',
    status: 'online',
    age: 23,
    bio: 'Steven cigale is a french film producer, screenwriter, and director,He is best known for his workin the 2000s and 2010s',
    reputation: 'Cool'

  }


}
