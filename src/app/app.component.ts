import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Damien';
  avis = 'super';
  objdate = new Date();
  date = this.objdate.getDate() + "/" + this.objdate.getMonth() + "/" + this.objdate.getFullYear();
}
