'use strict'

import{a} from '../app.component'; 
import { Component, OnInit } from '@angular/core';
import {Routes, RouterLink, RouterLinkWithHref} from '@angular/router';
import {RouterModule, Router, ActivatedRoute } from '@angular/router';
import {FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
 
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
 
 constructor(private router: Router ,
              private route: ActivatedRoute ) { }

 ngOnInit() {
  
   var radio_button1=document.getElementById("radio1");
   var radio_button2=document.getElementById("radio2");
   var arrival=<HTMLInputElement>document.getElementById("arrival");
   
   radio_button1.addEventListener("click",function(){
   arrival.disabled=true;
   arrival.value="dd/mm/yyyy";
   });

    radio_button2.addEventListener("click",function(){
       arrival.disabled=false; 
    });   
  }
 
  validation()
  {
     var s=<HTMLInputElement>document.getElementById("source");
     var d=<HTMLInputElement>document.getElementById("destination");
     var t=<HTMLInputElement>document.getElementById("departure");
   
     a.JSONObj.source = s.value;
     a.JSONObj.destination = d.value;
     a.JSONObj.date = t.value;


    if((a.JSONObj.source == "") || (a.JSONObj.destination =="") || (a.JSONObj.date =="")){
      
      var h=<HTMLBodyElement>document.getElementById("h");
      h.innerText="* Please fill all the fields";
      this.router.navigateByUrl('login');
      
    }
   
    else{
       
      this.router.navigateByUrl('login/dashboard');
      
    }
    
  }
   
}


