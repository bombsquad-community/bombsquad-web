import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const httpOption={
  headers:new HttpHeaders({'Content-Type':'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class ServersService {

  constructor(private http:HttpClient) { }

  getServers(size:any,page:any,key:string){
    return this.http.get("https://api2.bombsquad.ga/allservers" ,{params:{page:page,size:size,key:key}});
  }
}
