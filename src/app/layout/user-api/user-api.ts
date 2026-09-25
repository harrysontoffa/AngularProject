import { Component,Signal,signal  } from '@angular/core';
import { UserInfoService } from '../../services/user-info.service';

@Component({
  imports: [],
  selector: 'app-user-api',
  styleUrl: './user-api.css',
  templateUrl: './user-api.html',
})
export class UserApi {

  newData= signal<any>(null);

  constructor(private apiService:UserInfoService){}

  ngOnInit(){
     this.apiService.getData().subscribe((responseApi)=>{
      this.newData.set(responseApi)

     })
  }



}
