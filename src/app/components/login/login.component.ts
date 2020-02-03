import { Component, OnInit } from '@angular/core';
//import { FsyncService } from '../../services/fsync.service';
//import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';
import { Inject } from '@angular/core'; 
import { Router, UrlSerializer } from '@angular/router';
//import { User } from '../../models/mdf';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { 

  }

  ngOnInit() {
    //document.body.style.background = "#E1F9FC";
    //document.getElementById("logback").style.background = "blue";
    document.getElementById("navmenu").style.display = "none";
  }

  login(){
    this.router.navigateByUrl('/cotizar');
  }

}
