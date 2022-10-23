import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const httpOption={
  headers:new HttpHeaders({'Content-Type':'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  constructor(private http:HttpClient) { }

  getPlayers(key:string){
    if(!key || key=="") key = "Andro"
    return this.http.get("https://api2.bombsquad.ga/player" ,{params:{key:key}});
  }
}
