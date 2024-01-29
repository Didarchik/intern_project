import { Component } from '@angular/core';

@Component({
  selector: 'app-add-radio',
  templateUrl: './add-radio.component.html',
  styleUrl: './add-radio.component.scss'
})
export class AddRadioComponent {
  selectedOption: string;
  options: Array<{value: string, label: string}> = [
    { value: 'option1', label: 'Смена 1 (9:00-19:00)' },
    { value: 'option2', label: 'Смена 2 (8:00-18:00)' },
    { value: 'option3', label: 'Смена 3 (10:00-20:00)' },
  ];

  constructor() {
    this.selectedOption = this.options[0].value;
  }

  onSelectChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    this.selectedOption = selectElement.value;
  }
}
