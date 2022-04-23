import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-salam',
  templateUrl: './salam.component.html',
  styleUrls: ['./salam.component.scss']
})
export class SalamComponent implements OnInit {
  public foods = ["Bakso","Soto","Rawon","Pecel"]
  public tampilh2 = false;
  public sapaan = "";
  public input = "";
  public nim = "";
  public ket = "success";

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
