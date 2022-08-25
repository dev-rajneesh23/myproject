import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';
import { Router } from '@angular/router';
import { Token } from '@angular/compiler';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  token_data:any = Token;
  constructor(private loginservice:LoginService, private router:Router) { }

  ngOnInit(): void {
  }
   logindata(data:any){
    this.loginservice.loggedin(data).subscribe((res:any)=>{
     this.loginservice.login = true;
     this.token_data = res.token
     this.router.navigate(['/home'])
     localStorage.setItem('token',this.token_data)
      
    })
   }
}
