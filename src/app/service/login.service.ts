import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
   login:boolean=false;
  constructor(public http:HttpClient) { }

  loggedin(data:any){
   return this.http.post("https://reqres.in/api/login",data)
  }
  islogedin(){
    return !!localStorage.getItem('token');
   }
}
