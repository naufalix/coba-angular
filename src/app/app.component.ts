import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Hai selamat datang di Filkom!';
  public nama = "Naufal";
  public pesan= ""
  getPenjumlahan(a: number, b: number){
    return a+b;
  }
}
