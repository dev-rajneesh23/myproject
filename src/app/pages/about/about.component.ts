import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, FormControl,Validators} from '@angular/forms';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  myForm!: FormGroup
  submitted:boolean=false;
  constructor(private builder:FormBuilder) { }

  ngOnInit(): void {
    this.myForm = this.builder.group({
      locationid: ['',Validators.required],
      ldname:['',Validators.required]
    }),
    {updateOn:'submit'}
  }
  onSubmit(){
    console.log(this.myForm.value);
    
  }

   get lid(){
    return this.myForm.get('locationid')
   }
}
