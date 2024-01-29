import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ServiceService } from '../../../service/service.service';
import { users } from "../users/data"


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent implements OnChanges{
  color:string[] = [];
  fonarClick:boolean[] = [];
  newArr = users;
  newArr2 = users;
  @Input() inputVal;
  constructor(){  
    for (let i = 0; i < this.newArr.length; i++){
      this.fonarClick[i] = false;
      if (i % 2 == 0){
        this.color[i] = '#222';
      }
      else{
        this.color[i] = 'rgba(34, 34, 34, 0.50)';
      }
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    //console.log("Users page: ", this.inputVal.inputStol);
    
    this.newArr = users
    .filter(item => item.name.toLowerCase().includes(this.inputVal.inputVal.toLowerCase()));  
  
  }
}
