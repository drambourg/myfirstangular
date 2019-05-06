import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserProfilComponent } from './user-profil/user-profil.component';
import { MoviesComponent } from './movies/movies.component';
import { HighlightmovieDirective } from './movies/highlightmovie.directive';
import { DisplaymoviesDirective } from './movies/displaymovies.directive';


@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    UserProfilComponent,
    MoviesComponent,
    HighlightmovieDirective,
    DisplaymoviesDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
