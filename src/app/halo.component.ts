import { Component } from '@angular/core';
import {reduce} from 'rxjs';

@Component({
  selector: 'app-halo',
  template: '<h1>{{judul}}</h1>',
  styles: ['h1 {color: red}']
})
export class HaloComponent {
  judul = 'Halo Vokasi';
}
