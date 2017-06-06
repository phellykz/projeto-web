import { Component, OnInit } from '@angular/core';

declare var jQuery:any;

@Component({
  selector: 'app-voluntarios',
  templateUrl: './voluntarios.component.html',
  styleUrls: ['./voluntarios.component.css']
})
export class VoluntariosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    jQuery(document).ready(function(){
      jQuery('.parallax').parallax();
    });
  }

}

