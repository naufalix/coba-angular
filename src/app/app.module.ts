import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HaloComponent } from './halo.component';
import { MahasiswaComponent } from './mahasiswa/mahasiswa.component';
import { SalamComponent } from './salam/salam.component';
import { VokasiComponent } from './vokasi/vokasi.component';
import { DosenComponent } from './dosen/dosen.component';
import { DetailDosenComponent } from './detail-dosen/detail-dosen.component';
import { DosenService } from './dosen.service';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    HaloComponent,
    MahasiswaComponent,
    SalamComponent,
    VokasiComponent,
    DosenComponent,
    DetailDosenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [DosenService],
  bootstrap: [AppComponent]
})
export class AppModule { }
