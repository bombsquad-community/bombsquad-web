import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WorkspaceService {
  workspaces:any;
  constructor(private http:HttpClient) {
    this.fetchWorkspaceList().subscribe((data:any)=>{
      if(data.status==200){
        this.workspaces = data.body.workspaces.filter((workspace: string)=>workspace!="");
        this.workspaces = this.workspaces.map((element:string, index:number) => {
          return element.replace((index+1)+": ","");
        })
      }
    },(error)=>{
      this.workspaces = [];
    })
  }

  fetchWorkspaceList() {
    return this.http.get<HttpResponse<any>>("https://api2.bombsquad.ga/workspacelist",{headers:{'Content-Type':'test/plain'},observe:'response'});
  }

  getWorkspaceList() {
    return this.workspaces;
  }

  installModToWorkspace(sourceUrl:string,workspace:string) {
      return this.http.post<HttpResponse<any>>("https://api2.bombsquad.ga/urltoworkspace",{sourceUrl:sourceUrl,workspace:workspace},{observe:'response'});
  }

}
