import {Component, OnInit,  HostListener } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  public showMovies: boolean;
  public buttonName: any = 'Afficher la liste';

  constructor() {}

  ngOnInit() {
    this.showMovies = true;
  }

  toggleAge() {
    this.showMovies = !this.showMovies;
    // CHANGE THE NAME OF THE BUTTON.
    if (this.showMovies) {
      this.buttonName = 'Afficher la liste';
    } else {
      this.buttonName = 'Masquer la liste';
    }
  }
}


