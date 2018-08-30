'use strict'

import{a} from '../app.component'; 
import { Component, OnInit } from '@angular/core';
import {Routes, RouterLink, RouterLinkWithHref} from '@angular/router';
import {RouterModule, Router, ActivatedRoute } from '@angular/router';
import {FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  constructor(private router: Router ,
              private route: ActivatedRoute ) { }

  ngOnInit(){
  
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
    p.innerText=a.JSONObj.source;
    q.innerText=a.JSONObj.destination;
    r.innerText=a.JSONObj.date;

  }

  Call()
  { 
    var x=<HTMLInputElement>document.getElementById("source");
    var y=<HTMLInputElement>document.getElementById("destination");
    var z=<HTMLInputElement>document.getElementById("srcDate");
   
   a.JSONObj.source = x.value;
   a.JSONObj.destination = y.value;
   a.JSONObj.date = z.value;

    var m=<HTMLBodyElement>document.getElementById("src");
    var n=<HTMLBodyElement>document.getElementById("dst");
    var o=<HTMLBodyElement>document.getElementById("choosen_date");
    m.innerText=a.JSONObj.source;
    n.innerText=a.JSONObj.destination;
    o.innerText=a.JSONObj.date;
   
  } 
  
}
