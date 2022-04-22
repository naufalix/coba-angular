import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HaloComponent } from './halo.component';
import { MahasiswaComponent } from './mahasiswa/mahasiswa.component';
import { SalamComponent } from './salam/salam.component';

@NgModule({
  declarations: [
    AppComponent,
    HaloComponent,
    MahasiswaComponent,
    SalamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
