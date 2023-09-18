import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Form } from './register.interface';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  title = 'Angular-form';

  constructor(){}

  registerForm: FormGroup<Form> = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', Validators.required),
    country: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
  })

  onSubmit(){
    if(this.registerForm.valid) {
      console.log('Valores del Formulario', this.registerForm.value)
    } else {
      console.log('Los valores no se pueden imprimir, faltan valores o llenar correctamente las entradas')
    }
  }
}