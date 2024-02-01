import {Component, EventEmitter, Output} from '@angular/core';
import {MatDialog} from '@angular/material/dialog'
  import {MatButtonModule} from '@angular/material/button';
import { AddRadioComponent } from '../add-radio/add-radio.component';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent{
  selectedOption: string;
  inputVal:string;
  inputStol:number;
  inputMesto:number;
  @Output() inputValChange = new EventEmitter<{}>();


  constructor(public dialog: MatDialog) {
    this.selectedOption = this.options[0].value;
  }

  getInputVal(){    
    this.inputValChange.emit({inputName: this.inputVal, inputStol: this.inputStol, inputMesto: this.inputMesto});
  }

  onDelete(){
    this.inputStol = null;
    this.inputMesto = null;
    this.inputValChange.emit({inpuName: this.inputVal, inputStol: this.inputStol, inputMesto: this.inputMesto});
  }

  onSelectChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    this.selectedOption = selectElement.value;
  }

  options: Array<{value: string, label: string}> = [
    { value: 'option1', label: 'Все статусы рации' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];

  openDialog() : void{
    this.dialog.open(AddRadioComponent, {
    })
  }
}
