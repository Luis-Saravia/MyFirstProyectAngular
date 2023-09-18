import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterComponent } from './register.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterComponent],
      imports: [
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        ReactiveFormsModule,
        FormsModule,
        BrowserAnimationsModule,
      ],
    });
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should view if all input contain formControlName', () => {
    const inputsDe = fixture.debugElement.queryAll(By.css('input'));

    inputsDe.forEach((_, index) => {
      expect(inputsDe[index].nativeElement.attributes[2].name).toContain('formcontrolname');
    })
  });

  it('should all input contain formControlName correct', () => {
    const inputsDe = fixture.debugElement.queryAll(By.css('input'));

    const valueFormControlName = [
      'firstName',
      'lastName',
      'email',
      'phone',
      'country',
      'city'
    ]

    valueFormControlName.forEach((value, index) => {
      expect(inputsDe[index].nativeElement.attributes[2].value).toContain(value);
    })
  });

  it('should all mat-label contain text correct', () => {
    const matLabelDe = fixture.debugElement.queryAll(By.css('mat-label'));

    const valueMatLabel = [
      'First name',
      'Last name',
      'Email',
      'Número de celular',
      'País',
      'Ciudad'
    ];

    valueMatLabel.forEach((value, index) => {
      expect(matLabelDe[index].nativeElement.innerText).toContain(value);
    })
  });
});
