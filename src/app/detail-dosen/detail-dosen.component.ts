import { Component, OnInit } from '@angular/core';
import { DosenService } from '../dosen.service'

@Component({
  selector: 'app-detail-dosen',
  templateUrl: './detail-dosen.component.html',
  styleUrls: ['./detail-dosen.component.scss']
})
export class DetailDosenComponent implements OnInit {

  public daftarDosen :any = [];

  constructor(private data:DosenService) { }

  ngOnInit(): void {
    this.daftarDosen = this.data.getDataDosen();
  }

}
