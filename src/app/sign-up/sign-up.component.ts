import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { Email } from '../email';
=======
>>>>>>> 5f3bf94b9738efcbeb8b0c83511b624466a2c35d

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
<<<<<<< HEAD
  email:Email= {
    mail:'Superman@gmail.com'
  }
=======
  email=""
>>>>>>> 5f3bf94b9738efcbeb8b0c83511b624466a2c35d
  constructor() { }

  ngOnInit() {
  }

}
