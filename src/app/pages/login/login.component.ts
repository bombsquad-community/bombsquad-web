import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  date:any;
  proxy:string="";
  key:string="";
  url?:string;
  error:any;
  tag?:string;
  isLoggedIn= false;
  child: Window | null | undefined;
  constructor(private authService:AuthService, private tokenStorage:TokenStorageService, private router:Router) { }

  ngOnInit(): void {
    if(this.tokenStorage.getToken()){
      this.tag =  this.tokenStorage.getUser().tag;
      this.isLoggedIn=true;
      this.router.navigate(['/mods']);
    }

  }


  login(){
    this.authService.getProxy().subscribe((data:any) => {

      this.date = JSON.stringify(data.end_command[1].s);
      this.proxy = data.end_command[1].p;
      this.key = data.end_command[1].k;
      this.url = data.open_url;
      setTimeout(()=> {
        this.child = window.open(this.url,"_blank");
      }, 2000)

      this.checkProgress();
    })
  }

  checkProgress() {
    this.authService.checkLoginProgress(this.date,this.proxy,this.key).subscribe((data:any) => {
        if(data.status==202) {
           setTimeout(()=> {
              this.checkProgress();
           }, 3000)
        }else if(data.status ==200) {
          const user = JSON.parse(atob(data.body.token.split(".")[1]))
          this.tokenStorage.saveUser(user);
          this.tokenStorage.saveToken(data.body.token);
          this.child?.close();
          this.afterLoggedIn();
        }
    },(error)=>{
      this.error = error.error;
    })
  }

  afterLoggedIn(){
    const user = this.tokenStorage.getUser();
    this.tag = user.tag;
    this.isLoggedIn = true;
    setInterval(()=>{
      location.reload();
    },1000);
  }
  retry(){
    location.reload();
  }
}
