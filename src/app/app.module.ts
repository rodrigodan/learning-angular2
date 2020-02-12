import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { ArticlesComponent } from './articles/articles.component';
import { AppRountingModule } from './app-rounting.module';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ArticlesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRountingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
