import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup ,Validators} from '@angular/forms';
import { retry } from 'rxjs';
import { Router } from '@angular/router';



@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
  
  myForm!:FormGroup;
  submitted:boolean=false;
  constructor(private router:Router) { }

  ngOnInit(): void {
    this.myForm = new FormGroup({
      "locationid":new FormControl("",[Validators.required]),
      "ldname":new FormControl("",[Validators.minLength(5)]),
      "lctitle":new FormControl("",[Validators.minLength(5)]),
      "ctrycode":new FormControl(""),
      "lcnumber":new FormControl(""),
      "lcname":new FormControl(""),
      "lcemail":new FormControl("" , [Validators.required,Validators.email]),
      "address":new FormControl(""),
      "street":new FormControl(""),
      "city":new FormControl(""),
      "state":new FormControl(""),
      "country":new FormControl(""),
      "postal":new FormControl(""),
    }),
    {updateOn:'submit'}
  }

  savedata(){
    
  if(this.myForm.valid){
    this.submitted=true;
    console.log(this.myForm.value)
    const value: any[] = JSON.parse(localStorage.getItem("table") || '[]');
    console.log(value)
    value.push(this.myForm.value);
    localStorage.setItem("table",JSON.stringify(value));
    this.router.navigate(['/table'])

  }
  this.submitted = false;
  }
// validation method
         get locationid(){
          return this.myForm.get("locationid")
         } 
         get locationdisplay(){
           return this.myForm.get("ldname")
         } ;
         get ltitle(){
                return this.myForm.get("lctitle");
         };
         get code(){
          return this.myForm.get("ctrycode")
         };
         get lno(){
          return this.myForm.get("lcnumber")
         };
        get lcname(){
          return this.myForm.get("lcname")
        };
        
        get email(){
          return this.myForm.get("lcemail");
        };
        get address(){
          return this.myForm.get("address")
        };
        get street(){
          return this.myForm.get("street")
        };
       get city(){
        return this.myForm.get("city")
       };
       get state(){
        return this.myForm.get("state")
       };
       get country(){
        return this.myForm.get("country")
       };
       get postal(){
        return this.myForm.get("postal      ")
       }

}
