import {Component, OnInit,  HostListener } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  isFirst: boolean = true;

  constructor() {}

  ngOnInit() {
  }

  @HostListener('mouseover') onMouseOver() {
    this.isFirst = true;
  }

  @HostListener('mouseout') onMouseOut() {
    this.isFirst = false;
  }

}


