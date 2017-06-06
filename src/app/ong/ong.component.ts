import { Component, OnInit } from '@angular/core';

declare var jQuery:any;

@Component({
  selector: 'app-ong',
  templateUrl: './ong.component.html',
  styleUrls: ['./ong.component.css']
})
export class OngComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    jQuery(document).ready(function(){
      jQuery('.parallax').parallax();
    });
  }

}
