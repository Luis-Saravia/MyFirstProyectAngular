import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterModule } from './modules/register/register.module';

const routes: Routes = [
  {
    path: 'register',
    loadChildren: () => import('./modules/register/register.module').then(m => m.RegisterModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), RegisterModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
