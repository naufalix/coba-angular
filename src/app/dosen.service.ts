import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IDosen } from './dosen';
import { Observable } from 'rxjs/';

@Injectable({
  providedIn: 'root'
})
export class DosenService {

  private url:string = 'assets/dosen.json';

  constructor(private http : HttpClient) { }

  // getDataDosen() : Observable<IDosen[]>{
  //   return this.http.get<IDosen[]>(this.url);
  // }

  getDataDosen(){
    return [
      {"NIK":"20201245", "nama":"Bambang W", "prodi":"TI"},
      {"NIK":"20201467", "nama":"Nurul H", "prodi":"TI"},
      {"NIK":"20201876", "nama":"Silvi R", "prodi":"DKV"},
      {"NIK":"20201284", "nama":"Heru W", "prodi":"DKV"}
    ];
  }
}
