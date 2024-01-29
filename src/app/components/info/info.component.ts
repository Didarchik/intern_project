import { Component } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrl: './info.component.scss'
})
export class InfoComponent {
  inputVal:object;
  updateInputVal(newValue: object) {
    this.inputVal = newValue; 
    console.log('Updated inputVal:', this.inputVal); 
  }
}
