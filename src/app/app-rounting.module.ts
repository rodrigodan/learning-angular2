import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router'

import { FormComponent } from './form/form.component';

const routes: Routes = [
  { path: 'form', component: FormComponent}
]


@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRountingModule { }
