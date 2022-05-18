import { Component, OnInit } from '@angular/core';
import { DosenService } from '../dosen.service'

@Component({
  selector: 'app-dosen',
  templateUrl: './dosen.component.html',
  styleUrls: ['./dosen.component.scss']
})
export class DosenComponent implements OnInit {

  public daftarDosen :any = [];

  constructor(private data:DosenService) { }

  ngOnInit(): void {
    this.daftarDosen = this.data.getDataDosen();
    //this.daftarDosen = JSON.stringify(this.data.getDataDosen());
    //this.daftarDosen = Object.entries(this.data.getDataDosen());
  }

}
