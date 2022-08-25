import { formatCurrency, JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup,FormBuilder,FormControl } from '@angular/forms';
import { UpdateTable } from '../updatemodal';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-addresstable',
  templateUrl: './addresstable.component.html',
  styleUrls: ['./addresstable.component.css']
})
export class AddresstableComponent implements OnInit {
  Form!:FormGroup;
   tabledata:any=[{street:"mbsroad",city:"bhopal",state:"mp",country:"india"},];
   table:any=[];
   index:any=[];
   submitted:boolean=false
   

   updateobj:UpdateTable = new UpdateTable();
   
   
  constructor(private router:Router,private builder:FormBuilder) { }

  ngOnInit(): void {
    this.Form = this.builder.group({
      locationid:[''],
      lctitle:[''],
      lcnumber:[''],
      lcname:[''],
      lcemail:[''],
      street:[''],
      city:[''],
      state:[''],
      country:[''],
      postal:['']
    })
    this.tableadd();

  }
    
  tableadd(){
    this.tabledata = JSON.parse(localStorage.getItem('table') || '[]');
  }

  remove(res:any){
    
      const index = this.tabledata.indexOf(res);
      this.tabledata.splice(index, 1);
    localStorage.setItem("table",JSON.stringify(this.tabledata));
  }
   
  edit(tb:any){
      this.index = this.tabledata.indexOf(tb);
        console.log(tb) 
        this.Form.controls['locationid'].setValue(tb.locationid),
        this.Form.controls['lctitle'].setValue(tb.lctitle),
        this.Form.controls['lcnumber'].setValue(tb.lcnumber),
        this.Form.controls['lcname'].setValue(tb.lcname),
        this.Form.controls['lcemail'].setValue(tb.lcemail),
        this.Form.controls['street'].setValue(tb.street),
        this.Form.controls['city'].setValue(tb.city),
        this.Form.controls['state'].setValue(tb.state),
        this.Form.controls['country'].setValue(tb.country),
        this.Form.controls['postal'].setValue(tb.postal)
        
  }

  update(){ 
    this.tabledata.splice(this.index, 1,this.Form.value);
    localStorage.setItem("table",JSON.stringify(this.tabledata));
  }
    
}
