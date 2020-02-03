import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cotizador',
  templateUrl: './cotizador.component.html',
  styleUrls: ['./cotizador.component.css']
})
export class CotizadorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    document.getElementById("navmenu").style.display = "block";
  }

}
