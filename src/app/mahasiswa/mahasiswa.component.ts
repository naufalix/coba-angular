import { Component, OnInit } from '@angular/core';

const logo = require('/assets/favicon2.ico').default as string;

@Component({
  selector: 'app-mahasiswa',
  templateUrl: './mahasiswa.component.html',
  styleUrls: ['./mahasiswa.component.scss']
})



export class MahasiswaComponent implements OnInit {
  public imageUrl = '/assets/';
  public image = ['favicon2.ico'];
  public assetsx = "assets/img/mitsuha.png";
  public logo = logo;

  public tahun = 2020;
  public id = "Nama Mahasiswa";
  public status = false;
  public te = "text-error";
  public ts = "text-success";
  public ti = "text-info";
  public tsp = "text-special";
  public hasError = false;
  public isSpecial = true;
  public msg = {
    "text-error" : this.hasError,
    "text-success" : !this.hasError,
    "text-special" : this.isSpecial
  }
  public pstyle = {
    "color" : "purple",
    "fontWeight" : "600"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
