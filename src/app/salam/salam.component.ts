import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-salam',
  templateUrl: './salam.component.html',
  styleUrls: ['./salam.component.scss']
})
export class SalamComponent implements OnInit {
  public sapaan = "";
  public input = "";
  public nim = "";

  constructor() { }

  ngOnInit(): void {
  }

  hello(event:any){
   alert("Clicked by "+event.pointerType);
   console.log(event);
   this.sapaan = "Hello selamat satang di Filkom";
  }
  tampilData(value:any){
    this.input = value;
  }

}
