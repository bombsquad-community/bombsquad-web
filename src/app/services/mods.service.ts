import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders}  from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

const httpOption={
  headers:new HttpHeaders({'Content-Type':'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class ModsService {
  constructor(private http:HttpClient) { }

  getMods(size:any,page:any,key:string){
    return this.http.get("https://api2.bombsquad.ga/mods" ,{params:{page:page,size:size,key:key}});
  }
}
