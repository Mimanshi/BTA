'use strict'

import { Component, OnInit } from '@angular/core';
import {Routes, RouterLink, RouterLinkWithHref} from '@angular/router';
import {RouterModule, Router, ActivatedRoute } from '@angular/router';
import {FormGroup, FormControl} from '@angular/forms';
import {DataService} from 'src/app/services/data.service'

import { Subscriber } from 'rxjs';


import { HttpClientModule } from '@angular/common/http';


import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import { busDetails } from 'src/app/data';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  dataObj = { };
 


  constructor(private router: Router ,
              private route: ActivatedRoute,
              private http: HttpClient,
              private dataService : DataService) { }

  ngOnInit(){

 this.dataService.postData()
         .subscribe(data => {
          console.log("object", data['Detail']);
          });

  
    var radio_button1 = document.getElementById("radio1");
    var radio_button2 = document.getElementById("radio2");
    var arrival = <HTMLInputElement>document.getElementById("destDate");

    radio_button1.addEventListener("click", function () {
      arrival.disabled = true;
      arrival.value="dd/mm/yyyy";
    });
    radio_button2.addEventListener("click", function () {
     arrival.disabled = false;

   });

    var p=<HTMLBodyElement>document.getElementById("src");
    var q=<HTMLBodyElement>document.getElementById("dst");
    var r=<HTMLBodyElement>document.getElementById("choosen_date");
    p.innerText=DataService.JSONObj.source;
    q.innerText=DataService.JSONObj.destination;
    r.innerText=DataService.JSONObj.date;
    
  }
   

  Call()
  { 

    var x=<HTMLInputElement>document.getElementById("source");
    var y=<HTMLInputElement>document.getElementById("destination");
    var z=<HTMLInputElement>document.getElementById("srcDate");
   
   DataService.JSONObj.source = x.value;
   DataService.JSONObj.destination = y.value;
   DataService.JSONObj.date = z.value;

    var m=<HTMLBodyElement>document.getElementById("src");
    var n=<HTMLBodyElement>document.getElementById("dst");
    var o=<HTMLBodyElement>document.getElementById("choosen_date");
    m.innerText=DataService.JSONObj.source;
    n.innerText=DataService.JSONObj.destination;
    o.innerText=DataService.JSONObj.date;

  } 
  
}
