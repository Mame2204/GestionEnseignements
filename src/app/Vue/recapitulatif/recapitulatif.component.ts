import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-recapitulatif',
  templateUrl: './recapitulatif.component.html',
  styleUrls: ['./recapitulatif.component.css']
})
export class RecapitulatifComponent implements OnInit {

  //public currentUserConnect:any;
  @Input() service:any;
  constructor(private authService: AuthService, private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('http://localhost:8888/searchUEs').subscribe(
        value => {
        if(Object.keys(value).length==0)
          this.router.navigate(['/connexion']);
        else {
          this.service=value;
          //this.reloadComponent();
          //this.refresh();
        }
    },
    error => console.log(error),);
  }

}
