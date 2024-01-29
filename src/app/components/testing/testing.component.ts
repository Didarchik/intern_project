import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrl: './testing.component.css'
})
export class TestingComponent {
  onSubmit(form: NgForm){
    console.log(form);
  }
}
