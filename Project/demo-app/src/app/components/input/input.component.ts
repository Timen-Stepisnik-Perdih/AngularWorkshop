import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder, ValidationErrors, AbstractControl, AsyncValidatorFn, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public nameControl = new FormControl('', [Validators.required, Validators.maxLength(150), this.containsA]);
  public emailControl = new FormControl('', [Validators.required, Validators.email]);

  public formGroup = new FormGroup({
    name: this.nameControl,
    email: this.emailControl
  });

  public entries = [];

  public submit(){
    this.entries.push({
      name: this.nameControl.value,
      email: this.emailControl.value
    });
    console.log(this.entries);
  }

  public formValidity(){
    return this.emailControl.valid && this.nameControl.valid;
  }

  public formGroupValidity(){
    return this.formGroup.valid;
  }

  private containsA(c: FormControl){
    if (c.value.includes('a') || c.value.includes('A'))
      return null
    return {
      containsA: {
        valid: false
      }
    }
  }

}
