import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgModule } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-connexion',
  templateUrl: '././connexion.component.html',
  styleUrls: ['././connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
  }

  onLoginButtonClicked(email: string, password: string) {
      this.http.get('http://localhost:8888/login?email='+email+'&Mdp='+password).subscribe(
        value => {},
        error => console.log(error),
       );
  }

}

