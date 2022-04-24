import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-vokasi',
  templateUrl: './vokasi.component.html',
  styleUrls: ['./vokasi.component.scss']
})
export class VokasiComponent implements OnInit {

  @Input('DataParent') public namaMhs : any;
  @Output() public aksiEvent = new EventEmitter();
  public tanggal = new Date();
  public fakultas = "Filkom Unversitas Brawijaya";
  public mahasiswa = {
    "nim" : "12345678",
    "nama": "Naufalix"
  }
  constructor() { }

  getAksi(){
    return this.aksiEvent.emit("Selamat datang di Filkom UB");
  }

  ngOnInit(): void {
  }

}
