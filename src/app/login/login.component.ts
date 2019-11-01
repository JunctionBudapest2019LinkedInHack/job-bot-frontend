import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {

    this.http.get('https://junctionbudapestfunctions3.azurewebsites.net/api/PrepareDataForUser?name=tommy&code=gg8/ReTLv9NImka12PsuxVzOXdBKKiFPm3Y2acV2ycx0vjXjR6CVFw==').subscribe(response => {
        console.log(response);
    })
  }
}
