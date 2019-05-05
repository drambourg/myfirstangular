import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-user-profil',
  templateUrl: './user-profil.component.html',
  styleUrls: ['./user-profil.component.css']
})
export class UserProfilComponent implements OnInit {
  public show: boolean;
  public buttonName: any = 'Afficher l\'âge';
    user: User = {
      name : 'Doe',
      firstName : 'John',
      age : 25,
      quote : '',
      photo : 'https://randomuser.me/api/portraits/lego/2.jpg'
  };


  constructor() { }

  ngOnInit() {
  }
  toggleAge() {
    this.show = !this.show;
    // CHANGE THE NAME OF THE BUTTON.
    if (this.show) {
      this.buttonName = 'Afficher l\'âge';
    } else {
      this.buttonName = 'Masque l\'âge';
    }
  }
}
