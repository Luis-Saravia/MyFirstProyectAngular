import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { RegisterComponent } from './modules/register/register.component';
import { RegisterModule } from './modules/register/register.module';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule, RegisterModule, MatCardModule, MatInputModule],
    declarations: [AppComponent]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
