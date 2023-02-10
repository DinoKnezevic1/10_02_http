import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DogsComponent } from './components/dogs/dogs.component';
import { CatsComponent } from './components/cats/cats.component';
import { MouseComponent } from './components/mouse/mouse.component';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DogsComponent,
    CatsComponent,
    MouseComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
