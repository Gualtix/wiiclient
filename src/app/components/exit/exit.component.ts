import { Component, OnInit } from '@angular/core';
import { Router, UrlSerializer } from '@angular/router';

@Component({
  selector: 'app-exit',
  templateUrl: './exit.component.html',
  styleUrls: ['./exit.component.css']
})
export class ExitComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.navigateByUrl('/login');
  }

}
